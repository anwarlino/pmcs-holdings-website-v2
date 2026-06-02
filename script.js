/*
  PMCS Holdings site behavior and translations.

  Editing notes for non-technical updates:
  - Text: update the languageDictionary object below. Keep the same keys for EN, TH, and AR.
  - Logo: place the official maroon logo at assets/logo/pmcs-logo-maroon.svg, or change the img src in index.html.
  - Images: place supporting images in assets/images/ using the placeholder filenames referenced in index.html.
  - Missing logo/images are handled gracefully and show text or neutral placeholders.
*/

const languageDictionary = {
  en: {
    meta: {
      title: 'PMCS Holdings | Singapore-Led Food Security Platform',
      description: 'PMCS Holdings is a Singapore-led food-security, sustainability, governance, and structured finance platform designed for Thailand-to-GCC strategic corridor architecture.'
    },
    header: {
      complianceLeft: 'Institutional platform under development',
      complianceRight: 'Subject to verification, regulatory approval, and final commercial documentation',
      statusAria: 'Platform status',
      statusOne: 'Singapore-led governance architecture',
      statusTwo: 'Thailand-to-GCC food-security corridor',
      statusThree: 'Private institutional engagement only'
    },
    nav: {
      primaryAria: 'Primary navigation',
      homeAria: 'PMCS Holdings home',
      logoAlt: 'PMCS Holdings logo',
      logoTagline: 'Food Security · Sustainability · Finance',
      openMenu: 'Open navigation menu',
      closeMenu: 'Close navigation menu',
      languageLabel: 'Language',
      overview: 'Overview',
      strategicAlignment: 'Strategic Alignment',
      platformEcosystem: 'Platform Ecosystem',
      iccrFramework: 'ICCR Framework',
      thailandSupplyBase: 'Thailand Supply Base',
      capitalPartnerships: 'Capital & Partnerships',
      governance: 'Governance',
      inquire: 'Inquire'
    },
    hero: {
      eyebrow: 'Singapore-led Platform',
      title: 'Building a Singapore-Led Food Security, Sustainability & Finance Platform for the GCC',
      subtitle: 'PMCS Holdings is designed as a Singapore-led platform coordinating governance, capital structuring, Thailand-based production readiness, and GCC food-security market access through a controlled, sustainability-linked corridor architecture.',
      primaryCta: 'Explore the Platform',
      secondaryCta: 'Governance Approach',
      note: 'PMCS Holdings is not positioned as a general agricultural products company, crop cultivation company, commodity exporter, or farm-to-table product seller. The platform is planned as an institutional architecture for corridor coordination, sustainability controls, and structured partnership readiness.',
      cardAria: 'PMCS corridor architecture summary',
      nodes: {
        sgTitle: 'Singapore Governance',
        sgText: 'Platform oversight, institutional controls, capital structuring, and partner documentation are intended to be coordinated from Singapore.',
        thTitle: 'Thailand Supply Readiness',
        thText: 'Production-readiness pathways are planned around verified supply bases and sustainability-linked operating parameters.',
        gccTitle: 'GCC Market Access',
        gccText: 'Food-security access is intended to support institutional counterparties subject to regulatory approval and final commercial documentation.'
      }
    },
    images: {
      heroAlt: 'Singapore-led institutional platform and sustainability corridor',
      heroPlaceholder: 'Singapore-led platform image placeholder',
      logisticsAlt: 'Thailand to GCC logistics and food-security corridor',
      logisticsPlaceholder: 'Logistics corridor image placeholder',
      iccrAlt: 'ICCR sustainability framework visual',
      iccrPlaceholder: 'ICCR framework image placeholder',
      supplyAlt: 'Thailand supply-base readiness for GCC food security',
      supplyPlaceholder: 'Thailand supply-base image placeholder',
      governanceAlt: 'Governance dashboard and institutional controls',
      governancePlaceholder: 'Governance dashboard image placeholder',
      contactAlt: 'Institutional engagement office',
      contactPlaceholder: 'Institutional engagement image placeholder'
    },
    strategic: {
      kicker: 'Strategic Alignment',
      title: 'Designed for regional food security, sustainability discipline, and institutional coordination.',
      intro: 'PMCS Holdings is intended to connect Singapore governance discipline with Thailand-based supply readiness and GCC food-security priorities through cautious, verification-led corridor planning.',
      stat: 'Jurisdictional focus areas: Singapore platform governance, Thailand supply-base readiness, and GCC market-access coordination.',
      cards: {
        foodTitle: 'Food-Security Architecture',
        foodText: 'Planned corridor structures are designed to support long-term food-security access rather than transactional commodity sales.',
        sustainTitle: 'Sustainability-Linked Controls',
        sustainText: 'Operating parameters are intended to be subject to independent verification, regulatory review, and disciplined reporting.',
        financeTitle: 'Structured Finance Readiness',
        financeText: 'Capital pathways remain under development and subject to partner validation, documentation, and applicable approvals.',
        partnerTitle: 'Institutional Partnerships',
        partnerText: 'Engagement is planned for strategic partners, governance counterparties, supply participants, and qualified institutional stakeholders.'
      }
    },
    ecosystem: {
      kicker: 'Platform Ecosystem',
      title: 'A connected platform model, not a farm-to-table product seller.',
      intro: 'The PMCS ecosystem is designed to coordinate corridor governance, supply readiness, sustainability controls, market access, and partnership documentation through carefully staged implementation.',
      cards: {
        govTitle: 'Governance Layer',
        govText: 'Singapore-led platform controls, compliance protocols, counterparty review, and documentation discipline.',
        supplyTitle: 'Supply Readiness',
        supplyText: 'Thailand-based production-readiness planning subject to validation, operating controls, and partner readiness.',
        iccrTitle: 'Sustainability Framework',
        iccrText: 'ICCR pillars intended to support input control, transformation discipline, neutralisation planning, and finance integration.',
        gccTitle: 'Market Access',
        gccText: 'GCC engagement pathways planned around food-security alignment and final commercial documentation.'
      }
    },
    iccr: {
      kicker: 'ICCR Framework',
      title: 'Four cautious pillars for sustainability-linked corridor planning.',
      intro: 'The PMCS ICCR framework remains under development and is intended to be subject to verification, regulatory approval, partner validation, and final implementation documentation.',
      body: 'ICCR is planned as a control-oriented sustainability framework for corridor architecture. It does not claim issued carbon credits, completed offset outcomes, return assurances, or completed full-scale operations.',
      pillars: {
        inputTitle: 'Carbon Input Control',
        inputText: 'Designed to define disciplined input parameters and measurement readiness before operational scale-up.',
        transformTitle: 'Carbon Transformation',
        transformText: 'Intended to guide production and process improvements subject to technical validation and partner readiness.',
        outputTitle: 'Carbon Output Neutralisation',
        outputText: 'Planned to assess neutralisation pathways subject to verification, approvals, and final commercial documentation.',
        financeTitle: 'Carbon Finance Integration',
        financeText: 'Designed to align sustainability data with structured finance readiness without representing any public fundraising instrument.'
      }
    },
    supply: {
      visualAria: 'Thailand to GCC corridor visual',
      visualTitle: 'Thailand-to-GCC strategic food-security architecture.',
      thailand: 'Thailand',
      thailandCaption: 'Supply-base readiness',
      gcc: 'GCC',
      gccCaption: 'Institutional market access',
      kicker: 'Thailand Supply Base',
      title: 'Production readiness coordinated through verification-led planning.',
      intro: 'Thailand supply-base planning is intended to support controlled readiness, traceability, and partner validation. The platform should not be interpreted as claiming completed infrastructure, full-scale operations, or binding offtake agreements.',
      cards: {
        readinessTitle: 'Controlled Readiness',
        readinessText: 'Operating pathways are planned around staged preparation, technical checks, and commercial documentation.',
        disciplineTitle: 'Corridor Discipline',
        disciplineText: 'Supply movement is intended to be aligned with governance controls, sustainability parameters, and market requirements.'
      }
    },
    capital: {
      kicker: 'Capital & Partnerships',
      title: 'Structured partnership readiness without investment solicitation language.',
      intro: 'PMCS Holdings is intended to coordinate institutional partner discussions, governance readiness, and capital structuring pathways, all subject to approvals, verification, and final documentation.',
      cards: {
        counterpartyTitle: 'Strategic Counterparties',
        counterpartyText: 'Potential engagement with food-security stakeholders, infrastructure partners, technical validators, and institutional counterparties.',
        documentationTitle: 'Documentation Discipline',
        documentationText: 'Commercial pathways remain planned and subject to review, regulatory requirements, and final executed documentation.',
        financeTitle: 'Finance Integration',
        financeText: 'Capital structuring is under development and should not be interpreted as public fundraising or a return-promise program.'
      }
    },
    governance: {
      kicker: 'Governance',
      title: 'Compliance-first language for an institutional platform under development.',
      intro: 'PMCS Holdings uses cautious positioning to distinguish planned architecture from completed infrastructure, issued instruments, secured financing, or binding commercial outcomes.',
      designedTitle: 'What PMCS is designed to be',
      designed: [
        'A Singapore-led food-security platform.',
        'A sustainability-linked supply corridor.',
        'A governance and structured finance platform.',
        'A Thailand-to-GCC strategic food-security architecture.',
        'An institutional partnership platform.'
      ],
      boundaryTitle: 'Compliance boundaries',
      boundaries: [
        'No claim of completed infrastructure or completed full-scale operation.',
        'No claim of issued carbon credits or guaranteed neutralisation outcomes.',
        'No claim of secured financing or signed binding offtake agreements.',
        'No return promises, public fundraising, or retail investment solicitation.',
        'All implementation remains subject to verification, approval, and final documentation.'
      ]
    },
    contact: {
      kicker: 'Contact / Institutional Engagement',
      title: 'Institutional discussions for platform alignment and partner readiness.',
      bodyOne: 'PMCS Holdings welcomes carefully scoped institutional engagement related to governance, supply-base readiness, sustainability verification, corridor strategy, and structured partnership planning.',
      bodyTwo: 'Any engagement remains preliminary and subject to regulatory approval, independent verification, partner validation, and final commercial documentation.',
      cta: 'Request Institutional Discussion',
      scopeTitle: 'Engagement Scope',
      scopeBody: 'Governance counterparties, food-security stakeholders, sustainability validators, infrastructure partners, and qualified institutional participants.',
      disclaimer: 'This website is informational and does not constitute an offer, solicitation, or recommendation to enter into any financial product or investment arrangement.'
    },
    footer: {
      navAria: 'Footer navigation',
      body: 'A Singapore-led food-security, sustainability, governance, and structured finance platform under development for Thailand-to-GCC corridor architecture.',
      note: 'Platform components are planned and remain subject to verification, regulatory approval, partner validation, and final commercial documentation.',
      rights: 'All rights reserved.',
      compatibility: 'Informational website · GitHub Pages compatible static HTML'
    }
  },

  th: {
    meta: {
      title: 'PMCS Holdings | แพลตฟอร์มความมั่นคงทางอาหารที่นำโดยสิงคโปร์',
      description: 'PMCS Holdings คือแพลตฟอร์มด้านความมั่นคงทางอาหาร ความยั่งยืน ธรรมาภิบาล และการเงินเชิงโครงสร้างที่นำโดยสิงคโปร์ ออกแบบเพื่อสถาปัตยกรรมทางเดินยุทธศาสตร์จากประเทศไทยสู่ GCC'
    },
    header: {
      complianceLeft: 'แพลตฟอร์มระดับสถาบันที่อยู่ระหว่างการพัฒนา',
      complianceRight: 'ขึ้นอยู่กับการตรวจสอบ การอนุมัติด้านกฎระเบียบ และเอกสารเชิงพาณิชย์ขั้นสุดท้าย',
      statusAria: 'สถานะแพลตฟอร์ม',
      statusOne: 'สถาปัตยกรรมธรรมาภิบาลที่นำโดยสิงคโปร์',
      statusTwo: 'ทางเดินความมั่นคงทางอาหารจากประเทศไทยสู่ GCC',
      statusThree: 'สำหรับการหารือระดับสถาบันเท่านั้น'
    },
    nav: {
      primaryAria: 'เมนูนำทางหลัก',
      homeAria: 'หน้าแรก PMCS Holdings',
      logoAlt: 'โลโก้ PMCS Holdings',
      logoTagline: 'ความมั่นคงทางอาหาร · ความยั่งยืน · การเงิน',
      openMenu: 'เปิดเมนูนำทาง',
      closeMenu: 'ปิดเมนูนำทาง',
      languageLabel: 'ภาษา',
      overview: 'ภาพรวม',
      strategicAlignment: 'ความสอดคล้องเชิงยุทธศาสตร์',
      platformEcosystem: 'ระบบนิเวศแพลตฟอร์ม',
      iccrFramework: 'กรอบ ICCR',
      thailandSupplyBase: 'ฐานอุปทานประเทศไทย',
      capitalPartnerships: 'เงินทุนและพันธมิตร',
      governance: 'ธรรมาภิบาล',
      inquire: 'ติดต่อ'
    },
    hero: {
      eyebrow: 'แพลตฟอร์มที่นำโดยสิงคโปร์',
      title: 'สร้างแพลตฟอร์มความมั่นคงทางอาหาร ความยั่งยืน และการเงินสำหรับ GCC ที่นำโดยสิงคโปร์',
      subtitle: 'PMCS Holdings ได้รับการออกแบบให้เป็นแพลตฟอร์มที่นำโดยสิงคโปร์ เพื่อประสานธรรมาภิบาล โครงสร้างเงินทุน ความพร้อมด้านการผลิตในประเทศไทย และการเข้าถึงตลาดความมั่นคงทางอาหารของ GCC ผ่านสถาปัตยกรรมทางเดินอุปทานที่มีการควบคุมและเชื่อมโยงกับความยั่งยืน',
      primaryCta: 'สำรวจแพลตฟอร์ม',
      secondaryCta: 'แนวทางธรรมาภิบาล',
      note: 'PMCS Holdings ไม่ได้วางตำแหน่งเป็นบริษัทจำหน่ายสินค้าเกษตรทั่วไป บริษัทเพาะปลูกพืช ผู้ส่งออกสินค้าโภคภัณฑ์ หรือผู้ขายสินค้าแบบฟาร์มสู่ผู้บริโภค แพลตฟอร์มนี้ถูกวางแผนให้เป็นสถาปัตยกรรมระดับสถาบันสำหรับการประสานทางเดินอุปทาน การควบคุมด้านความยั่งยืน และความพร้อมด้านพันธมิตรเชิงโครงสร้าง',
      cardAria: 'สรุปสถาปัตยกรรมทางเดิน PMCS',
      nodes: {
        sgTitle: 'ธรรมาภิบาลสิงคโปร์',
        sgText: 'การกำกับดูแลแพลตฟอร์ม การควบคุมระดับสถาบัน โครงสร้างเงินทุน และเอกสารพันธมิตร ตั้งใจให้มีการประสานงานจากสิงคโปร์',
        thTitle: 'ความพร้อมอุปทานประเทศไทย',
        thText: 'แนวทางความพร้อมด้านการผลิตถูกวางแผนบนฐานอุปทานที่สามารถตรวจสอบได้และพารามิเตอร์การดำเนินงานที่เชื่อมโยงกับความยั่งยืน',
        gccTitle: 'การเข้าถึงตลาด GCC',
        gccText: 'การเข้าถึงด้านความมั่นคงทางอาหารตั้งใจสนับสนุนคู่สัญญาระดับสถาบัน โดยขึ้นอยู่กับการอนุมัติด้านกฎระเบียบและเอกสารเชิงพาณิชย์ขั้นสุดท้าย'
      }
    },
    images: {
      heroAlt: 'ภาพแนวคิดแพลตฟอร์มระดับสถาบันที่นำโดยสิงคโปร์และทางเดินความยั่งยืน',
      heroPlaceholder: 'พื้นที่รอภาพแพลตฟอร์มที่นำโดยสิงคโปร์',
      logisticsAlt: 'ทางเดินโลจิสติกส์และความมั่นคงทางอาหารจากประเทศไทยสู่ GCC',
      logisticsPlaceholder: 'พื้นที่รอภาพทางเดินโลจิสติกส์',
      iccrAlt: 'ภาพแนวคิดกรอบความยั่งยืน ICCR',
      iccrPlaceholder: 'พื้นที่รอภาพกรอบ ICCR',
      supplyAlt: 'ความพร้อมของฐานอุปทานประเทศไทยสำหรับความมั่นคงทางอาหารของ GCC',
      supplyPlaceholder: 'พื้นที่รอภาพฐานอุปทานประเทศไทย',
      governanceAlt: 'แดชบอร์ดธรรมาภิบาลและการควบคุมระดับสถาบัน',
      governancePlaceholder: 'พื้นที่รอภาพแดชบอร์ดธรรมาภิบาล',
      contactAlt: 'สำนักงานสำหรับการหารือระดับสถาบัน',
      contactPlaceholder: 'พื้นที่รอภาพการมีส่วนร่วมระดับสถาบัน'
    },
    strategic: {
      kicker: 'ความสอดคล้องเชิงยุทธศาสตร์',
      title: 'ออกแบบเพื่อความมั่นคงทางอาหารระดับภูมิภาค วินัยด้านความยั่งยืน และการประสานงานระดับสถาบัน',
      intro: 'PMCS Holdings ตั้งใจเชื่อมวินัยด้านธรรมาภิบาลของสิงคโปร์เข้ากับความพร้อมของฐานอุปทานในประเทศไทย และลำดับความสำคัญด้านความมั่นคงทางอาหารของ GCC ผ่านการวางแผนทางเดินอุปทานอย่างรอบคอบและเน้นการตรวจสอบ',
      stat: 'พื้นที่โฟกัส 3 เขตอำนาจ: ธรรมาภิบาลแพลตฟอร์มสิงคโปร์ ความพร้อมของฐานอุปทานไทย และการประสานการเข้าถึงตลาด GCC',
      cards: {
        foodTitle: 'สถาปัตยกรรมความมั่นคงทางอาหาร',
        foodText: 'โครงสร้างทางเดินที่วางแผนไว้ถูกออกแบบเพื่อสนับสนุนการเข้าถึงความมั่นคงทางอาหารในระยะยาว ไม่ใช่การซื้อขายสินค้าโภคภัณฑ์แบบรายธุรกรรม',
        sustainTitle: 'การควบคุมที่เชื่อมโยงกับความยั่งยืน',
        sustainText: 'พารามิเตอร์การดำเนินงานตั้งใจให้อยู่ภายใต้การตรวจสอบอิสระ การทบทวนด้านกฎระเบียบ และการรายงานอย่างมีวินัย',
        financeTitle: 'ความพร้อมด้านการเงินเชิงโครงสร้าง',
        financeText: 'แนวทางด้านเงินทุนยังอยู่ระหว่างการพัฒนา และขึ้นอยู่กับการยืนยันจากพันธมิตร เอกสารประกอบ และการอนุมัติที่เกี่ยวข้อง',
        partnerTitle: 'พันธมิตรระดับสถาบัน',
        partnerText: 'การมีส่วนร่วมถูกวางแผนสำหรับพันธมิตรเชิงยุทธศาสตร์ คู่สัญญาด้านธรรมาภิบาล ผู้มีส่วนร่วมในฐานอุปทาน และผู้มีส่วนได้ส่วนเสียระดับสถาบันที่เหมาะสม'
      }
    },
    ecosystem: {
      kicker: 'ระบบนิเวศแพลตฟอร์ม',
      title: 'โมเดลแพลตฟอร์มที่เชื่อมต่อกัน ไม่ใช่ผู้ขายสินค้าแบบฟาร์มสู่ผู้บริโภค',
      intro: 'ระบบนิเวศของ PMCS ถูกออกแบบเพื่อประสานธรรมาภิบาลของทางเดินอุปทาน ความพร้อมด้านอุปทาน การควบคุมด้านความยั่งยืน การเข้าถึงตลาด และเอกสารพันธมิตร ผ่านการดำเนินงานเป็นลำดับขั้น',
      cards: {
        govTitle: 'ชั้นธรรมาภิบาล',
        govText: 'การควบคุมแพลตฟอร์มที่นำโดยสิงคโปร์ ระเบียบปฏิบัติด้านการปฏิบัติตามกฎระเบียบ การทบทวนคู่สัญญา และวินัยด้านเอกสาร',
        supplyTitle: 'ความพร้อมด้านอุปทาน',
        supplyText: 'การวางแผนความพร้อมด้านการผลิตในประเทศไทย ขึ้นอยู่กับการยืนยัน การควบคุมการดำเนินงาน และความพร้อมของพันธมิตร',
        iccrTitle: 'กรอบความยั่งยืน',
        iccrText: 'เสาหลัก ICCR ตั้งใจสนับสนุนการควบคุมปัจจัยนำเข้า วินัยด้านการเปลี่ยนผ่าน การวางแผนการทำให้เป็นกลาง และการบูรณาการทางการเงิน',
        gccTitle: 'การเข้าถึงตลาด',
        gccText: 'แนวทางการมีส่วนร่วมกับ GCC ถูกวางแผนตามความสอดคล้องด้านความมั่นคงทางอาหารและเอกสารเชิงพาณิชย์ขั้นสุดท้าย'
      }
    },
    iccr: {
      kicker: 'กรอบ ICCR',
      title: 'สี่เสาหลักที่รอบคอบสำหรับการวางแผนทางเดินอุปทานที่เชื่อมโยงกับความยั่งยืน',
      intro: 'กรอบ PMCS ICCR ยังคงอยู่ระหว่างการพัฒนา และตั้งใจให้อยู่ภายใต้การตรวจสอบ การอนุมัติด้านกฎระเบียบ การยืนยันจากพันธมิตร และเอกสารการดำเนินงานขั้นสุดท้าย',
      body: 'ICCR ถูกวางแผนเป็นกรอบความยั่งยืนที่เน้นการควบคุมสำหรับสถาปัตยกรรมทางเดินอุปทาน โดยไม่ได้อ้างว่ามีการออกคาร์บอนเครดิต ผลลัพธ์การชดเชยที่เสร็จสมบูรณ์ การรับรองผลตอบแทน หรือการดำเนินงานเต็มรูปแบบที่เสร็จสมบูรณ์แล้ว',
      pillars: {
        inputTitle: 'Carbon Input Control',
        inputText: 'ออกแบบเพื่อกำหนดพารามิเตอร์ปัจจัยนำเข้าอย่างมีวินัย และเตรียมความพร้อมด้านการวัดผลก่อนการขยายการดำเนินงาน',
        transformTitle: 'Carbon Transformation',
        transformText: 'ตั้งใจใช้เป็นแนวทางสำหรับการปรับปรุงการผลิตและกระบวนการ โดยขึ้นอยู่กับการยืนยันทางเทคนิคและความพร้อมของพันธมิตร',
        outputTitle: 'Carbon Output Neutralisation',
        outputText: 'วางแผนเพื่อประเมินแนวทางการทำให้เป็นกลาง โดยขึ้นอยู่กับการตรวจสอบ การอนุมัติ และเอกสารเชิงพาณิชย์ขั้นสุดท้าย',
        financeTitle: 'Carbon Finance Integration',
        financeText: 'ออกแบบเพื่อเชื่อมข้อมูลความยั่งยืนกับความพร้อมด้านการเงินเชิงโครงสร้าง โดยไม่ถือเป็นเครื่องมือระดมทุนสาธารณะ'
      }
    },
    supply: {
      visualAria: 'ภาพทางเดินจากประเทศไทยสู่ GCC',
      visualTitle: 'สถาปัตยกรรมความมั่นคงทางอาหารเชิงยุทธศาสตร์จากประเทศไทยสู่ GCC',
      thailand: 'ประเทศไทย',
      thailandCaption: 'ความพร้อมของฐานอุปทาน',
      gcc: 'GCC',
      gccCaption: 'การเข้าถึงตลาดระดับสถาบัน',
      kicker: 'ฐานอุปทานประเทศไทย',
      title: 'ความพร้อมด้านการผลิตที่ประสานผ่านการวางแผนที่เน้นการตรวจสอบ',
      intro: 'การวางแผนฐานอุปทานในประเทศไทยตั้งใจสนับสนุนความพร้อมที่มีการควบคุม การตรวจสอบย้อนกลับ และการยืนยันจากพันธมิตร ไม่ควรตีความว่าแพลตฟอร์มนี้อ้างถึงโครงสร้างพื้นฐานที่เสร็จสมบูรณ์ การดำเนินงานเต็มรูปแบบ หรือข้อตกลงรับซื้อที่มีผลผูกพันแล้ว',
      cards: {
        readinessTitle: 'ความพร้อมที่มีการควบคุม',
        readinessText: 'แนวทางการดำเนินงานถูกวางแผนรอบการเตรียมการเป็นขั้นตอน การตรวจสอบทางเทคนิค และเอกสารเชิงพาณิชย์',
        disciplineTitle: 'วินัยของทางเดินอุปทาน',
        disciplineText: 'การเคลื่อนย้ายอุปทานตั้งใจให้สอดคล้องกับการควบคุมด้านธรรมาภิบาล พารามิเตอร์ด้านความยั่งยืน และข้อกำหนดของตลาด'
      }
    },
    capital: {
      kicker: 'เงินทุนและพันธมิตร',
      title: 'ความพร้อมด้านพันธมิตรเชิงโครงสร้างโดยไม่ใช้ภาษาชักชวนการลงทุน',
      intro: 'PMCS Holdings ตั้งใจประสานการหารือกับพันธมิตรระดับสถาบัน ความพร้อมด้านธรรมาภิบาล และแนวทางโครงสร้างเงินทุน ทั้งหมดขึ้นอยู่กับการอนุมัติ การตรวจสอบ และเอกสารขั้นสุดท้าย',
      cards: {
        counterpartyTitle: 'คู่สัญญาเชิงยุทธศาสตร์',
        counterpartyText: 'การมีส่วนร่วมที่เป็นไปได้กับผู้มีส่วนได้ส่วนเสียด้านความมั่นคงทางอาหาร พันธมิตรโครงสร้างพื้นฐาน ผู้ตรวจสอบทางเทคนิค และคู่สัญญาระดับสถาบัน',
        documentationTitle: 'วินัยด้านเอกสาร',
        documentationText: 'แนวทางเชิงพาณิชย์ยังคงเป็นแผน และขึ้นอยู่กับการทบทวน ข้อกำหนดด้านกฎระเบียบ และเอกสารที่ลงนามขั้นสุดท้าย',
        financeTitle: 'การบูรณาการทางการเงิน',
        financeText: 'โครงสร้างเงินทุนอยู่ระหว่างการพัฒนา และไม่ควรถูกตีความว่าเป็นการระดมทุนสาธารณะหรือโปรแกรมที่ให้คำมั่นเรื่องผลตอบแทน'
      }
    },
    governance: {
      kicker: 'ธรรมาภิบาล',
      title: 'ภาษาที่ให้ความสำคัญกับการปฏิบัติตามกฎระเบียบสำหรับแพลตฟอร์มระดับสถาบันที่อยู่ระหว่างการพัฒนา',
      intro: 'PMCS Holdings ใช้การวางตำแหน่งอย่างรอบคอบเพื่อแยกสถาปัตยกรรมที่วางแผนไว้ออกจากโครงสร้างพื้นฐานที่เสร็จสมบูรณ์ เครื่องมือที่ออกแล้ว เงินทุนที่ได้รับแล้ว หรือผลลัพธ์เชิงพาณิชย์ที่มีผลผูกพันแล้ว',
      designedTitle: 'PMCS ถูกออกแบบให้เป็น',
      designed: [
        'แพลตฟอร์มความมั่นคงทางอาหารที่นำโดยสิงคโปร์',
        'ทางเดินอุปทานที่เชื่อมโยงกับความยั่งยืน',
        'แพลตฟอร์มด้านธรรมาภิบาลและการเงินเชิงโครงสร้าง',
        'สถาปัตยกรรมความมั่นคงทางอาหารเชิงยุทธศาสตร์จากประเทศไทยสู่ GCC',
        'แพลตฟอร์มพันธมิตรระดับสถาบัน'
      ],
      boundaryTitle: 'ขอบเขตด้านการปฏิบัติตามกฎระเบียบ',
      boundaries: [
        'ไม่มีการอ้างว่าโครงสร้างพื้นฐานหรือการดำเนินงานเต็มรูปแบบเสร็จสมบูรณ์แล้ว',
        'ไม่มีการอ้างว่ามีการออกคาร์บอนเครดิตหรือมีผลลัพธ์การทำให้เป็นกลางที่รับประกันแล้ว',
        'ไม่มีการอ้างว่าได้รับเงินทุนแล้วหรือมีข้อตกลงรับซื้อที่มีผลผูกพันแล้ว',
        'ไม่มีคำมั่นเรื่องผลตอบแทน การระดมทุนสาธารณะ หรือการชักชวนการลงทุนรายย่อย',
        'การดำเนินงานทั้งหมดขึ้นอยู่กับการตรวจสอบ การอนุมัติ และเอกสารขั้นสุดท้าย'
      ]
    },
    contact: {
      kicker: 'ติดต่อ / การมีส่วนร่วมระดับสถาบัน',
      title: 'การหารือระดับสถาบันเพื่อความสอดคล้องของแพลตฟอร์มและความพร้อมของพันธมิตร',
      bodyOne: 'PMCS Holdings ยินดีรับการมีส่วนร่วมระดับสถาบันที่กำหนดขอบเขตอย่างรอบคอบเกี่ยวกับธรรมาภิบาล ความพร้อมของฐานอุปทาน การตรวจสอบด้านความยั่งยืน กลยุทธ์ทางเดินอุปทาน และการวางแผนพันธมิตรเชิงโครงสร้าง',
      bodyTwo: 'การมีส่วนร่วมใด ๆ ยังคงเป็นขั้นต้น และขึ้นอยู่กับการอนุมัติด้านกฎระเบียบ การตรวจสอบอิสระ การยืนยันจากพันธมิตร และเอกสารเชิงพาณิชย์ขั้นสุดท้าย',
      cta: 'ขอหารือระดับสถาบัน',
      scopeTitle: 'ขอบเขตการมีส่วนร่วม',
      scopeBody: 'คู่สัญญาด้านธรรมาภิบาล ผู้มีส่วนได้ส่วนเสียด้านความมั่นคงทางอาหาร ผู้ตรวจสอบด้านความยั่งยืน พันธมิตรโครงสร้างพื้นฐาน และผู้มีส่วนร่วมระดับสถาบันที่เหมาะสม',
      disclaimer: 'เว็บไซต์นี้มีวัตถุประสงค์เพื่อให้ข้อมูลเท่านั้น และไม่ถือเป็นข้อเสนอ การชักชวน หรือคำแนะนำให้เข้าทำผลิตภัณฑ์ทางการเงินหรือการจัดการลงทุนใด ๆ'
    },
    footer: {
      navAria: 'เมนูส่วนท้าย',
      body: 'แพลตฟอร์มด้านความมั่นคงทางอาหาร ความยั่งยืน ธรรมาภิบาล และการเงินเชิงโครงสร้างที่นำโดยสิงคโปร์ ซึ่งอยู่ระหว่างการพัฒนาสำหรับสถาปัตยกรรมทางเดินจากประเทศไทยสู่ GCC',
      note: 'องค์ประกอบของแพลตฟอร์มเป็นแผนที่ยังขึ้นอยู่กับการตรวจสอบ การอนุมัติด้านกฎระเบียบ การยืนยันจากพันธมิตร และเอกสารเชิงพาณิชย์ขั้นสุดท้าย',
      rights: 'สงวนลิขสิทธิ์',
      compatibility: 'เว็บไซต์ข้อมูล · HTML แบบสแตติกที่รองรับ GitHub Pages'
    }
  },

  ar: {
    meta: {
      title: 'PMCS Holdings | منصة أمن غذائي بقيادة سنغافورية',
      description: 'PMCS Holdings منصة للأمن الغذائي والاستدامة والحوكمة والتمويل المنظم بقيادة سنغافورية، ومصممة لمعمارية ممر استراتيجي من تايلاند إلى دول مجلس التعاون الخليجي.'
    },
    header: {
      complianceLeft: 'منصة مؤسسية قيد التطوير',
      complianceRight: 'تخضع للتحقق والموافقات التنظيمية والوثائق التجارية النهائية',
      statusAria: 'حالة المنصة',
      statusOne: 'معمارية حوكمة بقيادة سنغافورية',
      statusTwo: 'ممر أمن غذائي من تايلاند إلى الخليج',
      statusThree: 'تواصل مؤسسي خاص فقط'
    },
    nav: {
      primaryAria: 'التنقل الرئيسي',
      homeAria: 'الصفحة الرئيسية لـ PMCS Holdings',
      logoAlt: 'شعار PMCS Holdings',
      logoTagline: 'الأمن الغذائي · الاستدامة · التمويل',
      openMenu: 'فتح قائمة التنقل',
      closeMenu: 'إغلاق قائمة التنقل',
      languageLabel: 'اللغة',
      overview: 'نظرة عامة',
      strategicAlignment: 'المواءمة الاستراتيجية',
      platformEcosystem: 'منظومة المنصة',
      iccrFramework: 'إطار ICCR',
      thailandSupplyBase: 'قاعدة الإمداد في تايلاند',
      capitalPartnerships: 'رأس المال والشراكات',
      governance: 'الحوكمة',
      inquire: 'استفسار'
    },
    hero: {
      eyebrow: 'منصة بقيادة سنغافورية',
      title: 'بناء منصة للأمن الغذائي والاستدامة والتمويل لدول الخليج بقيادة سنغافورية',
      subtitle: 'تم تصميم PMCS Holdings كمنصة بقيادة سنغافورية لتنسيق الحوكمة وهيكلة رأس المال وجاهزية الإنتاج في تايلاند والوصول إلى أسواق الأمن الغذائي في دول الخليج عبر معمارية ممر منضبطة ومرتبطة بالاستدامة.',
      primaryCta: 'استكشف المنصة',
      secondaryCta: 'نهج الحوكمة',
      note: 'لا يتم تقديم PMCS Holdings كشركة منتجات زراعية عامة أو شركة زراعة محاصيل أو مصدر سلع أو بائع منتجات من المزرعة إلى المستهلك. المنصة مخطط لها كمعمارية مؤسسية لتنسيق الممر وضوابط الاستدامة وجاهزية الشراكات المنظمة.',
      cardAria: 'ملخص معمارية ممر PMCS',
      nodes: {
        sgTitle: 'حوكمة سنغافورية',
        sgText: 'من المخطط تنسيق إشراف المنصة والضوابط المؤسسية وهيكلة رأس المال ووثائق الشركاء من سنغافورة.',
        thTitle: 'جاهزية الإمداد في تايلاند',
        thText: 'تُخطط مسارات جاهزية الإنتاج حول قواعد إمداد قابلة للتحقق ومعايير تشغيل مرتبطة بالاستدامة.',
        gccTitle: 'الوصول إلى أسواق الخليج',
        gccText: 'يهدف الوصول المتعلق بالأمن الغذائي إلى دعم الأطراف المؤسسية، مع الخضوع للموافقات التنظيمية والوثائق التجارية النهائية.'
      }
    },
    images: {
      heroAlt: 'تصور لمنصة مؤسسية بقيادة سنغافورية وممر استدامة',
      heroPlaceholder: 'عنصر نائب لصورة منصة بقيادة سنغافورية',
      logisticsAlt: 'ممر لوجستي وأمن غذائي من تايلاند إلى الخليج',
      logisticsPlaceholder: 'عنصر نائب لصورة ممر لوجستي',
      iccrAlt: 'تصور إطار الاستدامة ICCR',
      iccrPlaceholder: 'عنصر نائب لصورة إطار ICCR',
      supplyAlt: 'جاهزية قاعدة الإمداد في تايلاند للأمن الغذائي الخليجي',
      supplyPlaceholder: 'عنصر نائب لصورة قاعدة الإمداد في تايلاند',
      governanceAlt: 'لوحة حوكمة وضوابط مؤسسية',
      governancePlaceholder: 'عنصر نائب لصورة لوحة الحوكمة',
      contactAlt: 'مكتب تواصل مؤسسي',
      contactPlaceholder: 'عنصر نائب لصورة التواصل المؤسسي'
    }
  }
};

