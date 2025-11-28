# **TRANSFUSION MASTER — OPTIMIZED MASTER PROMPT FOR EDUCATIONAL APP GENERATION**

A full-spectrum, **mobile-first**, **dark-mode**, **offline-ready** educational platform that teaches **transfusion medicine** as learned in a **pathology resident’s transfusion medicine rotation**, covering:

- Blood components & their preparation  
- Immunohematology (ABO/Rh, antibody screens, crossmatch logic)  
- Direct/Indirect Antiglobulin Tests  
- Compatibility testing & pre-transfusion workup  
- Transfusion reactions (acute, delayed, immunologic, non-immunologic)  
- Massive transfusion protocols (conceptual)  
- Apheresis (therapeutic + donor)  
- Blood donor screening & infectious disease testing  
- Pediatric & neonatal transfusion considerations  
- Special products (irradiated, leukoreduced, washed, CMV-safe)  
- Quality assurance & hemovigilance  
- Lab–clinician communication & reporting

This app must make transfusion medicine **intuitive**, **visual**, and **pattern-based**, providing the reasoning frameworks needed for accurate interpretation and safe practice.

Assessment should be **session-only**, **no tracking**, **synthetic data only**, **no patient identifiers**.

---

# **MASTER PROMPT — Transfusion Master Educational App Generator (SPECIALIZED VERSION)**

## **0. ROLE & MISSION**

You are:  
PM • Staff Engineer • Senior Instructional Designer • Transfusion Medicine SME • Immunohematology SME • Apheresis SME • UX Writer • QA Engineer

**Mission:**  
Build a **complete transfusion medicine learning app**, designed for pathology residents and trainees on a transfusion rotation.  
Teach core immunohematology, transfusion decision-making, compatibility logic, reaction workups, and apheresis principles.

The app must be:
- Mobile-first  
- Dark-mode-first  
- Offline-capable  
- Synthetic-only  
- No score or progress tracking  
- No exporting or login system

---

# **1. INPUTS (Fill When Running Prompt)**

- **Primary Topics:** {{TOPICS}}  
  *Default:* Immunohematology, donor screening, component prep, compatibility testing, transfusion reactions, apheresis, hemovigilance.

- **Target Levels:** {{LEVELS}}  
  *Default:* Pathology residents PGY1–PGY4, heme-path fellows, transfusion medicine fellows.

- **Learner Context:** {{CONTEXT}}  
  *Default:* Transfusion medicine rotation, boards prep, call responsibilities.

- **Learning Objectives:** {{LEARNING_OBJECTIVES}}  
  *Default:*  
  - Understand ABO/Rh and antigen–antibody principles  
  - Perform & interpret type-and-screen and crossmatch logic  
  - Recognize transfusion reactions  
  - Understand component selection (irradiated, washed, CMV-safe, etc.)  
  - Understand apheresis indications  
  - Navigate transfusion algorithms

- **Constraints:** {{CONSTRAINTS}}  
  Must include:  
  - Dark-mode, offline, no tracking, synthetic data only

- **References:** {{REFERENCES}}  
  Optional conceptual alignment: AABB guidelines, CAP TM rotation benchmarks.

- **Tone/Voice:** {{VOICE_TONE}}  
  Default: “Clear, structured, pattern-based, clinically safe.”

---

# **2. EXECUTIVE SUMMARY & NAME OPTIONS**

**Goal:**  
Create a transfusion medicine learning environment that enables residents to handle any transfusion-related call: component selection, compatibility issues, reaction workups, product modifications, and special patient populations.

**Name Options:**  
- **Transfusion Master** — “From pre-transfusion to post-reaction workup.”  
- **ImmunoHeme Atlas** — “ABO, antibodies, compatibility—made visual.”  
- **BloodBank Logic** — “Think like the transfusion service.”

**Success Criteria:**  
- Residents can safely and confidently interpret type-and-screen results.  
- Learners understand when to give irradiated/leukoreduced/washed products.  
- Users can classify transfusion reactions accurately.  
- Trainees can walk through compatibility workups stepwise.  
- Apheresis indications become intuitive.

---

# **3. PERSONAS & USE CASES**

### PERSONAS
1. **PGY-2 Pathology Resident**  
   - Pain: ABO logic, antibodies, unit selection feels overwhelming.  
   - Goal: Understand pre-transfusion workflow.

2. **Transfusion Medicine Fellow**  
   - Pain: Complex antibodies, multi-antigen negative unit selection.  
   - Goal: Master rare and complex workups.

3. **Heme-Path Fellow**  
   - Pain: Transfusion reactions and special product selection.  
   - Goal: Manage and interpret investigation workflows.

### USE CASES
- "What product should I issue for this patient?"  
- "The antibody screen is positive—what is the next step?"  
- "What if the crossmatch is incompatible?"  
- "This patient had fever and rigors—what reaction is this?"  
- "Which units for neonates? For oncology? For transplant?"  
- "Is this delayed serologic or delayed hemolytic reaction?"  
- "When is apheresis indicated?"  

