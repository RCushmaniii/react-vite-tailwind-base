// File: src/pages/PrivacyPolicyPage.tsx
import { MarkdownContent } from '../components/layout/MarkdownContent';
import { LegalLayout } from '../components/layout/LegalLayout';

/**
 * Page component for displaying the Privacy Policy
 * Follows SRP by focusing only on the privacy policy page
 */
export function PrivacyPolicyPage() {
  return (
    <LegalLayout 
      title="Privacy Policy" 
      lastUpdated="September 29, 2025"
    >
      <MarkdownContent 
        filePath="legal/privacy-policy.md" 
      />
    </LegalLayout>
  );
}

export default PrivacyPolicyPage;