const fallbackLanguage = 'en';
const supportedLanguages = ['en', 'th', 'ar'];

function getValue(source, path) {
  return path.split('.').reduce((value, key) => {
    if (value === undefined || value === null) {
      return undefined;
    }
    return value[key];
  }, source);
}

function translateValue(language, path) {
  const languageValue = getValue(languageDictionary[language], path);
  if (languageValue !== undefined) {
    return languageValue;
  }
  return getValue(languageDictionary[fallbackLanguage], path) || '';
}

function applyLanguage(language) {
  const activeLanguage = supportedLanguages.includes(language) ? language : fallbackLanguage;
  const isArabic = activeLanguage === 'ar';

  document.documentElement.lang = activeLanguage;
  document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
  document.body.dir = isArabic ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const value = translateValue(activeLanguage, element.dataset.i18n);
    if (value) {
      element.textContent = value;
    }
  });

  document.querySelectorAll('[data-i18n-attr]').forEach((element) => {
    element.dataset.i18nAttr.split(',').forEach((pair) => {
      const [attribute, path] = pair.split(':').map((part) => part.trim());
      const value = translateValue(activeLanguage, path);
      if (attribute && value) {
        element.setAttribute(attribute, value);
      }
    });
  });

  document.title = translateValue(activeLanguage, 'meta.title');
  localStorage.setItem('pmcs-language', activeLanguage);

  const languageSelect = document.querySelector('#language-select');
  if (languageSelect) {
    languageSelect.value = activeLanguage;
  }

  updateMenuLabel();
}

