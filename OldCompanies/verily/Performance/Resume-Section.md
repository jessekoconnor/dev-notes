# Verily Resume Section

## **April 2023 - Present**

### **Verily (Google), Remote** *- Senior Software Engineer, Fullstack*

Senior engineer on Tricorder medical device team, building healthcare provider-facing applications using React, TypeScript, Go, FHIR, and GCP infrastructure. Delivering critical features for blood glucose monitoring, body weight tracking, and blood pressure display in clinical settings.

* **Led complete Blood Pressure project from design to launch**, establishing composite BP observation FHIR integration across multiple data sources (Apple Health, Google Health Connect, Onduo) with operational FHIR store integration and Device API enablement
  * Independently resolved architectural disagreement across 4 teams by advocating for composite observations approach
  * Designed reusable, performance-optimized aggregation logic later adopted by Body Weight project
  * Coordinated cross-functionally with mobile, Onduo, and Clinical teams to deliver on time
  * React, TypeScript, Go, FHIR, gRPC, GCP
* **Delivered 43% of Body Weight feature velocity** (15 of 35 story points), contributing to business-critical healthcare feature including FHIR mapping, integration testing, aggregation logic, unit conversion with precision, and significant refactoring for maintainability
* **Resolved critical patient safety bug within 24 hours** - Fixed glucose visualization bug where hypoglycemic readings below 60mg/dL were cut off, preventing healthcare providers from seeing essential patient safety data. Worked cross-functionally to release and launch same-day
* **Resolved org-wide CI/CD failure** impacting every PR in verily1 monorepo by diagnosing root cause, implementing workaround, and disabling problematic workflow via GitHub API across dozens of open PRs
* **Fixed critical security logging malfunction** across three different BFFs, requiring cross-team collaboration and meticulous investigation to identify and rectify duplicate security logger interceptors in common RPC server framework. Produced comprehensive documentation for future resolution
* **Developed FHIR data seeding tool** in hackathon collaboration, dramatically improving developer productivity by enabling easy population of FHIR with customized test data for any Tricorder use case. Tool immediately adopted for E2E testing across Devices and PHR teams, reducing bug discovery cycle time
* **Built professional-facing glucose BFF** with comprehensive integration testing that uncovered critical existing bugs in Healthdata endpoint regarding maxResults and maxPageSize. Implemented graceful error handling, concurrent processing via configurable worker pool, and extensive logging for debugging
  * Designed and shared worker pool pattern with team members, duplicating skills across organization
  * Go, FHIR, gRPC, integration testing frameworks
* **Established foundational GCP infrastructure for ARDA project**, including Kubernetes cluster setup, load balancer configuration, GCS storage, and ESP gRPC-to-HTTP proxy troubleshooting for data residency control requirements
* **Unblocked Onduo team's BGM load testing** by diagnosing and resolving migration blocking defects through coordination with Consents and Onduo teams, adding observability via refined logging, and resolving data visibility issues - preventing devices team from taking on unplanned load testing responsibility
* **Traced Recharts library limitations** affecting entire visualization platform to specific upstream GitHub issues, negotiating sprint re-scoping with RDS and devices teams to prioritize "Right Solution" over quick workarounds

---

## Optional Quote

"I use the seeding tool; it is tremendously helpful for testing locally, and especially for E2Es" - Anne, Colleague

---

## Notes

- Demonstrates growth from H2 2024 (T3) → H1/H2 2025 (T4 level)
- Manager ratings: Rating 3 (solid performance aligned to expectations) for both review cycles
- Key themes: Independent project leadership, cross-functional problem solving, technical depth and root cause analysis, strategic communication, architectural thinking
- Technologies: React, TypeScript, Go, FHIR, gRPC, GCP, Kubernetes, integration testing
