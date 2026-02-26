# Authentication Setup Guide

## Overview
Complete Supabase authentication system with Google OAuth, protected routes, onboarding flow, and profile management.

## Features Implemented

### 1. Authentication
- ✅ Email/Password login
- ✅ Google OAuth login
- ✅ Sign up with email verification
- ✅ Password reset flow
- ✅ Session management
- ✅ Automatic profile creation

### 2. Route Protection
- ✅ Middleware-based authentication
- ✅ Protected routes: `/dashboard`, `/profile`, `/onboarding`, `/search`, `/research`, `/map`, `/land-banking`, `/loans`, `/news`
- ✅ Automatic redirect to login for unauthenticated users
- ✅ Automatic redirect to onboarding if not completed

### 3. User Interface
- ✅ Navbar with user avatar (shows first letter of name)
- ✅ Dropdown menu with Profile, Dashboard, Logout
- ✅ Logout confirmation dialog
- ✅ Light theme only (no dark mode)
- ✅ 99acres-style corporate design

### 4. Onboarding Flow
- ✅ Step 1: Account Type (USER or ORGANIZATION)
- ✅ Step 2: Conditional forms based on account type
- ✅ Step 3: Summary and confirmation
- ✅ Saves to Supabase profiles table
- ✅ Redirects to dashboard on completion

### 5. Profile Management
- ✅ View and edit basic information
- ✅ View and edit investment preferences
- ✅ Real-time updates to Supabase
- ✅ Responsive design

## Setup Instructions

### 1. Database Setup

Run the SQL in `supabase-schema.sql` in your Supabase SQL Editor to create:
- `profiles` table
- Row Level Security policies
- Automatic profile creation trigger

### 2. Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable Google+ API
4. Go to Credentials → Create Credentials → OAuth 2.0 Client ID
5. Add authorized redirect URIs:
   - `http://localhost:3000/auth/confirm` (development)
   - `https://yourdomain.com/auth/confirm` (production)
6. Copy Client ID and Client Secret

### 3. Supabase Configuration

1. Go to Supabase Dashboard → Authentication → Providers
2. Enable Google provider
3. Paste Client ID and Client Secret
4. Save changes

### 4. Environment Variables

Already configured in `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_publishable_key
```

## File Structure

```
src/
├── actions/
│   ├── auth/
│   │   └── auth.ts              # Auth actions (login, signup, logout, Google OAuth)
│   ├── onboarding.ts            # Save onboarding data
│   └── profile.ts               # Update profile data
├── app/
│   ├── auth/
│   │   ├── confirm/route.ts     # OAuth callback handler
│   │   ├── login/page.tsx       # Login page
│   │   └── sign-up/page.tsx     # Sign up page
│   ├── dashboard/page.tsx       # Protected dashboard
│   ├── profile/page.tsx         # Protected profile page
│   ├── onboarding/page.tsx      # Onboarding flow
│   └── page.tsx                 # Landing page
├── components/
│   ├── auth/
│   │   ├── login-form.tsx       # Login form with Google OAuth
│   │   └── sign-up-form.tsx     # Sign up form with full_name
│   ├── layout/
│   │   ├── navbar-99.tsx        # Main navbar with avatar
│   │   └── user-avatar.tsx      # Avatar dropdown component
│   ├── onboarding/
│   │   ├── OnboardingLayout.tsx # Main onboarding container
│   │   ├── StepAccountType.tsx  # Account type selection
│   │   ├── StepUserForm.tsx     # User form
│   │   ├── StepOrganizationForm.tsx # Organization form
│   │   └── StepSummary.tsx      # Summary screen
│   └── profile/
│       └── ProfileContent.tsx   # Profile edit component
├── lib/
│   ├── supabase/
│   │   ├── client.ts            # Browser client
│   │   └── server.ts            # Server client
│   └── types/
│       └── onboarding-v2.ts     # TypeScript types
└── middleware.ts                # Route protection

```

## User Flow

### New User Registration
1. User visits `/auth/sign-up`
2. Fills form with full name, email, password
3. Receives verification email
4. Clicks verification link
5. Profile automatically created in database
6. Redirected to `/onboarding`
7. Completes 3-step onboarding
8. Redirected to `/dashboard`

### Google OAuth Registration
1. User clicks "Continue with Google" on login page
2. Authenticates with Google
3. Redirected to `/auth/confirm`
4. Profile automatically created
5. Redirected to `/onboarding`
6. Completes onboarding
7. Redirected to `/dashboard`

### Existing User Login
1. User visits `/auth/login`
2. Enters credentials or uses Google
3. If onboarding incomplete → redirected to `/onboarding`
4. If onboarding complete → redirected to `/dashboard`

### Protected Routes
- All protected routes check authentication via middleware
- Unauthenticated users → redirected to `/auth/login`
- Authenticated but onboarding incomplete → redirected to `/onboarding`
- Authenticated and onboarding complete → access granted

## Database Schema

### profiles table
```sql
- id (UUID, FK to auth.users)
- full_name (TEXT)
- phone (TEXT)
- organization (TEXT)
- user_type (TEXT: 'USER' | 'ORGANIZATION')
- investment_budget (BIGINT)
- risk_tolerance (TEXT: 'LOW' | 'MEDIUM' | 'HIGH')
- onboarding_step (INTEGER)
- onboarding_completed (BOOLEAN)
- created_at (TIMESTAMP)
- updated_at (TIMESTAMP)
```

## Key Components

### UserAvatar Component
- Shows circular avatar with first letter of name
- Dropdown with Profile, Dashboard, Logout
- Logout confirmation dialog
- Fully responsive

### Navbar99 Component
- Accepts optional `user` prop
- Shows Login button if not authenticated
- Shows UserAvatar if authenticated
- Light theme only
- 99acres-style design

### OnboardingLayout Component
- 3-step wizard with progress indicator
- Conditional forms based on account type
- Form validation
- Saves to Supabase on completion
- Framer Motion animations

### ProfileContent Component
- Editable sections for basic info and preferences
- Inline editing with save/cancel
- Real-time updates to database
- Responsive design

## Testing

### Test User Registration
```bash
pnpm dev
# Visit http://localhost:3000/auth/sign-up
# Create account with email/password
# Check email for verification link
```

### Test Google OAuth
```bash
# Ensure Google OAuth is configured in Supabase
# Visit http://localhost:3000/auth/login
# Click "Continue with Google"
# Authenticate with Google account
```

### Test Protected Routes
```bash
# Without login, visit http://localhost:3000/dashboard
# Should redirect to /auth/login

# After login without onboarding, visit /dashboard
# Should redirect to /onboarding

# After completing onboarding, visit /dashboard
# Should show dashboard
```

## Troubleshooting

### Google OAuth not working
- Check redirect URI in Google Cloud Console
- Verify Client ID and Secret in Supabase
- Check browser console for errors

### Profile not created
- Check Supabase SQL Editor for trigger
- Verify RLS policies are enabled
- Check server logs for errors

### Middleware redirect loop
- Clear browser cookies
- Check middleware.ts matcher config
- Verify Supabase session is valid

## Security Notes

- ✅ Row Level Security enabled on profiles table
- ✅ Users can only access their own data
- ✅ Server-side authentication checks
- ✅ Secure session management
- ✅ CSRF protection via Supabase

## Next Steps

1. Add email templates customization in Supabase
2. Add phone number verification
3. Add 2FA support
4. Add social login (Facebook, Twitter, etc.)
5. Add admin dashboard for user management
