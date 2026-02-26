# Onboarding Debug Guide

## Issue: Step 2 Not Showing After Clicking User

### What I Fixed

1. **Simplified Step 2 Rendering Logic**
   - Changed from two separate conditions to one condition with ternary operator
   - This ensures Step 2 always renders when `currentStep === 2`

2. **Added Console Logging**
   - Added logs to track account type selection
   - Added logs to track step transitions
   - This will help identify where the issue is

### How to Debug

1. **Open Browser Console**
   - Press F12 in your browser
   - Go to Console tab

2. **Visit Onboarding Page**
   - Go to http://localhost:3000/onboarding

3. **Click on "User" Card**
   - You should see in console: `Account type selected: USER`

4. **Click "Next" Button**
   - You should see in console:
     - `handleNext called, currentStep: 1, accountType: USER`
     - `Moving to step: 2`

5. **Check What Renders**
   - Step 2 form should appear
   - If not, check console for errors

### Expected Console Output

```
Account type selected: USER
handleNext called, currentStep: 1, accountType: USER
Moving to step: 2
```

### If Step 2 Still Doesn't Show

**Check these things:**

1. **Is the Next button enabled?**
   - It should turn red when you select an account type
   - If it's gray, the validation is failing

2. **Check browser console for errors**
   - Look for any red error messages
   - Common errors:
     - Component rendering errors
     - State update errors
     - Animation errors

3. **Try refreshing the page**
   - Sometimes React state can get stuck
   - Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

4. **Check if accountType is set**
   - In console, after clicking User, you should see the log
   - If no log appears, the click handler isn't firing

### Manual Test Steps

1. Open http://localhost:3000/onboarding
2. Open browser console (F12)
3. Click on "User" card
4. Verify card has red border
5. Verify "Next" button is red (enabled)
6. Click "Next" button
7. Check console logs
8. Verify Step 2 form appears

### What Should Happen

**Step 1:**
- Two cards: User and Organization
- Click User → red border appears
- Next button turns red (enabled)

**After Clicking Next:**
- Progress indicator shows step 2 active
- Form appears with these fields:
  - Investment Purpose (dropdown)
  - Budget Range (slider)
  - Loan Required (toggle)
  - Preferred Cities (buttons)
  - Property Type (dropdown)
  - Risk Appetite (dropdown)
  - Investment Horizon (dropdown)

### Common Issues and Solutions

#### Issue 1: Next Button Stays Gray
**Cause**: Validation failing
**Solution**: Make sure you clicked on a card (User or Organization)

#### Issue 2: Nothing Happens When Clicking Next
**Cause**: JavaScript error or event handler not attached
**Solution**: 
- Check console for errors
- Refresh the page
- Clear browser cache

#### Issue 3: Step 2 Flashes and Disappears
**Cause**: Animation or rendering issue
**Solution**: 
- Check if accountType is null
- Verify the condition `currentStep === 2` is true

#### Issue 4: Console Shows Errors
**Cause**: Component error
**Solution**: 
- Read the error message
- Check if all required props are passed
- Verify imports are correct

### Code Changes Made

**Before:**
```tsx
{currentStep === 2 && accountType === "USER" && (
  <motion.div key="step-2-user">
    <StepUserForm ... />
  </motion.div>
)}
{currentStep === 2 && accountType === "ORGANIZATION" && (
  <motion.div key="step-2-org">
    <StepOrganizationForm ... />
  </motion.div>
)}
```

**After:**
```tsx
{currentStep === 2 && (
  <motion.div key={`step-2-${accountType}`}>
    {accountType === "USER" ? (
      <StepUserForm ... />
    ) : (
      <StepOrganizationForm ... />
    )}
  </motion.div>
)}
```

This ensures Step 2 always renders when currentStep is 2, and the correct form is shown based on accountType.

### Testing Checklist

- [ ] Page loads without errors
- [ ] Can click on User card
- [ ] Card shows red border when selected
- [ ] Next button becomes enabled (red)
- [ ] Console shows "Account type selected: USER"
- [ ] Clicking Next shows console logs
- [ ] Step 2 form appears
- [ ] All form fields are visible
- [ ] Can fill out form fields
- [ ] Can proceed to Step 3

### If All Else Fails

1. **Stop the dev server**
   ```bash
   # Press Ctrl+C in terminal
   ```

2. **Clear Next.js cache**
   ```bash
   rm -rf .next
   ```

3. **Restart dev server**
   ```bash
   pnpm next dev
   ```

4. **Hard refresh browser**
   - Ctrl+Shift+R (Windows)
   - Cmd+Shift+R (Mac)

5. **Try in incognito/private window**
   - This eliminates cache issues

### Contact Points

If issue persists, check:
1. Browser console for errors
2. Terminal for server errors
3. Network tab for failed requests
4. React DevTools for component state

---

**Status**: Debugging tools added, simplified rendering logic implemented.

Try the onboarding flow now and check the browser console for the debug logs!