---

# **4. CURRICULUM MAP & KNOWLEDGE GRAPH**

## MODULE A — Foundations of Immunohematology
- RBC antigens: ABO, Rh, Kell, Kidd, Duffy, MNS  
- Antibody types: IgG vs IgM  
- Hemolysis patterns (intravascular vs extravascular)  
- Direct & indirect antiglobulin testing  

---

## MODULE B — Pre-Transfusion Testing Workflow
- Type & screen  
- Antibody screen interpretation:  
  - Negative  
  - Positive: single antibody vs multiple  
- Antibody identification logic (rule-in, rule-out conceptually)  
- Crossmatch types: IS, electronic, full AHG  

---

## MODULE C — Blood Components & Modifications
- PRBCs  
- Platelets (apheresis vs pooled)  
- Plasma / cryo  
- Granulocytes (conceptual rarity)  
- Product modifications:
  - Leukoreduced  
  - Irradiated  
  - CMV-safe  
  - Washed  
  - Volume-reduced  
- Indications for each modification  

---

## MODULE D — Compatibility & Special Matching
- ABO compatibility charts  
- Rh logic  
- Minor vs major incompatibility  
- Antigen-negative unit selection  
- Patients requiring special matching:
  - Sickle cell patients  
  - Transplant recipients  
  - Alloimmunized patients  

---

## MODULE E — Transfusion Reactions (Core Module)
### Acute Reactions  
- Acute hemolytic transfusion reaction  
- Febrile non-hemolytic reaction  
- Allergic / anaphylactic reactions  
- TACO  
- TRALI  
- Bacterial contamination  

### Delayed Reactions  
- Delayed hemolytic  
- Delayed serologic  
- TA-GVHD (conceptual)  
- Post-transfusion purpura  

### Reaction workup bundle  
- Clerical check  
- DAT  
- Hemolysis labs  
- Culture if indicated  

---

## MODULE F — Pediatric & Neonatal Transfusion
- Neonatal alloimmune hemolysis  
- DAT-positive newborn evaluation  
- Exchange transfusion concepts  
- Irradiated/CMV-negtive products for neonates  
- Small-volume transfusion practices  

---

## MODULE G — Apheresis (Therapeutic & Donor)
- Apheresis basics  
- Therapeutic apheresis indications (conceptual)  
  - TTP (plasma exchange)  
  - Hyperviscosity  
  - Leukocytosis reduction  
  - Sickle cell exchange  
- Donor apheresis  
- Replacement fluids: albumin vs plasma (conceptual)  

---

## MODULE H — Donor Screening & Infectious Disease Testing
- Donor history questionnaire  
- Deferral rules (conceptual, high-level)  
- Infectious disease markers:
  - HIV, HBV, HCV, HTLV, West Nile, Babesia (conceptual only)  
- NAT logic  

---

## MODULE I — Hemovigilance & Quality Systems
- Reporting errors  
- Tracking reactions  
- Labeling & barcoding  
- Specimen integrity  
- Temperature tracking  
- Inspection readiness  

---

## MODULE J — Integrated Transfusion Decision-Making
- "If positive antibody screen → next steps"  
- “If incompatible crossmatch → pathway”  
- “If patient reacts → reaction algorithm”  
- “If needing special products → selection logic”  
- “If acute bleed → product mix concepts”  

---

# **5. INTERACTIVE MODELS**

| Interactive | Purpose | Inputs | Outputs | Visuals | Guardrails |
|------------|----------|---------|----------|---------|-----------|
| ABO Compatibility Simulator | Explore RBC/Plasma compatibility | Donor/recipient types | OK vs Not OK | ABO matrix | Conceptual only |
| Antibody Screen Interpreter | Evaluate positive screens | Antibody panel data | Likely antibodies | Iconic panel sheet | No real patient data |
| Crossmatch Outcome Analyzer | Interpret incompatible crossmatch patterns | IS/AHG results | Possible causes | Flow diagram | Educational |
| Reaction Classifier | Identify reaction types | Symptoms + timing | Reaction class | Category tiles | No clinical treatment |
| Product Selector | Choose product modification | Clinical scenario | Recommended modification | Product badges | Not medical advice |
| Apheresis Indication Navigator | Understand when to use TPE/Exchange | Condition | Indication tier | Decision map | Educational |
| Donor Eligibility Checker | Understand donor rules | History & screen items | Eligible vs Deferred | Icon flow | High-level only |
| Integrated TM Case Builder | Full pre→post transfusion case | Labs + compatibility + reactions | Final interpretation | Report-style interface | Not for clinical use |

---

# **6. ASSESSMENT (Session-Only)**

Item types:
- MCQs  
- ABO/Rh matching  
- Antibody screen logic  
- Reaction classification  
- Product selection questions  
- Apheresis indication reasoning  
- Case-based transfusion decisions  

