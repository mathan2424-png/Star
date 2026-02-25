import React, { useState, useEffect } from 'react';
import '../assets/css/Star-leaders-premium.css';

const StarLeaders = () => {
    const chaptersData = {
        "Karaikudi Chapter": {
            tenure: "2024 (III)",
            meetingDay: "Tuesday",
            venue: "Maha Raja Party Hall",
            time: "08:00 AM",
            date: "18th Feb 2026",
            leaders: [
                { sNo: 1, designation: "Chapter Trainer", name: "V Muthu" },
                { sNo: 2, designation: "CEO", name: "T Mohanasundaram" },
                { sNo: 3, designation: "Secretary", name: "K Thiagarajan" },
                { sNo: 4, designation: "Membership Devp Chairman", name: "T.Prem Kumar" },
                { sNo: 5, designation: "Treasurer", name: "Vijayaraghavan" },
                { sNo: 6, designation: "Chairman - Referrals", name: "M.Palkannan" },
                { sNo: 7, designation: "Chairman - One to One", name: "S Dhinesh Kumar" },
                { sNo: 8, designation: "Chairman - Visitors", name: "R Sivasubramanian" },
                { sNo: 9, designation: "Chairman - Attendance", name: "S.Karthick" },
                { sNo: 10, designation: "Chairman - Events", name: "T Kasi Anand" },
                { sNo: 11, designation: "Chairman - Business Resources", name: "G Padmanabhan" },
                { sNo: 12, designation: "Chairman - Public Image", name: "M Veeramathithyan" }
            ]
        },
        "Chennai Inspire": {
            tenure: "2024 (III)",
            meetingDay: "Friday",
            venue: "Hotel Aaditya (Vadapalani)",
            time: "07:30 AM",
            date: "20th Feb 2026",
            leaders: [
                { sNo: 1, designation: "Regional Director", name: "Mr.Karthi Padmanaban" },
                { sNo: 2, designation: "Chapter Trainer", name: "Mr.S.Chandru" },
                { sNo: 3, designation: "CEO", name: "Mr.N.Kumaresan" },
                { sNo: 4, designation: "Secretary", name: "M.Arun kumar" },
                { sNo: 5, designation: "Membership Devp Chairman", name: "Mr.Senthil Kumar" },
                { sNo: 6, designation: "Treasurer", name: "V.Kannan" },
                { sNo: 7, designation: "Chairman - Referrals", name: "Mr.P.Shanmugasundaram" },
                { sNo: 8, designation: "Chairman - One to One", name: "Mr.R. Praveen" },
                { sNo: 9, designation: "Chairman - Visitors", name: "Mr.R.Karthick" },
                { sNo: 10, designation: "Chairman - Attendance", name: "Mr.R.Suresh Kumar" },
                { sNo: 11, designation: "Chairman - Events", name: "Mr.Thamin Ansari" },
                { sNo: 12, designation: "Chairman - Business Resources", name: "Mr.K.Jayakumar" },
                { sNo: 13, designation: "Chairman - Public Image", name: "Mr.Jainulladin" }
            ]
        },
        "Chennai Bench Mark": {
            tenure: "2024 (III)",
            meetingDay: "Thursday",
            venue: "Ambika Empire",
            time: "08:00 AM",
            date: "26th Feb 2026",
            leaders: [
                { sNo: 1, designation: "Regional Director", name: "Mr.M.Krishnaraj" },
                { sNo: 2, designation: "Chapter Trainer", name: "Mr.M.Krishnaraj" },
                { sNo: 3, designation: "CEO", name: "Mr.Aakash S" },
                { sNo: 4, designation: "Secretary", name: "Mr.M.Sekaran" },
                { sNo: 5, designation: "Membership Devp Chairman", name: "Mr.Subramanian" },
                { sNo: 6, designation: "Treasurer", name: "Mr.Ganesh K" },
                { sNo: 7, designation: "Chairman - Referrals", name: "Mr.Padmaja Ravi" },
                { sNo: 8, designation: "Chairman - One to One", name: "Mr.N.Sathish" },
                { sNo: 9, designation: "Chairman - Visitors", name: "Mr.Praveen Kumar Sadanandan" },
                { sNo: 10, designation: "Chairman - Attendance", name: "Mr.G.Arumugam" },
                { sNo: 11, designation: "Chairman - Business Resources", name: "Mr.R.Suresh Babu" },
                { sNo: 12, designation: "Chairman - Public Image", name: "Mr.A Balamurugan" }
            ]
        },
        "Chennai Galaxy": {
            tenure: "2024 (III)",
            meetingDay: "Wednesday",
            venue: "Hotel Aaditya (Vadapalani)",
            time: "08:00 AM",
            date: "25th Feb 2026",
            leaders: [
                { sNo: 1, designation: "Regional Director", name: "Mr.O.K.Muthukrishnan" },
                { sNo: 2, designation: "Chapter Trainer", name: "Mr.V.Ashok" },
                { sNo: 3, designation: "CEO", name: "Mr.K.Arokiaraj" },
                { sNo: 4, designation: "Secretary", name: "Mr.A.K.Guru" },
                { sNo: 5, designation: "Membership Devp Chairman", name: "Mr.B.Balakrishnan" },
                { sNo: 6, designation: "Treasurer", name: "Mr.N.Sivalingam" },
                { sNo: 7, designation: "Chairman - Referrals", name: "Mr.B.Karthikeyan" },
                { sNo: 8, designation: "Chairman - One to One", name: "Mr.Kohila Vani S" },
                { sNo: 9, designation: "Chairman - Visitors", name: "Mr.Vimal Purohit" },
                { sNo: 10, designation: "Chairman - Attendance", name: "Mr.Saravanan.S" },
                { sNo: 11, designation: "Chairman - Events", name: "Mr.J.Anandaraj" },
                { sNo: 12, designation: "Chairman - Business Resources", name: "Mr.Thomas Jerald" },
                { sNo: 13, designation: "Chairman - Public Image", name: "Mr.Rajendran.R" }
            ]
        },
        "Chennai Sunrise": {
            tenure: "2024 (III)",
            meetingDay: "Tuesday",
            venue: "Hotel Aaditya (Vadapalani)",
            time: "08:00 AM",
            date: "24th Feb 2026",
            leaders: [
                { sNo: 1, designation: "Regional Director", name: "Er.J.Ramkumar" },
                { sNo: 2, designation: "Chapter Trainer", name: "Mr.Kesavarajan.R" },
                { sNo: 3, designation: "CEO", name: "Mr.D.Sivaraj" },
                { sNo: 4, designation: "Secretary", name: "Mr.K.Barani" },
                { sNo: 5, designation: "Membership Devp Chairman", name: "Mr.D.Enbarasu" },
                { sNo: 6, designation: "Treasurer", name: "Mr.M.P.Karthik" },
                { sNo: 7, designation: "Chairman - Referrals", name: "Mr.Akshay Subramanian" },
                { sNo: 8, designation: "Chairman - One to One", name: "Mr.Hema Bhushanam" },
                { sNo: 9, designation: "Chairman - Visitors", name: "Mr.R Dhamodharan" },
                { sNo: 10, designation: "Chairman - Attendance", name: "G Santhosh Kumar" },
                { sNo: 11, designation: "Chairman - Events", name: "Mr.D.Karthick" },
                { sNo: 12, designation: "Chairman - Business Resources", name: "Mr.Kala Praveen.M" },
                { sNo: 13, designation: "Chairman - Public Image", name: "Mr.Jayanth Shayam" }
            ]
        },
        "Chennai Prestige": {
            tenure: "2024 (III)",
            meetingDay: "Wednesday",
            venue: "Aadithya",
            time: "08:00 AM",
            date: "26th Feb 2026",
            leaders: [
                { sNo: 1, designation: "Regional Director", name: "Er.J.Ramkumar" },
                { sNo: 2, designation: "Chapter Trainer", name: "Mr.Vinoth" },
                { sNo: 3, designation: "CEO", name: "Er. Gokul Vasan M E" },
                { sNo: 4, designation: "Secretary", name: "K.Ramya" },
                { sNo: 5, designation: "Membership Devp Chairman", name: "Mr. S Santhosh Kumar" },
                { sNo: 6, designation: "Treasurer", name: "Mr.Krishna Mundhra" },
                { sNo: 7, designation: "Chairman - Referrals", name: "Mr.E.Sathish Kumar" },
                { sNo: 8, designation: "Chairman - One to One", name: "Mr.B.Udhayashankar" },
                { sNo: 9, designation: "Chairman - Visitors", name: "Mr.Senthilvel K" },
                { sNo: 10, designation: "Chairman - Attendance", name: "Mr.Vivek .C" },
                { sNo: 11, designation: "Chairman - Events", name: "Mr.Naren Kumar v" },
                { sNo: 12, designation: "Chairman - Business Resources", name: "Mr.A Uma Maheswari" },
                { sNo: 13, designation: "Chairman - Public Image", name: "Mr.Kathiresh Ramesh" }
            ]
        },
        "Chennai Ultimate": {
            tenure: "2024 (III)",
            meetingDay: "Tuesday",
            venue: "Hotel Ambica Empire",
            time: "08:00 AM",
            date: "25th Feb 2026",
            leaders: [
                { sNo: 1, designation: "Regional Director", name: "Mr.P R Siva Subramaniam" },
                { sNo: 2, designation: "Chapter Trainer", name: "Mr.G.Kumaravel" },
                { sNo: 3, designation: "CEO", name: "Mr.S.Selvam" },
                { sNo: 4, designation: "Secretary", name: "Ms.N Ravathy Abhirami" },
                { sNo: 5, designation: "Membership Devp Chairman", name: "Mr.J.Edward Martin" },
                { sNo: 6, designation: "Treasurer", name: "Mr.Vikaram Khatri" },
                { sNo: 7, designation: "Chairman - Referrals", name: "Mr.M.Sivasubramanian" },
                { sNo: 8, designation: "Chairman - One to One", name: "Mr.S.Gandhi" },
                { sNo: 9, designation: "Chairman - Visitors", name: "Mr.Yash Rajpurohit" },
                { sNo: 10, designation: "Chairman - Attendance", name: "Mr.Karthikayan" },
                { sNo: 11, designation: "Chairman - Events", name: "Mr.Rohit Karunakaran" },
                { sNo: 12, designation: "Chairman - Business Resources", name: "Mr.B.Magesh" },
                { sNo: 13, designation: "Chairman - Public Image", name: "Mr.Udaya Kumar" }
            ]
        },
        "Pondicherry Chapter": {
            tenure: "2024 (III)",
            meetingDay: "Tuesday",
            venue: "Anadha Innconvention Center",
            time: "08:00 AM",
            date: "25th Feb 2026",
            leaders: [
                { sNo: 1, designation: "Regional Director", name: "Mr.K.K.V.ARUL" },
                { sNo: 2, designation: "Chapter Trainer", name: "Mr.V Jeevaraj" },
                { sNo: 3, designation: "CEO", name: "Mr.J.Uthrapathy" },
                { sNo: 4, designation: "Secretary", name: "G Sathiaraj" },
                { sNo: 5, designation: "Membership Devp Chairman", name: "Mr,S.Venkatraman" },
                { sNo: 6, designation: "Treasurer", name: "Mr.Deepak Kumar" },
                { sNo: 7, designation: "Chairman - Referrals", name: "Mr.Mohan raj" },
                { sNo: 8, designation: "Chairman - One to One", name: "Mr.Remy Emaanuel" },
                { sNo: 9, designation: "Chairman - Visitors", name: "Mr.R.Sadhisk Kumar" },
                { sNo: 10, designation: "Chairman - Attendance", name: "Mr.R.Logu" },
                { sNo: 11, designation: "Chairman - Events", name: "Mr.S.Velmurugan" },
                { sNo: 12, designation: "Chairman - Business Resources", name: "Mr.C.Selvam" },
                { sNo: 13, designation: "Chairman - Public Image", name: "Mr.G.Jayashankar" }
            ]
        },
        "Chennai Royal King": {
            tenure: "2024 (III)",
            meetingDay: "Wednesday",
            venue: "Hotel Aaditya (Vadapalani)",
            time: "08:00 AM",
            date: "25th Feb 2026",
            leaders: [
                { sNo: 1, designation: "Regional Director", name: "Mr.O.K.Muthukrishnan" },
                { sNo: 2, designation: "Chapter Trainer", name: "Mr.K.Kirubakaran" },
                { sNo: 3, designation: "CEO", name: "Mr.G.Suresh Kumar" },
                { sNo: 4, designation: "Secretary", name: "Mr.K.Viswanathan" },
                { sNo: 5, designation: "Membership Devp Chairman", name: "Mr.ASV.Saravana Kumaran" },
                { sNo: 6, designation: "Treasurer", name: "Mr.Nivedhitha Muthukrishnan" },
                { sNo: 7, designation: "Chairman - Referrals", name: "Mr.Santhosh Shivan V.K" },
                { sNo: 8, designation: "Chairman - One to One", name: "Mr.S.Durairaj" },
                { sNo: 9, designation: "Chairman - Visitors", name: "Mr.K.Mohammed Umar Farook" },
                { sNo: 10, designation: "Chairman - Attendance", name: "Mr.S.N.Mathiazhagen" },
                { sNo: 11, designation: "Chairman - Events", name: "Mr.E.Sudhakar" },
                { sNo: 12, designation: "Chairman - Business Resources", name: "Mr.Nethajibabu Chellaiyah" },
                { sNo: 13, designation: "Chairman - Public Image", name: "Mr.Santhosh Shivan V.K" }
            ]
        },
        "Tambaram Chapter": {
            tenure: "2024 (III)",
            meetingDay: "Wednesday",
            venue: "Hotel Barefoot Bay",
            time: "08:00 AM",
            date: "25th Feb 2026",
            leaders: [
                { sNo: 1, designation: "Regional Director", name: "Mr.P R Siva Subramaniam" },
                { sNo: 2, designation: "Chapter Trainer", name: "Mr.Sukumar K" },
                { sNo: 3, designation: "CEO", name: "Mr.Prasanna V" },
                { sNo: 4, designation: "Secretary", name: "Mr.Maheshwaran" },
                { sNo: 5, designation: "Membership Devp Chairman", name: "Ms.Haripriya" },
                { sNo: 6, designation: "Treasurer", name: "Mr.A.Radhakrishnan" },
                { sNo: 7, designation: "Chairman - Referrals", name: "Mr.Venkateshwaran.T" },
                { sNo: 8, designation: "Chairman - One to One", name: "Mr.Balasubramanian P" },
                { sNo: 9, designation: "Chairman - Visitors", name: "Mr.V.M.R.Azhagiri" },
                { sNo: 10, designation: "Chairman - Attendance", name: "Mr.Balakrishnan S" },
                { sNo: 11, designation: "Chairman - Events", name: "Mr.Yokeshwaran A R" },
                { sNo: 12, designation: "Chairman - Business Resources", name: "Mr.Vijay Premnath" },
                { sNo: 13, designation: "Chairman - Public Image", name: "Mr.M.Mohan" }
            ]
        },
        "Chennai Crown": {
            tenure: "2024 (III)",
            meetingDay: "Thursday",
            venue: "Hotel Adithya",
            time: "08:00 AM",
            date: "27th Feb 2026",
            leaders: [
                { sNo: 1, designation: "Regional Director", name: "Mr.Vijayakumar C" },
                { sNo: 2, designation: "Chapter Trainer", name: "Mr.N.Deepak" },
                { sNo: 3, designation: "CEO", name: "Mr.Jeganathan D" },
                { sNo: 4, designation: "Secretary", name: "Mr.D.Shivakumar" },
                { sNo: 5, designation: "Membership Devp Chairman", name: "Mr.S.Mereshan" },
                { sNo: 6, designation: "Treasurer", name: "Mr.Prabhu S" },
                { sNo: 7, designation: "Chairman - Referrals", name: "Mr.Kanna Rao S" },
                { sNo: 8, designation: "Chairman - One to One", name: "Mr.Sukumar K" },
                { sNo: 9, designation: "Chairman - Visitors", name: "Mr.Naveenkumar N" },
                { sNo: 10, designation: "Chairman - Attendance", name: "Ms.G.V.Lakshmi" },
                { sNo: 11, designation: "Chairman - Events", name: "Mr.Murali Dhayalu S" },
                { sNo: 12, designation: "Chairman - Business Resources", name: "Mr.Raja S" },
                { sNo: 13, designation: "Chairman - Public Image", name: "Mr.C.K.Vignesh" }
            ]
        },
        "Chennai Vibrant": {
            tenure: "2024 (III)",
            meetingDay: "Wednesday",
            venue: "Hotel Ambica Empire",
            time: "08:00 AM",
            date: "25th Feb 2026",
            leaders: [
                { sNo: 1, designation: "Regional Director", name: "Mr.Vijayakumar C" },
                { sNo: 2, designation: "Chapter Trainer", name: "Mr.T.G.Anbarasan" },
                { sNo: 3, designation: "CEO", name: "Mr.V.Gnaprakasam" },
                { sNo: 4, designation: "Secretary", name: "Mr.Visakh M" },
                { sNo: 5, designation: "Membership Devp Chairman", name: "Mr.T.J.Ignatius" },
                { sNo: 6, designation: "Treasurer", name: "Mr.R.Radha krishnan" },
                { sNo: 7, designation: "Chairman - Referrals", name: "Mr.P.Selvakumar" },
                { sNo: 8, designation: "Chairman - One to One", name: "Mr.Aneesh Maniyan" },
                { sNo: 9, designation: "Chairman - Visitors", name: "Mr.S.Vijayakumar" },
                { sNo: 10, designation: "Chairman - Attendance", name: "Mr.Muhammad Riaz" },
                { sNo: 11, designation: "Chairman - Events", name: "Mr.S.Ganesh" },
                { sNo: 12, designation: "Chairman - Business Resources", name: "Mr.P.T.Prabhakaran" },
                { sNo: 13, designation: "Chairman - Public Image", name: "Mr.Rafiq Ahamed A" }
            ]
        },
        "Trichy Dynamic": {
            tenure: "2024 (III)",
            meetingDay: "Saturday",
            venue: "Hotel Ramyas",
            time: "08:00 AM",
            date: "28th Feb 2026",
            leaders: [
                { sNo: 1, designation: "Regional Director", name: "MR.P.CHANDRASEKAR" },
                { sNo: 2, designation: "Chapter Trainer", name: "MR.KISHEN PATRICK" },
                { sNo: 3, designation: "CEO", name: "MR.RAFEEK" },
                { sNo: 4, designation: "Secretary", name: "MR.J.NIZAR AHAMMED" },
                { sNo: 5, designation: "Membership Devp Chairman", name: "MR.P.NIVASH" },
                { sNo: 6, designation: "Treasurer", name: "MR.P.LOKESHRAJAN" },
                { sNo: 7, designation: "Chairman - Referrals", name: "MR.S.ARUNACHALAM" },
                { sNo: 8, designation: "Chairman - One to One", name: "MR.TAMILSELVAN" },
                { sNo: 9, designation: "Chairman - Visitors", name: "MR.ANEES" },
                { sNo: 10, designation: "Chairman - Attendance", name: "MR.MANSOOR ALI" },
                { sNo: 11, designation: "Chairman - Events", name: "MR.M.DINAKARAN" },
                { sNo: 12, designation: "Chairman - Business Resources", name: "MR.S.YOGADASAN" }
            ]
        },
        "Trichy Galaxy": {
            tenure: "2024 (III)",
            meetingDay: "Saturday",
            venue: "Hotel Blossoms",
            time: "08:00 AM",
            date: "28th Feb 2026",
            leaders: [
                { sNo: 1, designation: "Regional Director", name: "MR.P.CHANDRASEKAR" },
                { sNo: 2, designation: "Chapter Trainer", name: "Mr. A.MADANRAJ" },
                { sNo: 3, designation: "CEO", name: "Mr. A.M. UMAR FAROOQ" },
                { sNo: 4, designation: "Secretary", name: "Mr. D.VIJAYKUMAR" },
                { sNo: 5, designation: "Membership Devp Chairman", name: "Mr.R.MANIKANDAN" },
                { sNo: 6, designation: "Treasurer", name: "Mr. A.ANAND" },
                { sNo: 7, designation: "Chairman - Referrals", name: "Mr. SATHIYARAJ" },
                { sNo: 8, designation: "Chairman - One to One", name: "Mr. P.K.ALAGUMUTHU" },
                { sNo: 9, designation: "Chairman - Visitors", name: "Mr.P.RAMANATHAN" },
                { sNo: 10, designation: "Chairman - Attendance", name: "Mr. K.PREMKUMAR" },
                { sNo: 11, designation: "Chairman - Events", name: "Mr. R.SARAVANA KUMAR" },
                { sNo: 12, designation: "Chairman - Business Resources", name: "Mr.T.KESAVAN" }
            ]
        },
        "Thanjavur Chapter": {
            tenure: "2024 (III)",
            meetingDay: "Thursday",
            venue: "Hotel Sangam",
            time: "08:00 AM",
            date: "27th Feb 2026",
            leaders: [
                { sNo: 1, designation: "Regional Director", name: "Mr.P.PUGALENTHI" },
                { sNo: 2, designation: "Chapter Trainer", name: "Mr.T.DINESH" },
                { sNo: 3, designation: "CEO", name: "Mr.S.EZHILVELAN" },
                { sNo: 4, designation: "Secretary", name: "Mr.R.RAMARAJ" },
                { sNo: 5, designation: "Membership Devp Chairman", name: "Mr.ALEX" },
                { sNo: 6, designation: "Treasurer", name: "Mr.S.KAVIYARASAN" },
                { sNo: 7, designation: "Chairman - Referrals", name: "Mr.R.RAMKUMAR" },
                { sNo: 8, designation: "Chairman - One to One", name: "Mr.ADAIKALASAMY" },
                { sNo: 9, designation: "Chairman - Visitors", name: "Mr.A.ARVIND KRISHNAA" },
                { sNo: 10, designation: "Chairman - Attendance", name: "Mr.A.CHANDRAVARMAN" },
                { sNo: 11, designation: "Chairman - Events", name: "Mr.K.ARIVALAGAN" },
                { sNo: 12, designation: "Chairman - Business Resources", name: "Mr.SURYA" },
                { sNo: 13, designation: "Chairman - Public Image", name: "Mr.PARI KALIYA PERUMAL" }
            ]
        },
        "Madurai Chapter": {
            tenure: "2024 (III)",
            meetingDay: "Tuesday",
            venue: "Mount Retreat -Resort",
            time: "08:00 AM",
            date: "25th Feb 2026",
            leaders: [
                { sNo: 1, designation: "Regional Director", name: "ER.S.SYED MUNAAF" },
                { sNo: 2, designation: "Chapter Trainer", name: "MR.S.RAMESH" },
                { sNo: 3, designation: "CEO", name: "MR.M.MUKESH RAJA" },
                { sNo: 4, designation: "Secretary", name: "MR.V.MURALI KUMAR" },
                { sNo: 5, designation: "Membership Devp Chairman", name: "MRS.M.NITHYA" },
                { sNo: 6, designation: "Treasurer", name: "MR.G.NIRMAL KUMAR" },
                { sNo: 7, designation: "Chairman - Referrals", name: "MR.UMESH H PATEL" },
                { sNo: 8, designation: "Chairman - One to One", name: "MR.M.BALAJI" },
                { sNo: 9, designation: "Chairman - Visitors", name: "MR.J.AZEES BASHA" },
                { sNo: 10, designation: "Chairman - Attendance", name: "MR.R.SUGUMAR" },
                { sNo: 11, designation: "Chairman - Events", name: "MR.ABHISHEK BAFNA" },
                { sNo: 12, designation: "Chairman - Business Resources", name: "MR.R.ATHIBAN BIRLA" },
                { sNo: 13, designation: "Chairman - Public Image", name: "MR.M.MUTHU MANI KUMARAN" }
            ]
        },
        "Madurai Galaxy": {
            tenure: "2024 (III)",
            meetingDay: "Thursday",
            venue: "Hotel Astoria",
            time: "08:00 AM",
            date: "27th Feb 2026",
            leaders: [
                { sNo: 1, designation: "Regional Director", name: "S.K.GOBIDOSS" },
                { sNo: 2, designation: "Chapter Trainer", name: "S.RAJAN" },
                { sNo: 3, designation: "CEO", name: "R.K.SAMY" },
                { sNo: 4, designation: "Secretary", name: "K.ARUN PRAKASH" },
                { sNo: 5, designation: "Membership Devp Chairman", name: "MR.GOBINATH" },
                { sNo: 6, designation: "Treasurer", name: "MR.S.SIVARAM" },
                { sNo: 7, designation: "Chairman - Referrals", name: "MR.DEEPAK" },
                { sNo: 8, designation: "Chairman - One to One", name: "MR.KARIKALA CHOLAN" },
                { sNo: 9, designation: "Chairman - Visitors", name: "MR.SATHISH" },
                { sNo: 10, designation: "Chairman - Attendance", name: "MRS.N.SUGANYA" },
                { sNo: 11, designation: "Chairman - Events", name: "MR.B.MANIKANDAN" },
                { sNo: 12, designation: "Chairman - Business Resources", name: "MR.M.PARIMALANATHAN" },
                { sNo: 13, designation: "Chairman - Public Image", name: "MR.J.K.SARAVANESH" }
            ]
        },
        "Madurai Prestige": {
            tenure: "2024 (III)",
            meetingDay: "Wednesday",
            venue: "Hotel Astoria",
            time: "08:00 AM",
            date: "26th Feb 2026",
            leaders: [
                { sNo: 1, designation: "Regional Director", name: "MR.SYED MUNAF" },
                { sNo: 2, designation: "Chapter Trainer", name: "ER.RAMESH JEYARAMAN" },
                { sNo: 3, designation: "CEO", name: "ER.K.J.HARISH" },
                { sNo: 4, designation: "Secretary", name: "MR.M.MOHAMMED HAROON" },
                { sNo: 5, designation: "Membership Devp Chairman", name: "MR.S.RAJASEKAR" },
                { sNo: 6, designation: "Treasurer", name: "MR.R.GUNAVEL" },
                { sNo: 7, designation: "Chairman - Referrals", name: "MR.KARNASEKARAN" },
                { sNo: 8, designation: "Chairman - One to One", name: "MR.V.SUBBURAJ" },
                { sNo: 9, designation: "Chairman - Visitors", name: "MR.S.SUBBURAJ" },
                { sNo: 10, designation: "Chairman - Attendance", name: "MR.A.AMOSE" },
                { sNo: 11, designation: "Chairman - Events", name: "MR.S.DINESH JOEL" },
                { sNo: 12, designation: "Chairman - Business Resources", name: "MR.S.K.SUHAIL MOHAMED" },
                { sNo: 13, designation: "Chairman - Public Image", name: "MR.ANANDAKUMAR" }
            ]
        },
        "Dindigal Chapter": {
            tenure: "2024 (III)",
            meetingDay: "Tuesday",
            venue: "Parsons Court",
            time: "08:00 AM",
            date: "25th Feb 2026",
            leaders: [
                { sNo: 1, designation: "Regional Director", name: "VELLAISAMY DAMODHARAN" },
                { sNo: 2, designation: "Chapter Trainer", name: "A.ARUL GNANAPRAGASAM" },
                { sNo: 3, designation: "CEO", name: "S.SURESH" },
                { sNo: 4, designation: "Secretary", name: "S.NITHYA BHARATHI" },
                { sNo: 5, designation: "Membership Devp Chairman", name: "S.SHANAWAZ" },
                { sNo: 6, designation: "Treasurer", name: "A.SUHAIL AHMED" },
                { sNo: 7, designation: "Chairman - Referrals", name: "P.SARAN SELVAM" },
                { sNo: 8, designation: "Chairman - One to One", name: "I.SIDDHIQ" },
                { sNo: 9, designation: "Chairman - Visitors", name: "P.BALAMURUGAN" },
                { sNo: 10, designation: "Chairman - Attendance", name: "NIRANJANA PRASAD" },
                { sNo: 11, designation: "Chairman - Events", name: "A.LAKSHMI NARAYANAN" },
                { sNo: 12, designation: "Chairman - Business Resources", name: "AR.A.NOOR MOHAMED" },
                { sNo: 13, designation: "Chairman - Public Image", name: "S.A.SELVARAJ" }
            ]
        },
        "Sivakasi Chapter": {
            tenure: "2024 (III)",
            meetingDay: "Thursday",
            venue: "Hotel Bell",
            time: "08:00 AM",
            date: "27th Feb 2026",
            leaders: [
                { sNo: 1, designation: "Regional Director", name: "N.NARENDRAN KAMAK" },
                { sNo: 2, designation: "Chapter Trainer", name: "B.GIRIRAM KUMAR" },
                { sNo: 3, designation: "CEO", name: "R.KARTHIKEYAN" },
                { sNo: 4, designation: "Secretary", name: "B.DHANABALAN" },
                { sNo: 5, designation: "Membership Devp Chairman", name: "M.KUMAR" },
                { sNo: 6, designation: "Treasurer", name: "F.SAHAYARAJ" },
                { sNo: 7, designation: "Chairman - Referrals", name: "V.FRANCIS JEYABALAN" },
                { sNo: 8, designation: "Chairman - One to One", name: "R.AMARNATH" },
                { sNo: 9, designation: "Chairman - Visitors", name: "M.SYED ABUTHAHIR" },
                { sNo: 10, designation: "Chairman - Attendance", name: "S.KARTHIKEYAN" },
                { sNo: 11, designation: "Chairman - Events", name: "S.SUKUMAR" },
                { sNo: 12, designation: "Chairman - Business Resources", name: "M.SERVARAMUTHU" },
                { sNo: 13, designation: "Chairman - Public Image", name: "N.R.ADHARSH" }
            ]
        },
        "Coimbatore Chapter": {
            tenure: "2024 (III)",
            meetingDay: "Tuesday",
            venue: "Hotel Kiscol Grand",
            time: "08:00 AM",
            date: "25th Feb 2026",
            leaders: [
                { sNo: 1, designation: "Regional Director", name: "R.PRAKALATHAN" },
                { sNo: 2, designation: "Chapter Trainer", name: "R.AMIRTHA PRIYA" },
                { sNo: 3, designation: "CEO", name: "C.M.SHANMUGA SUNDARAM" },
                { sNo: 4, designation: "Secretary", name: "M.BAGAVATHI BABU" },
                { sNo: 5, designation: "Membership Devp Chairman", name: "G.SUVAGAR" },
                { sNo: 6, designation: "Treasurer", name: "K.POOPAUL" },
                { sNo: 7, designation: "Chairman - Referrals", name: "A.SATHISHKUMAR, TT RANJITHRAJ" },
                { sNo: 8, designation: "Chairman - One to One", name: "S.P.LAKKUMANAN" },
                { sNo: 9, designation: "Chairman - Visitors", name: "J SUDHA, M MARIMUTHU" },
                { sNo: 10, designation: "Chairman - Attendance", name: "T.SARAVANA KUMAR" },
                { sNo: 11, designation: "Chairman - Events", name: "K.MEYYANATHAN" },
                { sNo: 12, designation: "Chairman - Business Resources", name: "M.JEGADHEESWARAN, A.RAMKUMAR, N.KARUNAMOORTHY, MONESH MURUGESAN" },
                { sNo: 13, designation: "Chairman - Public Image", name: "C.MANIKANDAN" }
            ]
        },
        "Coimbatore Galaxy": {
            tenure: "2024 (III)",
            meetingDay: "Thursday",
            venue: "Hash Six Hotels",
            time: "08:00 AM",
            date: "27th Feb 2026",
            leaders: [
                { sNo: 1, designation: "Regional Director", name: "R.PRAKALATHAN" },
                { sNo: 2, designation: "Chapter Trainer", name: "MR.A.ASWIN BHARATH" },
                { sNo: 3, designation: "CEO", name: "MR.G.SANTHOSH KUMAR" },
                { sNo: 4, designation: "Secretary", name: "MR.T.MAYAVAN" },
                { sNo: 5, designation: "Membership Devp Chairman", name: "MR.K.KARTHICK" },
                { sNo: 6, designation: "Treasurer", name: "MR.R.NAGARAJA" },
                { sNo: 7, designation: "Chairman - Referrals", name: "MR.G.S.SANJEEVI" },
                { sNo: 8, designation: "Chairman - One to One", name: "MR.S.SENTHILKUMAR (ANNAI INTERIOR)" },
                { sNo: 9, designation: "Chairman - Visitors", name: "MRS.M.MALA" },
                { sNo: 10, designation: "Chairman - Attendance", name: "MR.MOHAMED THARIK" },
                { sNo: 11, designation: "Chairman - Events", name: "MR.S.CHANDRASEKARAN" },
                { sNo: 12, designation: "Chairman - Business Resources", name: "MR.K.SETTU, MR.SATHISH" },
                { sNo: 13, designation: "Chairman - Public Image", name: "MR.V.RAJKAMAL" }
            ]
        },
        "Coimbatore Capital": {
            tenure: "2024 (III)",
            meetingDay: "Wednesday",
            venue: "Hotel Rathna Residency",
            time: "08:00 AM",
            date: "26th Feb 2026",
            leaders: [
                { sNo: 1, designation: "Regional Director", name: "K.MOHAN KUMAR" },
                { sNo: 2, designation: "Chapter Trainer", name: "MRS.KAVITHA PALANISAMY" },
                { sNo: 3, designation: "CEO", name: "MR.M.VELMURUGAN" },
                { sNo: 4, designation: "Secretary", name: "MR.R.ARAVINDASAMY" },
                { sNo: 5, designation: "Membership Devp Chairman", name: "MRS.DEEPA MOHAN" },
                { sNo: 6, designation: "Treasurer", name: "MR.P.SATHISHKUMAR" },
                { sNo: 7, designation: "Chairman - Referrals", name: "MR.NARESH" },
                { sNo: 8, designation: "Chairman - One to One", name: "MR.NITHYANANDAM" },
                { sNo: 9, designation: "Chairman - Visitors", name: "MR.R.DHEEBHANRAJ" }
            ]
        },

    };

    const [selectedChapter, setSelectedChapter] = useState("Karaikudi Chapter");
    const [bannerImage, setBannerImage] = useState('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalData, setModalData] = useState({ chapter: '', ceo: '', region: '', rd: '' });
    const currentData = chaptersData[selectedChapter];

    const handleChapterChange = (e) => {
        setSelectedChapter(e.target.value);
        // Smooth scroll to roster after selection
        setTimeout(() => {
            const rosterSection = document.getElementById('leadership-roster');
            if (rosterSection) {
                rosterSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 100);
    };

    const handleVisualCardSelect = (chapterName, imageUrl, regionInfo) => {
        setSelectedChapter(chapterName);
        setBannerImage(imageUrl);
        setModalData({
            chapter: chapterName,
            ceo: regionInfo?.ceo || 'TBA',
            region: regionInfo?.region || 'Chennai Region',
            rd: regionInfo?.rd || 'TBA'
        });
        setIsModalOpen(true);
    };

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.animate-roster').forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, [selectedChapter]);

    return (
        <div className="Star-leaders-page">
            {/* 1. Hero Section */}
            <section className="leader-hero">
                <div className="container">
                    <h1 className="animate-roster">STAR Global Leadership</h1>
                    <p className="animate-roster" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
                        Empowering builders and leaders through professional networking and shared industry vision.
                    </p>
                </div>
            </section>

            {/* 2. Glass Filter & Stats Hub (Currently Hidden - Available for Future Use)
            <section className="filter-hub-section">
                <div className="container">
                    <div className="filter-glass-card animate-roster">
                        <span className="filter-title">Chapter Navigator</span>
                        <div className="premium-select-wrapper">
                            <select
                                value={selectedChapter}
                                onChange={handleChapterChange}
                            >
                                {Object.keys(chaptersData).map(chapter => (
                                    <option key={chapter} value={chapter}>{chapter}</option>
                                ))}
                            </select>
                        </div>

                        <div className="stats-summary-strip">
                            <div className="stat-bubble">
                                <i className="fas fa-building"></i>
                                <div>
                                    <span>Chapter Name</span>
                                    <strong>{selectedChapter}</strong>
                                </div>
                            </div>
                            <div className="stat-bubble">
                                <i className="fas fa-calendar-alt"></i>
                                <div>
                                    <span>Meeting Day</span>
                                    <strong>{currentData?.meetingDay || 'TBA'}</strong>
                                </div>
                            </div>
                            <div className="stat-bubble">
                                <i className="fas fa-map-marker-alt"></i>
                                <div>
                                    <span>Venue</span>
                                    <strong>{currentData?.venue || 'TBA'}</strong>
                                </div>
                            </div>
                            <div className="stat-bubble">
                                <i className="fas fa-history"></i>
                                <div>
                                    <span>Tenure</span>
                                    <strong>{currentData?.tenure || '2024 (III)'}</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            */}

            {/* 3. Leadership Roster (Currently Hidden - Available for Future Use)
            <section className="roster-section" id="leadership-roster">
                <div className="container">
                    <div className="grid-header animate-roster" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '2.5rem', color: '#101828' }}>Leadership Roster</h2>
                        <p style={{ color: '#64748b', fontSize: '1.1rem' }}>Executive board members contributing to {selectedChapter} success.</p>
                    </div>

                    <div className="roster-grid">
                        {currentData?.leaders ? currentData.leaders.map((leader, index) => (
                            <div
                                key={`${selectedChapter}-${index}`}
                                className="roster-item animate-roster"
                                style={{ transitionDelay: `${index * 0.05}s` }}
                            >
                                <div className="roster-role-badge">{leader.designation}</div>
                                <div className="roster-name">
                                    {leader.name.split(',').map((name, i) => (
                                        <div key={i} style={{ lineHeight: '1.4' }}>{name.trim()}</div>
                                    ))}
                                </div>
                            </div>
                        )) : (
                            <div style={{ textAlign: 'center', padding: '4rem', background: '#fff', borderRadius: '30px', border: '1px dashed #cbd5e1' }}>
                                <i className="fas fa-users-slash" style={{ fontSize: '3rem', color: '#e2e8f0', marginBottom: '1rem' }}></i>
                                <h3 style={{ color: '#64748b' }}>Update Pending for {selectedChapter}</h3>
                                <p style={{ color: '#94a3b8' }}>We are currently populating the leader data for this tenure.</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
            */}

            {/* Visual Leadership Board */}
            <section className="visual-board-section">
                <div className="container">
                    {/* Executive Leaders */}
                    <div className="role-divider animate-roster">
                        <span>Executive Directors</span>
                    </div>

                    <div className="visual-grid-v2 animate-roster">
                        <div className="leader-card-v2">
                            <div className="v-profile-img">
                                <img src="/leader_arul_circular.png" alt="Mr. K.K.V. Arul" />
                            </div>
                            <h3 className="v-name">Mr. K.K.V. Arul</h3>
                            <p className="v-role">Executive Director</p>
                            <p className="v-zone">PONDICHERRY REGION</p>
                        </div>
                        <div className="leader-card-v2">
                            <div className="v-profile-img">
                                <i className="fas fa-user-tie" style={{ fontSize: '2.5rem' }}></i>
                            </div>
                            <h3 className="v-name">Mr. N.S. Amirtha Raj</h3>
                            <p className="v-role">Executive Director</p>
                            <p className="v-zone">TAMIL NADU REGION</p>
                        </div>
                        <div className="leader-card-v2">
                            <div className="v-profile-img">
                                <i className="fas fa-user-tie" style={{ fontSize: '2.5rem' }}></i>
                            </div>
                            <h3 className="v-name">Mr. O.K. Muthukrishnan</h3>
                            <p className="v-role">Executive Director</p>
                            <p className="v-zone">CHENNAI REGION</p>
                        </div>
                        <div className="leader-card-v2">
                            <div className="v-profile-img">
                                <i className="fas fa-chalkboard-teacher" style={{ fontSize: '2.5rem' }}></i>
                            </div>
                            <h3 className="v-name">Dr. Soma Valliappan</h3>
                            <p className="v-role">Training Director</p>
                            <p className="v-zone">GLOBAL</p>
                        </div>
                        <div className="leader-card-v2">
                            <div className="v-profile-img">
                                <i className="fas fa-mobile-alt" style={{ fontSize: '2.5rem' }}></i>
                            </div>
                            <h3 className="v-name">Mr. V.K. Amardeep</h3>
                            <p className="v-role">App Director</p>
                            <p className="v-zone">GLOBAL</p>
                        </div>
                        <div className="leader-card-v2">
                            <div className="v-profile-img">
                                <i className="fas fa-user-tie" style={{ fontSize: '2.5rem' }}></i>
                            </div>
                            <h3 className="v-name">Add Name Here</h3>
                            <p className="v-role">Executive Director</p>
                            <p className="v-zone">Zone TBA</p>
                        </div>
                        <div className="leader-card-v2">
                            <div className="v-profile-img">
                                <i className="fas fa-user-tie" style={{ fontSize: '2.5rem' }}></i>
                            </div>
                            <h3 className="v-name">Add Name Here</h3>
                            <p className="v-role">Executive Director</p>
                            <p className="v-zone">Zone TBA</p>
                        </div>
                        <div className="leader-card-v2">
                            <div className="v-profile-img">
                                <i className="fas fa-user-tie" style={{ fontSize: '2.5rem' }}></i>
                            </div>
                            <h3 className="v-name">Add Name Here</h3>
                            <p className="v-role">Executive Director</p>
                            <p className="v-zone">Zone TBA</p>
                        </div>
                        <div className="leader-card-v2">
                            <div className="v-profile-img">
                                <i className="fas fa-user-tie" style={{ fontSize: '2.5rem' }}></i>
                            </div>
                            <h3 className="v-name">Add Name Here</h3>
                            <p className="v-role">Executive Director</p>
                            <p className="v-zone">Zone TBA</p>
                        </div>
                        <div className="leader-card-v2">
                            <div className="v-profile-img">
                                <i className="fas fa-user-tie" style={{ fontSize: '2.5rem' }}></i>
                            </div>
                            <h3 className="v-name">Add Name Here</h3>
                            <p className="v-role">Executive Director</p>
                            <p className="v-zone">Zone TBA</p>
                        </div>
                    </div>

                    {/* Regional Directors */}
                    <div className="role-divider animate-roster">
                        <span>Regional Directors</span>
                    </div>

                    <div className="visual-grid-v2 animate-roster">
                        <div className="leader-card-v2">
                            <div className="v-profile-img">
                                <i className="fas fa-user-shield" style={{ fontSize: '2.5rem' }}></i>
                            </div>
                            <h3 className="v-name">Mr. S. Siddharth Gandhi</h3>
                            <p className="v-role">Regional Director</p>
                            <p className="v-zone">CHENNAI REGION</p>
                        </div>
                        <div className="leader-card-v2">
                            <div className="v-profile-img">
                                <i className="fas fa-user-shield" style={{ fontSize: '2.5rem' }}></i>
                            </div>
                            <h3 className="v-name">Mr. D. Vinoth</h3>
                            <p className="v-role">Regional Director</p>
                            <p className="v-zone">CHENNAI REGION</p>
                        </div>
                        <div className="leader-card-v2">
                            <div className="v-profile-img">
                                <i className="fas fa-user-shield" style={{ fontSize: '2.5rem' }}></i>
                            </div>
                            <h3 className="v-name">Mr. S. Thamin Ansari</h3>
                            <p className="v-role">Regional Director</p>
                            <p className="v-zone">CHENNAI REGION</p>
                        </div>
                        <div className="leader-card-v2">
                            <div className="v-profile-img">
                                <i className="fas fa-user-shield" style={{ fontSize: '2.5rem' }}></i>
                            </div>
                            <h3 className="v-name">Mr. Vijayakumar C</h3>
                            <p className="v-role">Regional Director</p>
                            <p className="v-zone">TRICHY REGION</p>
                        </div>
                        <div className="leader-card-v2">
                            <div className="v-profile-img">
                                <i className="fas fa-user-shield" style={{ fontSize: '2.5rem' }}></i>
                            </div>
                            <h3 className="v-name">Mr. P. Chandrasekar</h3>
                            <p className="v-role">Regional Director</p>
                            <p className="v-zone">TRICHY REGION</p>
                        </div>
                        <div className="leader-card-v2">
                            <div className="v-profile-img">
                                <i className="fas fa-user-shield" style={{ fontSize: '2.5rem' }}></i>
                            </div>
                            <h3 className="v-name">Er. S. Syed Munaaf</h3>
                            <p className="v-role">Regional Director</p>
                            <p className="v-zone">MADURAI REGION</p>
                        </div>
                        <div className="leader-card-v2">
                            <div className="v-profile-img">
                                <i className="fas fa-user-shield" style={{ fontSize: '2.5rem' }}></i>
                            </div>
                            <h3 className="v-name">S. K. Gobidoss</h3>
                            <p className="v-role">Regional Director</p>
                            <p className="v-zone">MADURAI REGION</p>
                        </div>
                        <div className="leader-card-v2">
                            <div className="v-profile-img">
                                <i className="fas fa-user-shield" style={{ fontSize: '2.5rem' }}></i>
                            </div>
                            <h3 className="v-name">Mr. P. Pugalenthi</h3>
                            <p className="v-role">Regional Director</p>
                            <p className="v-zone">THANJAVUR REGION</p>
                        </div>
                        <div className="leader-card-v2">
                            <div className="v-profile-img">
                                <i className="fas fa-user-shield" style={{ fontSize: '2.5rem' }}></i>
                            </div>
                            <h3 className="v-name">Vellaisamy Damodharan</h3>
                            <p className="v-role">Regional Director</p>
                            <p className="v-zone">DINDIGUL REGION</p>
                        </div>
                        <div className="leader-card-v2">
                            <div className="v-profile-img">
                                <i className="fas fa-user-shield" style={{ fontSize: '2.5rem' }}></i>
                            </div>
                            <h3 className="v-name">R. Prakalathan</h3>
                            <p className="v-role">Regional Director</p>
                            <p className="v-zone">COIMBATORE REGION</p>
                        </div>
                    </div>





                    {/* Trainer Section */}
                    <div className="role-divider animate-roster">
                        <span>Trainer</span>
                    </div>

                    <div className="visual-grid-v2 animate-roster">
                        <div className="leader-card-v2">
                            <div className="v-profile-img">
                                <i className="fas fa-chalkboard-teacher" style={{ fontSize: '2.5rem' }}></i>
                            </div>
                            <h3 className="v-name">V Muthu</h3>
                            <p className="v-role">Chapter Trainer</p>
                        </div>
                        <div className="leader-card-v2">
                            <div className="v-profile-img">
                                <i className="fas fa-chalkboard-teacher" style={{ fontSize: '2.5rem' }}></i>
                            </div>
                            <h3 className="v-name">Mr. S. Chandru</h3>
                            <p className="v-role">Chapter Trainer</p>
                        </div>
                        <div className="leader-card-v2">
                            <div className="v-profile-img">
                                <i className="fas fa-chalkboard-teacher" style={{ fontSize: '2.5rem' }}></i>
                            </div>
                            <h3 className="v-name">Mr. V. Ashok</h3>
                            <p className="v-role">Chapter Trainer</p>
                        </div>
                        <div className="leader-card-v2">
                            <div className="v-profile-img">
                                <i className="fas fa-chalkboard-teacher" style={{ fontSize: '2.5rem' }}></i>
                            </div>
                            <h3 className="v-name">Mr. Kesavarajan.R</h3>
                            <p className="v-role">Chapter Trainer</p>
                        </div>
                        <div className="leader-card-v2">
                            <div className="v-profile-img">
                                <i className="fas fa-chalkboard-teacher" style={{ fontSize: '2.5rem' }}></i>
                            </div>
                            <h3 className="v-name">Mr. Vinoth</h3>
                            <p className="v-role">Chapter Trainer</p>
                        </div>
                        <div className="leader-card-v2">
                            <div className="v-profile-img">
                                <i className="fas fa-chalkboard-teacher" style={{ fontSize: '2.5rem' }}></i>
                            </div>
                            <h3 className="v-name">Mr. G. Kumaravel</h3>
                            <p className="v-role">Chapter Trainer</p>
                        </div>
                        <div className="leader-card-v2">
                            <div className="v-profile-img">
                                <i className="fas fa-chalkboard-teacher" style={{ fontSize: '2.5rem' }}></i>
                            </div>
                            <h3 className="v-name">Mr. V Jeevaraj</h3>
                            <p className="v-role">Chapter Trainer</p>
                        </div>
                        <div className="leader-card-v2">
                            <div className="v-profile-img">
                                <i className="fas fa-chalkboard-teacher" style={{ fontSize: '2.5rem' }}></i>
                            </div>
                            <h3 className="v-name">Mr. K. Kirubakaran</h3>
                            <p className="v-role">Chapter Trainer</p>
                        </div>
                        <div className="leader-card-v2">
                            <div className="v-profile-img">
                                <i className="fas fa-chalkboard-teacher" style={{ fontSize: '2.5rem' }}></i>
                            </div>
                            <h3 className="v-name">Mr. Sukumar K</h3>
                            <p className="v-role">Chapter Trainer</p>
                        </div>
                        <div className="leader-card-v2">
                            <div className="v-profile-img">
                                <i className="fas fa-chalkboard-teacher" style={{ fontSize: '2.5rem' }}></i>
                            </div>
                            <h3 className="v-name">Mr. N. Deepak</h3>
                            <p className="v-role">Chapter Trainer</p>
                        </div>
                    </div>
                </div>
            </section>



            {/* Premium Chapter Info Modal */}
            {isModalOpen && (
                <div className="leader-modal-overlay" onClick={() => setIsModalOpen(false)}>
                    <div className="leader-modal-content" style={{ maxWidth: '800px' }} onClick={e => e.stopPropagation()}>
                        <button className="modal-close-btn" onClick={() => setIsModalOpen(false)}>
                            <i className="fas fa-times"></i>
                        </button>

                        <div className="modal-header">
                            <h3>Chapter Highlights</h3>
                            <p>{modalData.chapter} Leadership Overview</p>
                        </div>

                        <div className="leader-table-wrapper">
                            <table className="leader-premium-table">
                                <thead>
                                    <tr>
                                        <th>Position</th>
                                        <th>Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>CEO</td>
                                        <td style={{ fontWeight: '700', color: 'var(--leader-secondary)' }}>{modalData.ceo}</td>
                                    </tr>
                                    <tr>
                                        <td>Region</td>
                                        <td>{modalData.region}</td>
                                    </tr>
                                    <tr>
                                        <td>RD Name</td>
                                        <td>{modalData.rd}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}
        </div>



    );
};

export default StarLeaders;
