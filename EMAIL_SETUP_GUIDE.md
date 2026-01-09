# Email Setup Guide for Portfolio Contact Form

## Overview
Your contact form now sends emails to your Gmail account when visitors submit the form.

## Gmail App Password Setup

Since Gmail no longer allows less secure apps, you need to create an **App Password**:

### Step 1: Enable 2-Step Verification
1. Go to your Google Account: https://myaccount.google.com/
2. Click on **Security** in the left menu
3. Under "Signing in to Google", click **2-Step Verification**
4. Follow the prompts to enable 2-Step Verification

### Step 2: Create an App Password
1. After enabling 2-Step Verification, go back to **Security**
2. Under "Signing in to Google", click **App passwords**
3. You may need to sign in again
4. Select app: **Mail**
5. Select device: **Other (Custom name)**
6. Enter: "Portfolio Contact Form"
7. Click **Generate**
8. Google will display a 16-character password
9. **Copy this password** (you won't be able to see it again)

### Step 3: Update Your .env File
1. Open `backend/.env`
2. Replace `your_app_password_here` with the 16-character password you just generated:
   ```
   SENDER_PASSWORD=your_16_character_password
   ```
3. Save the file

## Testing

1. **Restart your backend server**:
   - Stop the current backend (Ctrl+C in the terminal)
   - Run: `uvicorn server:app --reload --port 8000`

2. **Test the contact form**:
   - Go to your portfolio website
   - Fill out the contact form
   - Click "Send Message"
   - Check your Gmail inbox (donaldstephen146@gmail.com)

## Configuration Summary

Your current email setup in `backend/.env`:
- **SMTP Server**: smtp.gmail.com
- **SMTP Port**: 587
- **Sender Email**: donaldstephen146@gmail.com
- **Recipient Email**: donaldstephen146@gmail.com (where contact form emails will be sent)

## Troubleshooting

### "Email configuration is incomplete" error
- Make sure all email variables in `.env` are set
- Restart the backend server after changing `.env`

### "Authentication failed" error
- Double-check that you copied the App Password correctly
- Make sure there are no spaces in the password
- Verify 2-Step Verification is enabled

### Still not working?
- Check if your Gmail account has any security alerts
- Try disabling antivirus/firewall temporarily to test
- Make sure port 587 is not blocked

## Alternative: Use a Different Email Service

If you prefer not to use Gmail, you can use services like:
- **SendGrid** (free tier available)
- **Mailgun** (free tier available)
- **Amazon SES** (very cheap)

Let me know if you need help setting up an alternative!
