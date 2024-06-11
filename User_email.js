let appData = {
    name: 'Gmail',
    mailboxes: [
      {
        name: 'inbox',
        emails: [
          {
            subject: 'Meeting Reminder',
            body: 'Don\'t forget about the meeting at 3 PM.',
            sender: 'boss@example.com',
            receiver: 'you@example.com',
            date: '2024-06-11',
            status: 'inbox'
          },
          {
            subject: 'Lunch Plans',
            body: 'Do you want to grab lunch today?',
            sender: 'friend@example.com',
            receiver: 'you@example.com',
            date: '2024-06-11',
            status: 'inbox'
          }
        ]
      },
      {
        name: 'junk',
        emails: [
          {
            subject: 'You won a prize!',
            body: 'Click here to claim your prize.',
            sender: 'scam@example.com',
            receiver: 'you@example.com',
            date: '2024-06-10',
            status: 'junk'
          }
        ]
      },
      {
        name: 'sent',
        emails: [
          {
            subject: 'Project Update',
            body: 'The project is on track for completion.',
            sender: 'you@example.com',
            receiver: 'team@example.com',
            date: '2024-06-09',
            status: 'sent'
          }
        ]
      },
      {
        name: 'drafts',
        emails: [
          {
            subject: 'Draft: New Proposal',
            body: 'This is a draft of the new proposal.',
            sender: 'you@example.com',
            receiver: 'client@example.com',
            date: '2024-06-08',
            status: 'draft'
          }
        ]
      },
      {
        name: 'trash',
        emails: [
          {
            subject: 'Old Email',
            body: 'This is an old email that was deleted.',
            sender: 'old@example.com',
            receiver: 'you@example.com',
            date: '2024-06-07',
            status: 'trash'
          }
        ]
      }
    ],
    contacts: [
      {
        name: 'Erin',
        email: 'erin@example.com',
        lastMessage: 'I won’t be in class today'
      },
      {
        name: 'Matt',
        email: 'matt@example.com',
        lastMessage: 'Today, we are going to rock it!'
      },
      {
        name: 'Julian',
        email: 'julian@example.com',
        lastMessage: 'Can we reschedule our meeting?'
      }
    ]
  };
  
  
  let mailboxNames = appData.mailboxes.map(mailbox => mailbox.name);
  console.log("Mailbox Names:", mailboxNames);
  

  let emailsList = [];
  appData.mailboxes.forEach(mailbox => {
    emailsList = emailsList.concat(mailbox.emails);
  });
  console.log("Emails List:", emailsList);
  

  let secondEmailText = appData.mailboxes.find(mailbox => mailbox.name === 'inbox').emails[1].body;
  console.log("Second Email Text:", secondEmailText);
  

  let draftEmail = appData.mailboxes.find(mailbox => mailbox.name === 'drafts').emails.pop();
  draftEmail.status = 'sent';
  appData.mailboxes.find(mailbox => mailbox.name === 'sent').emails.push(draftEmail);
  console.log("Updated Mailboxes after moving draft to sent:", appData.mailboxes);
  
 
 let newDraftEmail = {
    subject: 'Draft: Follow Up',
    body: 'This is a draft of the follow-up email.',
    sender: 'you@example.com',
    receiver: 'client@example.com',
    date: '2024-06-12',
    status: 'draft'
  };
  appData.mailboxes.find(mailbox => mailbox.name === 'drafts').emails.push(newDraftEmail);
  console.log("Updated Drafts Mailbox:", appData.mailboxes.find(mailbox => mailbox.name === 'drafts').emails);
  