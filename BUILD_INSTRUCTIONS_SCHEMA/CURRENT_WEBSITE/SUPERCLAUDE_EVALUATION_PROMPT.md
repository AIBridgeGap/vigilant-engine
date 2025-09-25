# SuperClaude Evaluation Prompt: Static Site Placement Strategy

## Context & Mission

You are a senior web architecture consultant evaluating deployment strategies for a client who needs to deploy a static HTML/CSS/JS site on GoDaddy cPanel hosting that currently runs WordPress. The client needs to balance **immediate deployment needs** with **long-term maintainability** and **professional best practices**.

## Evaluation Request

**Analyze and recommend between these two documented approaches for placing static site assets:**

### Position A: Root Placement Strategy
- **Approach**: Place HTML, CSS, JS, and images directly in `/public_html/` root alongside WordPress files
- **Access**: Direct top-level domain access (e.g., `aibridgegap.com/index.html`)
- **Risk Profile**: High - Will override WordPress `index.php`, creating system conflicts
- **Deployment Speed**: Fastest - Simple file upload
- **Rollback Complexity**: High - Mixed with WordPress core files

### Position B: Subfolder/Subdomain Strategy  
- **Approach**: Create dedicated subfolder `/public_html/demo/` or `/public_html/custom/` 
- **Access**: Subpath access (e.g., `aibridgegap.com/demo/`)
- **Risk Profile**: Low - Complete isolation from WordPress
- **Deployment Speed**: Moderate - Requires folder structure setup
- **Rollback Complexity**: Low - Single directory deletion

## Technical Environment
- **Hosting**: GoDaddy cPanel (Deluxe plan)
- **Current Stack**: Active WordPress installation
- **Domain**: aibridgegap.com
- **Static Site**: Multiple HTML pages, CSS, JavaScript, images
- **Client Skill Level**: Intermediate technical user

## Evaluation Criteria

Analyze each position against these weighted factors:

### 🚨 **CRITICAL FACTORS (Must-Have)**
1. **WordPress Preservation**: Will existing WordPress functionality remain intact?
2. **System Stability**: Risk of breaking current site or creating conflicts?
3. **Recovery/Rollback**: How easily can changes be undone if issues arise?

### ⚖️ **BALANCING FACTORS (Important Trade-offs)**
4. **Deployment Speed**: Time to get static site live
5. **URL Structure**: Professional appearance and SEO implications
6. **Maintenance Burden**: Long-term update and management complexity
7. **Future Flexibility**: Ability to scale or modify approach later

### 🎯 **OPTIMIZATION FACTORS (Nice-to-Have)**
8. **File Organization**: Logical structure and asset management
9. **Performance**: Loading speed and server resource usage
10. **Security**: File permissions and attack surface considerations

## Required Analysis Structure

### PART 1: RISK ASSESSMENT
- **Position A Risks**: Enumerate specific technical risks, failure scenarios, and potential business impact
- **Position B Risks**: Identify any drawbacks, limitations, or complexity introduced
- **Risk Mitigation**: What safeguards exist for each approach?

### PART 2: IMPLEMENTATION REALITY CHECK
- **Position A Implementation**: Step-by-step what actually happens when files are uploaded to root
- **Position B Implementation**: Real-world deployment process and folder management
- **Time Investment**: Actual hours required for initial setup and ongoing maintenance

### PART 3: BUSINESS IMPACT ANALYSIS
- **Client Goals**: This is for AIBridgeGap.com - a business website needing professional presentation
- **User Experience**: How do visitors access and interact with the static content?
- **Professional Perception**: How does URL structure affect business credibility?

### PART 4: LONG-TERM STRATEGY ALIGNMENT
- **6 Month Outlook**: What happens as the site evolves?
- **Maintenance Scenarios**: WordPress updates, static site updates, hosting changes
- **Exit Strategy**: How easy is it to change approaches later?

## Decision Framework

Provide your recommendation using this structure:

### EXECUTIVE SUMMARY
**Recommended Approach**: [Position A or B]  
**Confidence Level**: [High/Medium/Low]  
**Key Deciding Factor**: [Primary reason for recommendation]

### DETAILED JUSTIFICATION
- **Why this approach wins**: Top 3 reasons supporting your recommendation
- **Acknowledged trade-offs**: What the client gives up with this choice
- **Implementation roadmap**: Concrete next steps for execution

### RISK MITIGATION PLAN
- **Primary risks**: Top concerns with recommended approach
- **Mitigation strategies**: Specific steps to address each risk
- **Monitoring requirements**: What to watch for post-deployment

### DECISION RATIONALE
Specifically address how your recommendation balances:
- ✅ **Immediate deployment needs** (client wants site live quickly)
- ⚖️ **Professional requirements** (business credibility and URL structure)  
- 🛡️ **Risk management** (protecting existing WordPress site)
- 🔄 **Maintainability** (long-term management and updates)

## Expected Output Quality

Your analysis should be:
- **Technically accurate** - Based on real cPanel/WordPress behavior
- **Business-focused** - Consider client's professional needs
- **Implementation-ready** - Provide actionable next steps
- **Risk-aware** - Address potential failure scenarios
- **Future-oriented** - Consider evolution and scaling needs

## Special Considerations

- Client has intermediate technical skills but values clear guidance
- This is a business website requiring professional presentation
- Current WordPress site must remain functional
- Client prefers solutions that minimize ongoing complexity
- Budget constraints favor simpler approaches when risk-equivalent

---

**Your mission**: Deliver a definitive recommendation that balances immediate needs with long-term success, supported by thorough technical analysis and clear implementation guidance.