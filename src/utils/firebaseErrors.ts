/**
 * Maps a Firebase Auth error code to a user-friendly message with
 * actionable guidance. Unknown codes include the raw code so the
 * underlying cause can be diagnosed from the UI.
 */
export function getAuthErrorMessage(code: string): string {
  switch (code) {
    case 'auth/operation-not-allowed':
      return 'This sign-in method is not enabled. Enable it in Firebase Console under Authentication, then Sign-in method.'
    case 'auth/unauthorized-domain':
      return 'This domain is not authorized for sign-in. Add it in Firebase Console under Authentication, then Settings.'
    case 'auth/popup-blocked':
      return 'Your browser blocked the sign-in popup. Allow popups for this site and try again.'
    case 'auth/network-request-failed':
      return 'Network error. Check your connection or disable ad blockers and try again.'
    case 'auth/account-exists-with-different-credential':
      return 'An account already exists with this email using a different sign-in method. Try that method instead.'
    case 'auth/user-not-found':
      return 'No account found with this email.'
    case 'auth/wrong-password':
    case 'auth/invalid-credential':
      return 'Invalid email or password.'
    case 'auth/invalid-email':
      return 'Invalid email address.'
    case 'auth/too-many-requests':
      return 'Too many attempts. Please try again later.'
    case 'auth/email-already-in-use':
      return 'An account with this email already exists.'
    case 'auth/weak-password':
      return 'Password is too weak. Use at least 6 characters.'
    case 'auth/firebase-app-check-token-is-invalid':
    case 'auth/invalid-app-credential':
      return 'Security verification failed. Check that the App Check reCAPTCHA site key is registered for this app and domain.'
    case 'auth/popup-closed-by-user':
    case 'auth/cancelled-popup-request':
      return ''
    default:
      return code
        ? `Something went wrong (${code}). Please try again.`
        : 'Something went wrong. Please try again.'
  }
}