Quiz end:
- “You answered X/Y correctly this session.”  
- Suggested modules to review  
- No data stored  

---

# **7. TRANSFUSION MEDICINE REASONING FRAMEWORK**

1. **Confirm patient identity**  
2. **Review type & screen**  
3. **Interpret antibody screen**  
4. **Perform crossmatch or resolve incompatibility**  
5. **Select correct product + modification**  
6. **Monitor transfusion**  
7. **Evaluate any reaction**  
8. **Document + notify + investigate**  

Pitfalls:
- Ignoring anti-K, anti-Jka, anti-E (high-yield antibodies)  
- Confusing TACO vs TRALI  
- Forgetting to irradiate for stem-cell transplant patients  
- Misinterpreting passive anti-D  
- Overcalling delayed hemolytic reactions  
- Improper evaluation of febrile reactions  

---

# **8. ACCESSIBILITY, EQUITY, SAFETY**

- WCAG 2.2 AA  
- High contrast (dark mode default)  
- Icon-based diagrams  
- No real patient cases  
- No dosing or clinical management  
- Clear disclaimers:  
  “Educational only. Not for medical decision-making.”

---

# **9. TECH ARCHITECTURE**

Stack:
- React + TypeScript  
- Tailwind + shadcn/ui  
- Zustand (session-only state)  
- Service Worker for offline mode  

Routes:
- `/foundations`  
- `/pretransfusion`  
- `/components`  
- `/compatibility`  
- `/reactions`  
- `/pediatrics`  
- `/apheresis`  
- `/donor`  
- `/hemovigilance`  
- `/cases`  
- `/assessment`  
- `/settings`  

Settings ONLY:
- Dark/light  
- About  
- Disclaimers  

---

# **10. DATA SCHEMAS**

### Antibody Entry Schema

    {
      "id": "anti_k",
      "name": "Anti-K",
      "class": "IgG",
      "clinical_significance": "High",
      "associated_issues": ["HDFN", "HTR"],
      "notes": "Requires K-negative units."
    }

### Case Schema

    {
      "id": "reaction_case_5",
      "presentation": ["fever", "rigors", "onset < 2 hrs"],
      "labs": {"dat": "positive", "free_hgb": "elevated"},
      "question": "Most likely reaction?",
      "options": ["AHTR", "FNHTR", "TRALI"],
      "correct": "AHTR",
      "rationale": "Acute hemolytic reaction has fever, rigors, positive DAT, hemoglobinemia."
    }

---

# **11. SCREENS & WIREFRAMES**

### Home  
- Module grid: Foundations • Pre-Transfusion • Components • Compatibility • Reactions • Apheresis • Donor • Hemovigilance  

### Module Overview  
- Summary  
- Key concepts  
- Subsection links  
- Quick quiz  

### Lesson  
- Antigen charts  
- ABO matrices  
- Antibody panel reasoning diagrams  
- Reaction classification icons  

### Case Engine  
- Full transfusion cases  
- Immediate correct/incorrect indicator  
- Rationale panels  

### Assessment  
- MCQs + matching + logic flows  
- Session-only score  

### Settings  
- Dark/light  
- About  
- Disclaimer  

---

# **12. COPY & CONTENT KIT**

Examples:
- “Always rule out clerical error first.”  
- “Kidd antibodies can ‘disappear’ and cause delayed hemolysis.”  
- “TRALI involves non-cardiogenic pulmonary edema within 6 hours.”  
- “TACO occurs in volume overload—look for hypertension and BNP rise.”  
- “Irradiate for: stem-cell transplant, congenital immunodeficiency, Hodgkin disease.”  

Glossary:
- DAT, IAT, AHG, IS crossmatch, NAT, TRALI, TACO, TA-GVHD, ESBL (only where conceptual), etc.

---

# **13. ANALYTICS & A/B (Creator-Side Only)**

- Test understanding of ABO compatibility visualizations  
- Compare flowchart vs table modes for reaction recognition  
- Evaluate antibody screen logic comprehension  

(No user-tracked analytics.)

---

# **14. QA CHECKLIST**

- ABO compatibility charts accurate  
- Antibody logic correct  
- Reaction classification clear  
- Apheresis indications accurate at conceptual level  
- No real patient data  
- No clinical management instructions  

---

# **15. ROADMAP**

- M0: Foundations + Pre-Transfusion  
- M1: Components + Compatibility  
- M2: Reaction Module + Apheresis  
- M3: Donor + Hemovigilance  
- M4: Giant Case Bank (100+ cases)

---

# **ACCEPTANCE CRITERIA**

- Covers all core transfusion medicine topics as taught to pathology residents  
- Intuitive and pattern-based  
- Offline-ready, dark-mode-first  
- Zero user tracking  
- Synthetic-only content  

---

## **NOW GENERATE**
Using this blueprint, produce the full transfusion medicine educational app specification in the required style and order, respecting all constraints.
