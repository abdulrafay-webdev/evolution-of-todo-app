<!-- 
  Sync Impact Report:
  - Version change: 0.0.0 → 1.0.0
  - Modified principles:
    - [PRINCIPLE_1_NAME] → I. Strict Documentation Adherence
    - [PRINCIPLE_2_NAME] → II. Modern Frontend Standards
    - [PRINCIPLE_3_NAME] → III. Clean Backend Architecture
    - [PRINCIPLE_4_NAME] → IV. Secure Authentication (Clerk)
    - [PRINCIPLE_5_NAME] → V. Configuration Transparency
    - [PRINCIPLE_6_NAME] → VI. Developer Experience
  - Added sections: None
  - Removed sections: None
  - Templates requiring updates: None (generic placeholders are sufficient)
  - Follow-up TODOs: None
-->

# Evolution of Todo Constitution

## Core Principles

### I. Strict Documentation Adherence
Do not invent or guess implementation details. All code, configurations, and patterns MUST strictly follow the official documentation for the chosen technologies (e.g., Clerk for Auth, Next.js, FastAPI). When documentation offers multiple paths, choose the one labeled "recommended" or "best practice" for the current version.

### II. Modern Frontend Standards
The frontend MUST be built with Next.js and adhere to modern, premium UI/UX standards. This includes:
- **Glassmorphism & Blur:** Use soft blur effects and semi-transparent backgrounds.
- **Transitions:** Implement smooth, natural transitions for all interactive elements.
- **Responsiveness:** Ensure flawless rendering on all device sizes.
- **Accessibility:** Follow WCAG best practices (contrast, semantic HTML, keyboard nav).
- **Tailwind CSS:** Use utility classes for maintainable styling.

### III. Clean Backend Architecture
The backend (FastAPI) MUST follow a clean architecture pattern to ensure separation of concerns.
- **Validation:** Strict Pydantic models for request/response bodies.
- **Security:** Use `pyjwt` or official SDKs; never roll custom crypto.
- **Database:** Use an ORM (SQLModel) with migrations; avoid raw SQL strings where possible.
- **Structure:** Clear separation between API routes, service logic, data models, and database access layers.

### IV. Secure Authentication (Clerk)
Authentication MUST be implemented using Clerk Auth exactly as defined in their official documentation.
- **No Custom Auth:** Do not build custom login/signup forms unless wrapping Clerk components.
- **Secrets:** Never hardcode secrets. All keys must be loaded from environment variables.
- **Middleware:** Protect routes using Clerk's provided middleware/helpers.

### V. Configuration Transparency
Never proceed with missing configuration.
- **Ask First:** If a secret, key, or URL is missing, PAUSE and ask the user.
- **Explain Sources:** Clearly explain where the user can find the value (e.g., "Check your Clerk Dashboard > API Keys").
- **No Assumptions:** Do not assume defaults for security-critical values.

### VI. Developer Experience
Prioritize maintainability and ease of use.
- **Type Safety:** Use TypeScript for frontend and Type Hints for Python backend.
- **Linting:** Enforce linting (ESLint, Ruff) to catch errors early.
- **Clear Errors:** Provide meaningful error messages to both the user and the developer console.

## Additional Constraints

**Performance**: Pages should load in under 1.5s (LCP). API responses should be <200ms.
**Deployment**: Vercel for Frontend, Vercel/Railway/similar for Backend (Python).
**Secrets Management**: strict `.env` usage; never commit secrets.

## Development Workflow

1.  **Plan**: Review documentation and spec before coding.
2.  **Verify**: Check for secrets/env vars.
3.  **Implement**: Write code following the principles above.
4.  **Test**: Verify strictly against the "Success Criteria" in the spec.

## Governance

**Amendments**: Changes to this constitution require a PR and approval from the project lead.
**Versioning**: Follow Semantic Versioning. Major bumps for breaking governance changes.
**Compliance**: All code reviews must reference these principles.

**Version**: 1.0.0 | **Ratified**: 2026-01-06 | **Last Amended**: 2026-01-06