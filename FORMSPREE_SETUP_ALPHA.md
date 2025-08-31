# Formspree Setup Guide for Auto Glass Center

## Step 1: Create Formspree Account

1. Go to [https://formspree.io](https://formspree.io)
2. Click "Sign Up" to create a free account
3. Verify your email address

## Step 2: Create Your Forms

### For Quote Requests:
1. In your Formspree dashboard, click "New Form"
2. Name it "Auto Glass Quote Requests"
3. Copy the form endpoint URL (looks like: `https://formspree.io/f/xxxxxxxX`)

### For Contact Messages:
1. Create another form named "Contact Messages"
2. Copy this form endpoint URL as well

## Step 3: ✅ Form Endpoints Already Configured!

Your website forms are already configured with the correct Formspree endpoints:

### Quote Requests Form:
- **Endpoint:** `https://formspree.io/f/xdklkegl`
- **File:** `quote.html` (line 115)
- **Configured:** ✅ Ready to receive quote requests

### Contact Messages Form:
- **Endpoint:** `https://formspree.io/f/xandneop`
- **File:** `contact.html` (line 113)
- **Configured:** ✅ Ready to receive contact messages

## Step 4: 🚀 Your Forms Are Ready to Use!

**Your website is now live and ready to receive customer inquiries!**

### What happens when customers submit forms:
1. **Quote requests** → Sent to your email via `xdklkegl` endpoint
2. **Contact messages** → Sent to your email via `xandneop` endpoint  
3. **Customer confirmation** → Success popup appears on website
4. **Email notification** → You receive formatted email with all details

## Step 5: Test Your Forms (Recommended)

1. Go to your quote page and submit a test quote request
2. Go to your contact page and submit a test message
3. Check your email for the submissions (including spam folder)
4. Verify all fields are coming through correctly

## Step 6: Optional Email Template Customization

In your Formspree dashboard, you can customize:
- Email subject lines  
- Auto-reply messages to customers
- Email formatting

### Recommended Email Template for Quote Requests:

**Subject:** New Auto Glass Quote Request from {{name}}

**Body:**
```
New quote request received:

Customer Information:
- Name: {{name}}
- Email: {{email}}
- Phone: {{phone}}

Vehicle Information:
- Year: {{year}}
- Make: {{make}}
- Model: {{model}}
- VIN: {{vin}}

Service Details:
- Glass Type: {{glass-type}}
- Mobile Service: {{mobile}}
- Notes: {{notes}}

Please respond within 30 minutes.
```

### Recommended Email Template for Contact Messages:

**Subject:** New Contact Message from {{name}}

**Body:**
```
New contact form submission:

From: {{name}} ({{email}})
Phone: {{phone}}
Subject: {{subject}}

Message:
{{message}}
```

## Step 7: Free Plan Details

- Formspree Free Plan: 50 submissions/month
- Paid plans start at $10/month for 1,000 submissions
- You'll get email notifications when approaching limits

## What Happens When Forms Are Submitted:

1. Customer fills out form on your website
2. Form data is sent to Formspree
3. Formspree forwards the data to your email
4. Customer is redirected back to your site with success message
5. Success popup appears confirming submission

## Email Format You'll Receive:

### Quote Request Email:
```
From: customer-email@example.com
Subject: New Auto Glass Quote Request from John Doe

Customer Information:
- Name: John Doe
- Email: customer-email@example.com
- Phone: (555) 123-4567

Vehicle Information:
- Year: 2020
- Make: Toyota
- Model: Camry
- VIN: 1HGBH41JXMN109186

Service Details:
- Glass Type: Windshield
- Mobile Service: Yes - Come to me
- Notes: Small chip in lower right corner of windshield
```

## Troubleshooting:

- **Forms not working?** Check that form IDs are correctly replaced
- **Not receiving emails?** Check spam folder and verify Formspree setup
- **Getting errors?** Ensure form action URLs are correct

## Security Features Included:

- Spam protection through Formspree
- Input validation and sanitization
- VIN number format validation
- Required field validation

Your forms are now ready to receive customer inquiries directly to your email! 