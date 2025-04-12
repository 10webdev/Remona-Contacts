document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search-input");
    const provinceFilter = document.getElementById("province-filter");
    const jobCards = document.querySelectorAll(".blog-card");

    function applyFilters() {
        const searchText = searchInput.value.toLowerCase();
        const selectedProvince = provinceFilter.value;
        
        jobCards.forEach(card => {
            const jobTitle = card.querySelector("h2").textContent.toLowerCase();
            const jobLocation = card.querySelector("p").textContent;
            
            const matchesSearch = jobTitle.includes(searchText);
            const matchesProvince = selectedProvince === "" || jobLocation.includes(selectedProvince);
            
            if (matchesSearch && matchesProvince) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    }

    searchInput.addEventListener("input", applyFilters);
    provinceFilter.addEventListener("change", applyFilters);
});


// Sample Articles Data
const articles = [
        {
                title: "The 10 Web Developers (Pty) Ltd.",
                image: "img/image1.webp",
                text: `As a startup, The '10' Web Developers is passionate about understanding your unique business needs and delivering exceptional results through our innovative solutions.

                The '10' has partnered with skilled professionals to combines expertise in Web Development and Google Business Profile Optimization to provide comprehensive services, including website design, content creation, and targeted advertising, digital designs, and SEO among others.

                Our mission is to empower your brand with a strong online presence and create meaningful connections with your target audience. Together, we can navigate the ever-evolving digital world and achieve your business goals.

                **Industry**
                Information Technology

                **Address**
                T10 Bluegumbosch
                Phuthaditjhaba
                9869

                **Phone Number**
                +27 71 290 5286

                **Website**
                tinyurl.com/10webdev

                **Operating Hours**
                **Mon - Fri:** 08:00 - 18:00
                **Sat:** 08:00 - 14:00
                **Sun:** Online Only
        `,
        },

        {
                title: "Remona Contacts",
                image: "img/image2.webp",
                text: `Remona Contacts is a business details listing website that not only hosts businesses; but also offers listings for freelancers, projects, and jobs in South Africa, free of charge.

                **Industry**
                Information

                **Address**
                T10 Bluegumbosch
                Phuthaditjhaba
                9869

                **Phone Number**
                +27 71 290 5286

                **Website**
                www.remonacontacts.co.za
        
                **Operating Hours**
                **Mon - Sun:** 24 Hours
        `,
        },

        {
                title: "The 10 Web Developers (Pty) Ltd.",
                image: "img/image1.webp",
                text: `As a startup, The '10' Web Developers is passionate about understanding your unique business needs and delivering exceptional results through our innovative solutions.

                The '10' has partnered with skilled professionals to combines expertise in Web Development and Google Business Profile Optimization to provide comprehensive services, including website design, content creation, and targeted advertising, digital designs, and SEO among others.

                Our mission is to empower your brand with a strong online presence and create meaningful connections with your target audience. Together, we can navigate the ever-evolving digital world and achieve your business goals.

                **Industry**
                Information Technology

                **Address**
                T10 Bluegumbosch
                Phuthaditjhaba
                9869

                **Phone Number**
                +27 71 290 5286

                **Website**
                tinyurl.com/10webdev

                **Operating Hours**
                **Mon - Fri:** 08:00 - 18:00
                **Sat:** 08:00 - 14:00
                **Sun:** Online Only
        `,
        },

        {
                title: "Remona Contacts",
                image: "img/image2.webp",
                text: `Remona Contacts is a business details listing website that not only hosts businesses; but also offers listings for freelancers, projects, and jobs in South Africa, free of charge.

                **Industry**
                Information

                **Address**
                T10 Bluegumbosch
                Phuthaditjhaba
                9869

                **Phone Number**
                +27 71 290 5286

                **Website**
                www.remonacontacts.co.za
        
                **Operating Hours**
                **Mon - Sun:** 24 Hours
        `,
        },

        {
                title: "The 10 Web Developers (Pty) Ltd.",
                image: "img/image1.webp",
                text: `As a startup, The '10' Web Developers is passionate about understanding your unique business needs and delivering exceptional results through our innovative solutions.

                The '10' has partnered with skilled professionals to combines expertise in Web Development and Google Business Profile Optimization to provide comprehensive services, including website design, content creation, and targeted advertising, digital designs, and SEO among others.

                Our mission is to empower your brand with a strong online presence and create meaningful connections with your target audience. Together, we can navigate the ever-evolving digital world and achieve your business goals.

                **Industry**
                Information Technology

                **Address**
                T10 Bluegumbosch
                Phuthaditjhaba
                9869

                **Phone Number**
                +27 71 290 5286

                **Website**
                tinyurl.com/10webdev

                **Operating Hours**
                **Mon - Fri:** 08:00 - 18:00
                **Sat:** 08:00 - 14:00
                **Sun:** Online Only
        `,
        },

        {
                title: "Remona Contacts",
                image: "img/image2.webp",
                text: `Remona Contacts is a business details listing website that not only hosts businesses; but also offers listings for freelancers, projects, and jobs in South Africa, free of charge.

                **Industry**
                Information

                **Address**
                T10 Bluegumbosch
                Phuthaditjhaba
                9869

                **Phone Number**
                +27 71 290 5286

                **Website**
                www.remonacontacts.co.za
        
                **Operating Hours**
                **Mon - Sun:** 24 Hours
        `,
        },

        {
                title: "The 10 Web Developers (Pty) Ltd.",
                image: "img/image1.webp",
                text: `As a startup, The '10' Web Developers is passionate about understanding your unique business needs and delivering exceptional results through our innovative solutions.

                The '10' has partnered with skilled professionals to combines expertise in Web Development and Google Business Profile Optimization to provide comprehensive services, including website design, content creation, and targeted advertising, digital designs, and SEO among others.

                Our mission is to empower your brand with a strong online presence and create meaningful connections with your target audience. Together, we can navigate the ever-evolving digital world and achieve your business goals.

                **Industry**
                Information Technology

                **Address**
                T10 Bluegumbosch
                Phuthaditjhaba
                9869

                **Phone Number**
                +27 71 290 5286

                **Website**
                tinyurl.com/10webdev

                **Operating Hours**
                **Mon - Fri:** 08:00 - 18:00
                **Sat:** 08:00 - 14:00
                **Sun:** Online Only
        `,
        },

        {
                title: "Remona Contacts",
                image: "img/image2.webp",
                text: `Remona Contacts is a business details listing website that not only hosts businesses; but also offers listings for freelancers, projects, and jobs in South Africa, free of charge.

                **Industry**
                Information

                **Address**
                T10 Bluegumbosch
                Phuthaditjhaba
                9869

                **Phone Number**
                +27 71 290 5286

                **Website**
                www.remonacontacts.co.za
        
                **Operating Hours**
                **Mon - Sun:** 24 Hours
        `,
        },

        {
                title: "The 10 Web Developers (Pty) Ltd.",
                image: "img/image1.webp",
                text: `As a startup, The '10' Web Developers is passionate about understanding your unique business needs and delivering exceptional results through our innovative solutions.

                The '10' has partnered with skilled professionals to combines expertise in Web Development and Google Business Profile Optimization to provide comprehensive services, including website design, content creation, and targeted advertising, digital designs, and SEO among others.

                Our mission is to empower your brand with a strong online presence and create meaningful connections with your target audience. Together, we can navigate the ever-evolving digital world and achieve your business goals.

                **Industry**
                Information Technology

                **Address**
                T10 Bluegumbosch
                Phuthaditjhaba
                9869

                **Phone Number**
                +27 71 290 5286

                **Website**
                tinyurl.com/10webdev

                **Operating Hours**
                **Mon - Fri:** 08:00 - 18:00
                **Sat:** 08:00 - 14:00
                **Sun:** Online Only
        `,
        },

        {
                title: "Remona Contacts",
                image: "img/image2.webp",
                text: `Remona Contacts is a business details listing website that not only hosts businesses; but also offers listings for freelancers, projects, and jobs in South Africa, free of charge.

                **Industry**
                Information

                **Address**
                T10 Bluegumbosch
                Phuthaditjhaba
                9869

                **Phone Number**
                +27 71 290 5286

                **Website**
                www.remonacontacts.co.za
        
                **Operating Hours**
                **Mon - Sun:** 24 Hours
        `,
        },

    //Start//

        {
                title: "SECURITY OFFICER (X2 POSTS)",

                image: "img/coat.webp",

                text: `**Department**
                DEPARTMENT OF HOME AFFAIRS (Head Office: Tshwane)

                **Reference_number**
                HRMC 11/25/10

                **Requirements**
                A Grade 12 National Senior Certificate at NQF level 4 as recognized by SAQA
                Basic security officer’s course
                PSIRA Grade C Certificate is required 

                **Closing_date**
                08 May 2025

                **Application_method**
                Online, Post & Hand Deliver

                **Application_directions**
                Applications must be submitted online at
                https://eRecruitment.dha.gov.za
                
                Head Office
                Postal Address:
                Private Bag X114
                Pretoria
                0001

                Physical Address:
                230 Johannes Ramokhoase Street
                Pretoria
                0001

                **Enquiries**
                Head Office: Ms R Masemola Tel No: (012) 406 4156

                `,

        },

        {
                title: "SECRETARY",

                image: "img/coat.webp",

                text: `**Department**
                DEPARTMENT OF JUSTICE AND CONSTITUTIONAL DEVELOPMENT (Master of The High Court: Pretoria)

                **Reference_number**
                25/27/MFLS

                **Requirements**
                Grade 12 (with typing as a subject or Secretarial Certificate or any other training course /qualification that will enable the person to perform the work satisfactorily)

                **Closing_date**
                22 April 2025

                **Application_method**
                Post & Hand Deliver

                **Application_directions**
                Postal address:
                The Human Resources: Department of Justice and Constitutional Development
                Private Bag X81
                Pretoria
                0001
                
                Physical address:
                Application Box
                First Floor Reception
                East Tower
                Momentum Building
                329 Pretorius Street
                Pretoria

                **Enquiries**
                Ms. A. Van Ross Tel No: (012) 315 1094

                `,

        },
        
        {
                title: "HUMAN RESOURCE CLERK",

                image: "img/coat.webp",

                text: `**Department**
                OFFICE OF THE CHIEF JUSTICE (National Office: Midrand)

                **Reference_number**
                2025/52/OCJ

                **Requirements**
                Matric Certificate

                **Closing_date**
                25 April 2025

                **Application_method**
                Email

                **Application_directions**
                Applications can be via email to: 2025/52/OCJ@judiciary.org.za

                **Enquiries**
                Technical /HR related enquiries: Ms D Kupa Tel No: (010) 493 2528

                `,

        },

        {
                title: "REGISTRAR’S CLERK",

                image: "img/coat.webp",

                text: `**Department**
                OFFICE OF THE CHIEF JUSTICE (Labour and Labour Appeals Court: Johannesburg)

                **Reference_number**
                202/40/OCJ

                **Requirements**
                Matric Certificate or equivalent qualification.

                **Closing_date**
                23 April 2025

                **Application_method**
                Email, Post & Hand Deliver

                **Application_directions**
                Applications can be via email to: 2025/66/OCJ@judiciary.org.za
                
                Gauteng Division of the High Court: Pretoria and Labour and Labour Appeals Court: Quoting the relevant reference number, direct your application to:
                The Provincial Head
                Office of the Chief Justice
                Private Bag X7
                Johannesburg
                2000.
                
                Applications can also be hand delivered to:
                12th floor
                Cnr Pritchard and Kruis Street
                Johannesburg

                **Enquiries**
                Technical/HR enquiries: Ms Thami Mbalekwa Tel No: (011) 494 8515

                `,

        },

        {
                title: "DRIVER/MESSENGER",

                image: "img/coat.webp",

                text: `**Department**
                DEPARTMENT OF SOCIAL DEVELOPMENT (Head office, Pietermaritzburg)

                **Reference_number**
                DSD103/03/2025EXEC

                **Requirements**
                Grade 10
                Minimum of 7-12 months experience in driving

                **Closing_date**
                25 April 2025

                **Application_method**
                Online, Post & Hand Delivery

                **Application_directions**
                Apply online using https://www.eservices.gov.za
                
                Postal Address:
                Head Office: Department of Social Development
                Private Bag X9144
                Pietermaritzburg
                3200
                
                Hand deliver to:
                174 Mayors Walk Road
                Pietermaritzburg
                3200
                
                FOR ATTENTION : Mrs PN Mkhize

                **Enquiries**
                Ms NHP Khanyile Tel No: (033) 264 5402

                `,

        },

        {
                title: "ADMINISTRATION CLERK: ADMISSIONS (FEES)",

                image: "img/coat.webp",

                text: `**Department**
                DEPARTMENT OF HEALTH (Stellenbosch Hospital)

                **Reference_number**
                Not Applicable

                **Requirements**
                Senior Certificate (or equivalent)

                **Closing_date**
                22 April 2025

                **Application_method**
                Online

                **Application_directions**
                Applications are submitted online via www.westerncape.gov.za/health-jobs

                **Enquiries**
                Ms G de Kock Tel No: (021) 808-6115

                `,

        },

        {
                title: "ADMINISTRATION CLERK SUPPORT (THERAPEUTIC SERVICES)",

                image: "img/coat.webp",

                text: `**Department**
                DEPARTMENT OF HEALTH (Western Cape Rehabilitation Centre)

                **Reference_number**
                Not Applicable

                **Requirements**
                Senior Certificate or equivalent certificate

                **Closing_date**
                22 April 2025

                **Application_method**
                Online

                **Application_directions**
                Applications are submitted online via www.westerncape.gov.za/health-jobs

                **Enquiries**
                Ms Leandré Stroebel Tel No: (021) 370 2472

                `,

        },

        {
                title: "ADMINISTRATION CLERK: HUMAN RESOURCE MANAGEMENT",

                image: "img/coat.webp",

                text: `**Department**
                DEPARTMENT OF HEALTH (Garden Route District Office, George)

                **Reference_number**
                Not Applicable

                **Requirements**
                Senior Certificate (or equivalent)

                **Closing_date**
                22 April 2025

                **Application_method**
                Online

                **Application_directions**
                Applications are submitted online via www.westerncape.gov.za/health-jobs

                **Enquiries**
                Ms S Pienaar Tel No: (044) 803-2703

                `,

        },

        {
                title: "ADMINISTRATION CLERK: SUPPLY CHAIN MANAGEMENT (ASSETS)",

                image: "img/coat.webp",

                text: `**Department**
                DEPARTMENT OF HEALTH (Emergency Medical Services)

                **Reference_number**
                Not Applicable

                **Requirements**
                Senior Certificate with Mathematics and/or Accountancy as a passed subject.

                **Closing_date**
                22 April 2025

                **Application_method**
                Online

                **Application_directions**
                Applications are submitted online via www.westerncape.gov.za/health-jobs

                **Enquiries**
                Mr J Stuart Tel No: (021) 938 6768

                `,

        },

        {
                title: "ADMINISTRATION CLERK: REGISTRY (MEDICAL RECORDS) (X2 POSTS)",

                image: "img/coat.webp",

                text: `**Department**
                DEPARTMENT OF HEALTH (Khayelitsha District Hospital, Khayelitsha Eastern Sub Structure)

                **Reference_number**
                Not Applicable

                **Requirements**
                Senior Certificate (or equivalent)

                **Closing_date**
                22 April 2025

                **Application_method**
                Online

                **Application_directions**
                Applications are submitted online via www.westerncape.gov.za/health-jobs

                **Enquiries**
                Ms S Fiekies Tel No: (021) 360-4291

                `,

        },

        {
                title: "ADMINISTRATION CLERK: ADMISSIONS",

                image: "img/coat.webp",

                text: `**Department**
                DEPARTMENT OF HEALTH (Khayelitsha District Hospital, Khayelitsha Eastern Sub Structure)

                **Reference_number**
                Not Applicable

                **Requirements**
                Senior Certificate (or equivalent)

                **Closing_date**
                22 April 2025

                **Application_method**
                Online

                **Application_directions**
                Applications are submitted online via www.westerncape.gov.za/health-jobs

                **Enquiries**
                Mr G Arendse Tel No: (021) 360-4280

                `,

        },

        {
                title: "ADMINISTRATION CLERK: FINANCE (FEES)",

                image: "img/coat.webp",

                text: `**Department**
                DEPARTMENT OF HEALTH (Knysna Hospital)

                **Reference_number**
                Not Applicable

                **Requirements**
                Senior Certificate (or equivalent)

                **Closing_date**
                22 April 2025

                **Application_method**
                Online

                **Application_directions**
                Applications are submitted online via www.westerncape.gov.za/health-jobs

                **Enquiries**
                Mr O Nondala Tel No: (044) 302-8408

                `,

        },

        {
                title: "ADMINISTRATION CLERK: SUPPORT (TECHNICAL SERVICES)",

                image: "img/coat.webp",

                text: `**Department**
                DEPARTMENT OF HEALTH (Oudtshoorn Hospital)

                **Reference_number**
                Not Applicable

                **Requirements**
                Senior Certificate (or equivalent)

                **Closing_date**
                22 April 2025

                **Application_method**
                Online

                **Application_directions**
                Applications are submitted online via www.westerncape.gov.za/health-jobs

                **Enquiries**
                Mr A Roets Tel No: (044) 203 - 7267

                `,

        },

        {
                title: "ADMINISTRATION CLERK: ADMISSIONS",

                image: "img/coat.webp",

                text: `**Department**
                DEPARTMENT OF HEALTH (Alan Blyth Hospital)

                **Reference_number**
                Not Applicable

                **Requirements**
                Senior Certificate (or equivalent)

                **Closing_date**
                22 April 2025

                **Application_method**
                Online

                **Application_directions**
                Applications are submitted online via www.westerncape.gov.za/health-jobs

                **Enquiries**
                Ms C Roman Tel No: (044) 203-7264

                `,

        },
        
        {
                title: "ADMINISTRATION CLERK: SUPPORT (NURSING)",

                image: "img/coat.webp",

                text: `**Department**
                DEPARTMENT OF HEALTH (Tygerberg Hospital, Parow Valley)

                **Reference_number**
                Not Applicable

                **Requirements**
                Senior Certificate (or equivalent)

                **Closing_date**
                22 April 2025

                **Application_method**
                Online

                **Application_directions**
                Applications are submitted online via www.westerncape.gov.za/health-jobs

                **Enquiries**
                Ms F Baartman Tel No: (021) 938-4055

                `,

        },

        {
                title: "ADMINISTRATION CLERK: HUMAN RESOURCE MANAGEMENT",

                image: "img/coat.webp",

                text: `**Department**
                DEPARTMENT OF HEALTH (Garden Route District Office, George)

                **Reference_number**
                Not Applicable

                **Requirements**
                Senior Certificate (or equivalent)

                **Closing_date**
                22 April 2025

                **Application_method**
                Online

                **Application_directions**
                Applications are submitted online via www.westerncape.gov.za/health-jobs

                **Enquiries**
                Ms S Pienaar Tel No: (044) 803-2703

                `,

        },

        {
                title: "ADMINISTRATION CLERK: REGISTRY",

                image: "img/coat.webp",

                text: `**Department**
                DEPARTMENT OF HEALTH (Forensic Pathology Service, Head Office)

                **Reference_number**
                Not Applicable

                **Requirements**
                Senior Certificate (or equivalent)

                **Closing_date**
                22 April 2025

                **Application_method**
                Online

                **Application_directions**
                Applications are submitted online via www.westerncape.gov.za/health-jobs

                **Enquiries**
                Mr J Stuart Tel No: (021) 938 6768

                `,

        },

        {
                title: "FOOD SERVICE AID",

                image: "img/coat.webp",

                text: `**Department**
                DEPARTMENT OF HEALTH (West Coast TB Complex (Sonstraal Hospital, Paarl))

                **Reference_number**
                Not Applicable

                **Requirements**
                Basic numeracy and literacy.

                **Closing_date**
                22 April 2025

                **Application_method**
                Online

                **Application_directions**
                Applications are submitted online via www.westerncape.gov.za/health-jobs

                **Enquiries**
                Mr HL Siegelaar Tel No: (021) 837-8097

                `,

        },

        {
                title: "GENERAL WORKER (CSSD)",

                image: "img/coat.webp",

                text: `**Department**
                DEPARTMENT OF HEALTH (Groote Schuur Hospital, Observatory)

                **Reference_number**
                Not Applicable

                **Requirements**
                Basic numeracy and literacy.

                **Closing_date**
                22 April 2025

                **Application_method**
                Online

                **Application_directions**
                Applications are submitted online via www.westerncape.gov.za/health-jobs

                **Enquiries**
                Ms. S. Omar Tel No: (021) 404-4049 / 4051

                `,

        },

        {
                title: "PORTER",

                image: "img/coat.webp",

                text: `**Department**
                DEPARTMENT OF HEALTH (Helderberg Hospital, Khayelitsha Eastern Sub Structure)

                **Reference_number**
                Not Applicable

                **Requirements**
                Basic reading, writing and numerical skills.

                **Closing_date**
                22 April 2025

                **Application_method**
                Online

                **Application_directions**
                Applications are submitted online via www.westerncape.gov.za/health-jobs

                **Enquiries**
                Mr H Williams Tel No: (021) 850-4755

                `,

        },

        {
                title: "MESSENGER (ADMIN SERVICES)",

                image: "img/coat.webp",

                text: `**Department**
                DEPARTMENT OF HEALTH (Office of the CD: Metro Health Services)

                **Reference_number**
                Not Applicable

                **Requirements**
                Basic reading, writing and numerical skills.
                Valid (Code B/EB) drivers licence.

                **Closing_date**
                22 April 2025

                **Application_method**
                Online

                **Application_directions**
                Applications are submitted online via www.westerncape.gov.za/health-jobs

                **Enquiries**
                Mr L Moolman Tel No: (021) 815 8724

                `,

        },

        {
                title: "HOUSEHOLD AID (POST NATAL & GYNAECOLOGY AND B4 OBSTETRICS 8) (X2 POSTS)",

                image: "img/coat.webp",

                text: `**Department**
                DEPARTMENT OF HEALTH (New Somerset Hospital)

                **Reference_number**
                Not Applicable

                **Requirements**
                Basic reading, writing and numerical skills.

                **Closing_date**
                22 April 2025

                **Application_method**
                Online

                **Application_directions**
                Applications are submitted online via www.westerncape.gov.za/health-jobs

                **Enquiries**
                Mr JM Roberts Tel No: (021) 402 6461

                `,

        },

        {
                title: "HOUSEHOLD AID",

                image: "img/coat.webp",

                text: `**Department**
                DEPARTMENT OF HEALTH (Oudtshoorn Hospital, Oudtshoorn & Kannaland Sub Districts)

                **Reference_number**
                Not Applicable

                **Requirements**
                Basic reading, writing and numerical skills.

                **Closing_date**
                22 April 2025

                **Application_method**
                Online

                **Application_directions**
                Applications are submitted online via www.westerncape.gov.za/health-jobs

                **Enquiries**
                Mr CB Olivier Tel No: (044) 203 - 7203

                `,

        },

        {
                title: "CLEANER",

                image: "img/coat.webp",

                text: `**Department**
                DEPARTMENT OF HEALTH (George Weg CC, Mossel Bay Sub-district)

                **Reference_number**
                Not Applicable

                **Requirements**
                Basic reading, writing and numerical skills.

                **Closing_date**
                22 April 2025

                **Application_method**
                Online

                **Application_directions**
                Applications are submitted online via www.westerncape.gov.za/health-jobs

                **Enquiries**
                Ms A Lamprecht Tel No: (044) 604-6106


                `,

        },

        {
                title: "SENIOR ADMINISTRATION CLERK: EMPLOYER REGISTRATION",

                image: "img/coat.webp",

                text: `**Department**
                DEPARTMENT OF EMPLOYMENT AND LABOUR (Unemployment Insurance Fund, Pretoria)

                **Reference_number**
                HR4/4/3/1SACER/UIF

                **Requirements**
                - Senior Certificate/ Grade 12.
                - No experience required.

                **Closing_date**
                30 April 2025 at 16:00 (walk-in) and 00:00 (online)

                **Application_method**
                Email, Post & Hand Delivery

                **Application_directions**
                Email: Jobs-UIF18@labour.gov.za

                Post:
                Chief Director: Corporate Services
                P O Box 1851
                Pretoria
                0001
                
                Hand delivery at:
                Corner Lilian Ngoyi and Pretorius Street
                ABSA Towers Building
                Pretoria.
                
                FOR ATTENTION : Sub-directorate: Human Resources Management, UIF

                **Enquiries**
                Mr MS Matlou Tel No: (012) 337 1635

                `,

        },

        {
                title: "CLIENT SERVICE OFFICER: COID (X3 POSTS)",

                image: "img/coat.webp",

                text: `**Department**
                DEPARTMENT OF EMPLOYMENT AND LABOUR
                - Labour Centre: Carolina Ref No: HR4/4/7/26(X1 Post)
                - Labour Centre: Vryburg Ref No: HR4/4/02/05(X1 Post)
                - Labour Centre: Volkrust Ref No: HR4/4/7/33(X1 Post)

                **Reference_number**
                Various

                **Requirements**
                Matriculation/ Grade 12/ Senior Certificate

                **Closing_date**
                30 April 2025 at 16:00 (walk-in) and 00:00 (online)

                **Application_method**
                Email, Post & Hand Delivery

                **Application_directions**
                Email: Jobs-CRL@LABOUR.gov.za

                Post:
                Deputy Director Labour Centre Operations:
                Private Bag X718
                Carolina
                1185

                Hand delivery at:
                Landbou Building
                20B Breytenbach Street
                Carolina
                
                Email: Jobs-PRT@LABOUR.gov.za

                Post:
                Acting Deputy Director Labour Centre Operations:
                Private Bag X34
                Piet Retief
                2380
                
                Hand deliver at:
                Balalas Building
                42
                Kotze Street
                eMkhondo
                
                Email: Jobs-NW5@LABOUR.gov.za

                Post:
                Chief Director: Provincial Operations:
                Private Bag X2040
                Mmabatho
                2735
                
                Hand deliver at:
                Provident House
                University Drive
                Mmabatho

                **Enquiries**
                - Mr RL Mokoena Tel No: (017) 843 1077/2111/3190 (Caroline)
                - Mr SS Shongwe Tel No: (018) 387 8100 (Vryburg)
                - Mr M Makate Tel No: (017) 826 1883 (Volkrust)

                `,

        },
        
        {
                title: "CLIENT SERVICE OFFICER: UIF (X24 POSTS)",

                image: "img/coat.webp",

                text: `**Department**
                DEPARTMENT OF EMPLOYMENT AND LABOUR
                - Thaba- Nchu Satellite Office Ref No: HR 4/4/8/906 (X2 Posts)
                - Labour Centre: Bethlehem Ref No: HR/4/4/8/907 (X2 Posts)
                - Labour Centre: Sasolburg Ref No: HR 4/4/8/908 (X2 Posts)
                - Labour Centre: Mogwase Ref No HR4/4/02/07 (X2 Posts)
                - Labour Centre: Vryburg Ref No: HR4/4/02/07 (1X Post)
                - Labour Centre: Potchefstroom Ref No: HR4/4/02/08 (X1 Post)
                - Christiana Labour Centre Ref No: HR4/4/02/09 (X1 Post)
                - Labour Centre: Kokstad Ref No: HR4/4/5/5 (X2)
                - Labour Centre: Richmond Ref No: HR4/4/5/6(X1 Post)
                - Labour Centre: Ulundi Ref No: HR4/4/5/7 (X1 Post)
                - Labour Centre: Dundee Ref No: HR4/4/5/8(X1 Post)
                - Labour Centre: Ladysmith Ref No: HR4/4/5/9(X1 Post)
                - Labour Centre: Estcourt Ref No: HR4/4/5/10 (X1 Post)
                - Labour Centre: Mthatha Ref No: HR4/4/10/01 (X3 Posts)
                - Labour Centre: Kariega Ref No: HR4/4/10/02 (X3 Posts)

                **Reference_number**
                Various

                **Requirements**
                - Grade 12\ Senior Certificate.
                - No experience required.

                **Closing_date**
                30 April 2025 at 16:00 (walk-in) and 00:00 (online)

                **Application_method**
                Email, Post & Hand Delivery

                **Application_directions**
                Email: jobs-fs1@labour.gov.za

                Post:
                Chief Director: Provincial Operations:
                Private Bag X522
                Bloemfontein
                9300
                
                Hand deliver at:
                Laboria House
                43 Charlotte Maxeke Street
                Bloemfontein


                Email: Jobs-NW6@LABOUR.gov.za

                Post:
                Chief Director: Provincial Operations
                Private Bag X2040
                Mmabatho
                2735
                
                Hand deliver at:
                Provident House
                University Drive
                Mmabatho


                Email to: Jobs-KZN1@Labour.gov.za

                Post:
                Deputy Director: Kokstad Labour Centre
                PO Box 260
                Kokstad
                4700

                Hand deliver at:
                59 Hope Street
                Kokstad


                Email to: Jobs-KZN2@Labour.gov.za

                Post:
                Deputy Director: Richmond Labour Centre
                PO Box 852
                Richmond
                3780
                
                Hand deliver at:
                60 Shepstone Street
                Richmond


                Email to: Jobs-KZN3@Labour.gov.za

                Post:
                Deputy Director: Ulundi Labour Centre
                Private Bag X56
                Ulundi
                3838
                
                Hand deliver at:
                Unit A
                Wombe Street
                Ulundi


                Email to: Jobs-KZN4@Labour.gov.za

                Post:
                Deputy Director: Dundee Labour Centre
                PO Box 445
                Dundee
                3000
                
                Hand deliver at:
                63 Victoria Street
                Dundee


                Email to: Jobs-KZN5@Labour.gov.za

                Post:
                Deputy Director: Ladysmith Labour Centre
                Private Bag X9925
                Ladysmith
                3370
                
                Hand deliver at:
                35 Keate Street
                Ladysmith


                Email to: Jobs-KZN6@Labour.gov.za

                Post:
                Deputy Director: Estcourt Labour Centre
                P O Box 449
                Estcourt
                3310
                
                Hand deliver at:
                75 Phillip Street
                Estcourt


                Email: Jobs-EC6@labour.gov.za

                Post:
                Deputy Director: Labour Centre Operations
                Private Bag X5080
                Mthatha
                5100
                
                Hand deliver at:
                No. 18
                Corner of Madeira & Elliot Street Old Manpower Building
                Mthatha, 5100.


                Email: Jobs-EC3@labour.gov.za

                Post:
                Deputy Director: Labour Centre Operations
                P.O. Box 562
                Kariega
                6230
                Hand deliver at:
                15A Chase Street
                Kariega
                6230

                **Enquiries**
                - Mr MJ Ngono Tel No: (051) 933 2299
                - Mr T Moholi Tel No: (051) 303 5293
                - Ms Lelope Tel No: (051) 970 3200
                - Mr SS Shongwe Tel No: (018) 387 8100 (North-West)
                - Mr S Ngqoza Tel No: (039) 727 2140 (Kokstad)
                - Mr P Mtolo Tel No: (033) 212 2768 (Richmond)
                - Mr T Nkosi Tel No: (035) 879 8800 (Ulundi)
                - Ms T Khumalo Tel No: (034) 212 2421 (Dundee)
                - Ms L Radebe Tel No: (036) 638 1900 (Ladysmith)
                - Mr J Fakazi Tel No: (036) 352 7767 (Estcourt)
                - Ms S Zaula Tel No: (047) 501 5600 (Mthatha)
                - Ms W Koba Tel No: (041) 260 0608 (Kariega)

                `,

        },

        {
                title: "UI CLAIMS OFFICER (X4 POSTS)",

                image: "img/coat.webp",

                text: `**Department**
                DEPARTMENT OF EMPLOYMENT AND LABOUR
                - Labour Centre: Germiston Ref No: HR 4/4/4/02/04 (X2 Posts)
                - Labour Centre: Soshanguve Ref No: HR 4/4/4/02/03 (X1 Post)
                - Provincial Office: KZN Ref No HR4/4/5/26 (X1 Post)

                **Reference_number**
                Various

                **Requirements**
                - Grade 12/Senior Certificate.
                - Experience: 0 to 6 months.

                **Closing_date**
                30 April 2025 at 16:00 (walk-in) and 00:00 (online)

                **Application_method**
                Email, Post & Hand Delivery

                **Application_directions**
                Email: Jobs-GP6@labour.gov.za

                Post:
                Chief Director: Provincial Operations:
                PO Box 4560
                Johannesburg
                2001
                
                Hand deliver at:
                Department of Employment and Labour
                No. 47 Empire Road
                Park town


                Email to: Jobs-KZN8@Labour.gov.za

                Post:
                Deputy Director: Provincial Operations:
                PO BOX 940
                Durban
                4000
                
                Hand deliver at:
                267 Anton Lembede Street
                Durban

                **Enquiries**
                - Ms S Ceaser Tel No: (011) 345 6300
                - Mr T Nengwekhulu Tel No: (018) 632 4779
                - Ms G Khomo Tel No: (031) 366 2331

                `,

        },

        {
                title: "SENIOR ADMINISTRATION CLERK: ANTI-FRAUD AND ANTI-CORRUPTION",

                image: "img/coat.webp",

                text: `**Department**
                DEPARTMENT OF EMPLOYMENT AND LABOUR (Unemployment Insurance Fund, Pretoria)

                **Reference_number**
                HR4/4/3/1SACAFAC/UIF

                **Requirements**
                - Grade 12 Certificate.
                - No experience required.

                **Closing_date**
                30 April 2025 at 16:00 (walk-in) and 00:00 (online)

                **Application_method**
                Email, Post & Hand Delivery

                **Application_directions**
                Email: Jobs-UIF19@labour.gov.za

                Chief Director: Corporate Services:
                P O Box 1851
                Pretoria
                0001
                
                Hand delivery at:
                Corner Lilian Ngoyi and Pretorius Street
                ABSA Towers Building
                Pretoria

                FOR ATTENTION : Sub-directorate: Human Resources Management, UIF

                **Enquiries**
                Mr GS Phoshoko Tel No: (012) 337 1978

                `,

        },

        {
                title: "ADMIN CLERK: LEGAL SERVICES",

                image: "img/coat.webp",

                text: `**Department**
                DEPARTMENT OF EMPLOYMENT AND LABOUR (Provincial Office: KZN)

                **Reference_number**
                HR4/4/5/37

                **Requirements**
                Grade 12

                **Closing_date**
                30 April 2025 at 16:00 (walk-in) and 00:00 (online)

                **Application_method**
                Email, Post & Hand Delivery

                **Application_directions**
                Email to: Jobs-KZN9@Labour.gov.za
                
                Post:
                Senior Manager: Provincial Operations:
                PO BOX 940
                Durban
                4000
                
                Hand deliver at:
                267 Anton Lembede Street
                Durban

                FOR ATTENTION : Sub-directorate: Deputy Director: Human Resource Operations, KwaZulu-Natal.

                **Enquiries**
                Dr N Kahla Tel No: (031) 366 2033

                `,

        },

        {
                title: "SECURITY OFFICER",

                image: "img/coat.webp",

                text: `**Department**
                DEPARTMENT OF EMPLOYMENT AND LABOUR (Unemployment Insurance Fund, Pretoria)

                **Reference_number**
                HR4/4/3/1SO/UIF

                **Requirements**
                - Grade 12.
                - Private Security Industry Regulatory Authority (PSIRA) Grade C.
                - No experience.

                **Closing_date**
                30 April 2025 at 16:00 (walk-in) and 00:00 (online)

                **Application_method**
                Email, Post & Hand Delivery

                **Application_directions**
                Email: Jobs-UIF20@labour.gov.za

                Post:
                Chief Director: Corporate Services:
                P O Box 1851
                Pretoria
                0001
                
                Hand delivery at:
                Corner Lilian Ngoyi and Pretorius Street
                ABSA Towers Building
                Pretoria

                FOR ATTENTION : Sub-directorate: Human Resources Management, UIF

                **Enquiries**
                Mr TP Lebete Tel No: (012) 337 1749

                `,

        },

        {
                title: "MESSENGER / DRIVER",

                image: "img/coat.webp",

                text: `**Department**
                DEPARTMENT OF EMPLOYMENT AND LABOUR (Unemployment Insurance Fund, Pretoria)

                **Reference_number**
                HR4/4/3/1MD/UIF

                **Requirements**
                - Grade 10.
                - Valid driver license.
                - No experience required.

                **Closing_date**
                30 April 2025 at 16:00 (walk-in) and 00:00 (online)

                **Application_method**
                Email, Post & Hand Delivery

                **Application_directions**
                Email: Jobs-UIF21@labour.gov.za

                Chief Director: Corporate Services:
                P O Box 1851
                Pretoria
                0001
                Hand delivery at:
                Corner Lilian Ngoyi and Pretorius Street
                ABSA Towers Building
                Pretoria
                
                FOR ATTENTION : Sub-directorate: Human Resources Management, UIF

                **Enquiries**
                Mr DS Mohlala Tel No: (012) 337 1417

                `,

        },

        {
                title: "ACCOUNTING CLERK",

                image: "img/coat.webp",

                text: `**Department**
                DEPARTMENT OF JUSTICE AND CONSTITUTIONAL DEVELOPMENT (Master of the High Court, Pietermaritzburg)

                **Reference_number**
                25/03/KZN

                **Requirements**
                Grade 12 (Senior Certificate) or equivalent qualification with one of the following as a passed subject (Maths or Accounting).

                **Closing_date**
                05 May 2025

                **Application_method**
                Email, Post & Hand Delivery

                **Application_directions**
                Quote the relevant reference number and courier your application to:
                Physical address:
                Recruitment
                First Floor
                2 Devonshire Place Off Anton Lembede Street
                Durban

                **Enquiries**
                Ms N.F Nkosi Tel No: (031) 372 3000

                `,

        },

        {
                title: "ADMINISTRATIVE OFFICER",

                image: "img/coat.webp",

                text: `**Department**
                PROVINCIAL ADMINISTRATION: FREE STATE DEPARTMENT OF COOPERATIVE GOVERNANCE AND TRADITIONAL AFFAIRS (Bloemfontein)

                **Reference_number**
                COGTA 18/2025

                **Requirements**
                - Grade 12 or equivalent.
                - Recommendations: A minimum of applicable experience in administration of which one year supervisory/ team leader.

                **Closing_date**
                30 April 2025

                **Application_method**
                Email, Post & Hand Delivery

                **Application_directions**
                Email: recruitment1@fscogta.gov.za

                Post:
                Department of Cooperative Governance and Traditional Affairs to be submitted to:
                The HR Manager, P.O. Box 211
                Bloemfontein
                9300
                
                Hand delivered in the box provided in the entrance at:
                Oliver Tambo House
                St Andrew Street
                Bloemfontein
                
                Please quote the reference number on your application.

                **Enquiries**
                Ms SS Dhlamini at 066 055 4674

                `,

        },

        {
                title: "ADMINISTRATIVE OFFICER",

                image: "img/coat.webp",

                text: `**Department**
                PROVINCIAL ADMINISTRATION: FREE STATE DEPARTMENT OF COOPERATIVE GOVERNANCE AND TRADITIONAL AFFAIRS (Bloemfontein, Institutional Support)

                **Reference_number**
                COGTA 19/2025

                **Requirements**
                - Grade 12 or equivalent.
                - Recommendations: In-depth knowledge and experience in customary law as well as traditional practices such as initiations.

                **Closing_date**
                30 April 2025

                **Application_method**
                Email, Post & Hand Delivery

                **Application_directions**
                Email: recruitment1@fscogta.gov.za

                Post:
                Department of Cooperative Governance and Traditional Affairs to be submitted to:
                The HR Manager, P.O. Box 211
                Bloemfontein
                9300
                
                Hand delivered in the box provided in the entrance at:
                Oliver Tambo House
                St Andrew Street
                Bloemfontein
                
                Please quote the reference number on your application.

                **Enquiries**
                Mr. PA Moloi at 066 4874864

                `,

        },

        {
                title: "ADMINISTRATIVE OFFICER (X5 POSTS)",

                image: "img/coat.webp",

                text: `**Department**
                PROVINCIAL ADMINISTRATION: FREE STATE DEPARTMENT OF COOPERATIVE GOVERNANCE AND TRADITIONAL AFFAIRS
                - Namahali Tribal Council Ref No: COGTA 20/2025
                - Bolata Tribal Council Ref No: COGTA 21/2025
                - Mabolela Tribal Council Ref No: COGTA 22/2025
                - Matsieng Tribal Council Ref No: COGTA 23/2025
                - Dinkoeng Tribal Council Ref No: COGTA 24/2025

                **Reference_number**
                Various

                **Requirements**
                - Grade 12 or equivalent.
                - Recommendations: A minimum of applicable experience in administration of which one year supervisory/ team leader.

                **Closing_date**
                30 April 2025

                **Application_method**
                Email, Post & Hand Delivery

                **Application_directions**
                Email: recruitment1@fscogta.gov.za

                Post:
                Department of Cooperative Governance and Traditional Affairs to be submitted to:
                The HR Manager, P.O. Box 211
                Bloemfontein
                9300
                
                Hand delivered in the box provided in the entrance at:
                Oliver Tambo House
                St Andrew Street
                Bloemfontein
                
                Please quote the reference number on your application.

                **Enquiries**
                Mr. PA Moloi at 066 4874864

                `,

        },

        {
                title: "SUPPLY CHAIN CLERKS (X2 POSTS)",

                image: "img/coat.webp",

                text: `**Department**
                PROVINCIAL ADMINISTRATION: FREE STATE DEPARTMENT OF COOPERATIVE GOVERNANCE AND TRADITIONAL AFFAIRS (Bloemfontein)

                **Reference_number**
                COGTA 32/2025

                **Requirements**
                - Grade 12 or equivalent qualification.
                - Recommendations: Knowledge and understanding of general administration and office administration.

                **Closing_date**
                30 April 2025

                **Application_method**
                Email, Post & Hand Delivery

                **Application_directions**
                Email: recruitment1@fscogta.gov.za

                Post:
                Department of Cooperative Governance and Traditional Affairs to be submitted to:
                The HR Manager, P.O. Box 211
                Bloemfontein
                9300
                
                Hand delivered in the box provided in the entrance at:
                Oliver Tambo House
                St Andrew Street
                Bloemfontein
                
                Please quote the reference number on your application.

                **Enquiries**
                Mr. T. Nkhetse at 066 253 2554

                `,

        },

        {
                title: "DRIVER",

                image: "img/coat.webp",

                text: `**Department**
                PROVINCIAL ADMINISTRATION: FREE STATE DEPARTMENT OF COOPERATIVE GOVERNANCE AND TRADITIONAL AFFAIRS (Traditional Affairs QwaQwa)

                **Reference_number**
                COGTA 33/2025

                **Requirements**
                - Grade 10 or equivalent.
                - Valid drivers license.
                - Recommendations: Knowledge of the area in which the functions will be performed.

                **Closing_date**
                30 April 2025

                **Application_method**
                Email, Post & Hand Delivery

                **Application_directions**
                Email: recruitment1@fscogta.gov.za

                Post:
                Department of Cooperative Governance and Traditional Affairs to be submitted to:
                The HR Manager, P.O. Box 211
                Bloemfontein
                9300
                
                Hand delivered in the box provided in the entrance at:
                Oliver Tambo House
                St Andrew Street
                Bloemfontein
                
                Please quote the reference number on your application.

                **Enquiries**
                Mr. PA Moloi at 066 4874864

                `,

        },
        
        {
                title: "DRIVER",

                image: "img/coat.webp",

                text: `**Department**
                PROVINCIAL ADMINISTRATION: FREE STATE DEPARTMENT OF COOPERATIVE GOVERNANCE AND TRADITIONAL AFFAIRS (Traditional Affairs QwaQwa)

                **Reference_number**
                COGTA 34/2025

                **Requirements**
                - Grade 10 or equivalent experience.
                - Valid drivers license.
                - Recommendations: Knowledge of the area in which the functions will be performed.

                **Closing_date**
                30 April 2025

                **Application_method**
                Email, Post & Hand Delivery

                **Application_directions**
                Email: recruitment1@fscogta.gov.za

                Post:
                Department of Cooperative Governance and Traditional Affairs to be submitted to:
                The HR Manager, P.O. Box 211
                Bloemfontein
                9300
                
                Hand delivered in the box provided in the entrance at:
                Oliver Tambo House
                St Andrew Street
                Bloemfontein
                
                Please quote the reference number on your application.

                **Enquiries**
                Mr. PA Moloi at 066 4874864

                `,

        },

        {
                title: "CLEANER",

                image: "img/coat.webp",

                text: `**Department**
                PROVINCIAL ADMINISTRATION: FREE STATE DEPARTMENT OF COOPERATIVE GOVERNANCE AND TRADITIONAL AFFAIRS (Free State House of Traditional Leaders)

                **Reference_number**
                COGTA 35/2025

                **Requirements**
                Ability to read and write.

                **Closing_date**
                30 April 2025

                **Application_method**
                Email, Post & Hand Delivery

                **Application_directions**
                Email: recruitment1@fscogta.gov.za

                Post:
                Department of Cooperative Governance and Traditional Affairs to be submitted to:
                The HR Manager, P.O. Box 211
                Bloemfontein
                9300
                
                Hand delivered in the box provided in the entrance at:
                Oliver Tambo House
                St Andrew Street
                Bloemfontein
                
                Please quote the reference number on your application.

                **Enquiries**
                Mr. M Mokoena at 082 729 6334

                `,

        },

        {
                title: "CLEANER",

                image: "img/coat.webp",

                text: `**Department**
                PROVINCIAL ADMINISTRATION: FREE STATE DEPARTMENT OF COOPERATIVE GOVERNANCE AND TRADITIONAL AFFAIRS (Bolata Tribal Council)

                **Reference_number**
                COGTA 36/2025

                **Requirements**
                Ability to read and write.

                **Closing_date**
                30 April 2025

                **Application_method**
                Email, Post & Hand Delivery

                **Application_directions**
                Email: recruitment1@fscogta.gov.za

                Post:
                Department of Cooperative Governance and Traditional Affairs to be submitted to:
                The HR Manager, P.O. Box 211
                Bloemfontein
                9300
                
                Hand delivered in the box provided in the entrance at:
                Oliver Tambo House
                St Andrew Street
                Bloemfontein
                
                Please quote the reference number on your application.

                **Enquiries**
                Mr. PA Moloi at 066 487 4969

                `,

        },

        {
                title: "CLEANER",

                image: "img/coat.webp",

                text: `**Department**
                PROVINCIAL ADMINISTRATION: FREE STATE DEPARTMENT OF COOPERATIVE GOVERNANCE AND TRADITIONAL AFFAIRS (Bolata Tribal Council)

                **Reference_number**
                COGTA 37/2025

                **Requirements**
                Ability to read and write.

                **Closing_date**
                30 April 2025

                **Application_method**
                Email, Post & Hand Delivery

                **Application_directions**
                Email: recruitment1@fscogta.gov.za

                Post:
                Department of Cooperative Governance and Traditional Affairs to be submitted to:
                The HR Manager, P.O. Box 211
                Bloemfontein
                9300
                
                Hand delivered in the box provided in the entrance at:
                Oliver Tambo House
                St Andrew Street
                Bloemfontein
                
                Please quote the reference number on your application.

                **Enquiries**
                Mr. PA Moloi at 066 487 4969

                `,

        }
];