function updateMenuLabel() {
  const navToggle = document.querySelector('.nav-toggle');
  const languageSelect = document.querySelector('#language-select');
  const activeLanguage = languageSelect ? languageSelect.value : fallbackLanguage;

  if (!navToggle) {
    return;
  }

  const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-label', translateValue(activeLanguage, isOpen ? 'nav.closeMenu' : 'nav.openMenu'));
}

function setupNavigation() {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-menu a');

  if (!navToggle || !navMenu) {
    return;
  }

  navToggle.addEventListener('click', () => {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isOpen));
    navMenu.classList.toggle('open', !isOpen);
    document.body.classList.toggle('nav-open', !isOpen);
    updateMenuLabel();
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navToggle.setAttribute('aria-expanded', 'false');
      navMenu.classList.remove('open');
      document.body.classList.remove('nav-open');
      updateMenuLabel();
    });
  });
}

function setupLanguageSwitcher() {
  const languageSelect = document.querySelector('#language-select');
  if (!languageSelect) {
    return;
  }

  const savedLanguage = localStorage.getItem('pmcs-language');
  const initialLanguage = supportedLanguages.includes(savedLanguage) ? savedLanguage : fallbackLanguage;
  applyLanguage(initialLanguage);

  languageSelect.addEventListener('change', (event) => {
    applyLanguage(event.target.value);
  });
}

function setupLogoFallback() {
  const logo = document.querySelector('.brand-logo');
  const brand = document.querySelector('.brand');

  if (!logo || !brand) {
    return;
  }

  const showFallback = () => {
    brand.classList.add('logo-missing');
  };

  logo.addEventListener('error', showFallback);

  if (logo.complete && logo.naturalWidth === 0) {
    showFallback();
  }
}

function setupImageFallbacks() {
  document.querySelectorAll('.asset-image').forEach((image) => {
    const showPlaceholder = () => {
      image.classList.add('image-missing');
      const imageBlock = image.closest('.image-block');
      if (imageBlock) {
        imageBlock.classList.add('image-missing');
      }
    };

    image.addEventListener('error', showPlaceholder);

    if (image.complete && image.naturalWidth === 0) {
      showPlaceholder();
    }
  });
}

function setupRevealAnimation() {
  const revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14 });

    revealElements.forEach((element) => revealObserver.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add('visible'));
  }
}

function setupFooterYear() {
  const year = document.querySelector('#year');
  if (year) {
    year.textContent = new Date().getFullYear();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setupFooterYear();
  setupLogoFallback();
  setupImageFallbacks();
  setupNavigation();
  setupLanguageSwitcher();
  setupRevealAnimation();
});
