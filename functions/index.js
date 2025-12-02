// Install: npm install firebase-functions firebase-admin @sendgrid/mail
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const sgMail = require('@sendgrid/mail');

admin.initializeApp();
const db = admin.firestore();

sgMail.setApiKey(functions.config().sendgrid?.apikey || process.env.SENDGRID_APIKEY);

// Callable function to send email for contact
exports.sendContactEmail = functions.https.onCall(async (data, context)=>{
  const id = data.id;
  if(!id) throw new functions.https.HttpsError('invalid-argument', 'Missing id');

  const doc = await db.collection('contacts').doc(id).get();
  if(!doc.exists) throw new functions.https.HttpsError('not-found','Contact not found');

  const contact = doc.data();
  const msg = {
    to: 'info@in5production.com',
    from: 'no-reply@in5production.com', // use verified sender in SendGrid
    subject: `New Contact: ${contact.title || contact.email || 'New submission'}`,
    text: `New contact submission:\n\n${JSON.stringify(contact, null, 2)}`
  };
  await sgMail.send(msg);
  return {success:true};
});

// Optionally: trigger on create
exports.onContactCreate = functions.firestore
  .document('contacts/{id}')
  .onCreate(async (snap, ctx) => {
    const contact = snap.data();
    const msg = {
      to: 'info@in5production.com',
      from: 'no-reply@in5production.com',
      subject: `New Contact: ${contact.title || contact.email || 'New submission'}`,
      text: `New contact submission:\n\n${JSON.stringify(contact, null, 2)}`
    };
    try { await sgMail.send(msg); return null; } catch(e){ console.error(e); return null; }
  });
