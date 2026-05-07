// ======================== ALL DATA (6 KALMAS, NAMAZ, JANAZA, GHUSL, 18 DUAS) ========================

// 6 Kalmas
const kalmasData = [
  { id: 1, name_en: "First Kalma (Tayyab)", name_ur: "پہلا کلمہ طیب", arabic: "لَا إِلٰهَ إِلَّا اللّٰهُ مُحَمَّدٌ رَسُولُ اللّٰهِ", translation_en: "There is none worthy of worship except Allah, Muhammad is the Messenger of Allah.", translation_ur: "اللہ کے سوا کوئی معبود برحق نہیں، محمد ﷺ اللہ کے رسول ہیں۔" },
  { id: 2, name_en: "Second Kalma (Shahadat)", name_ur: "دوسرا کلمہ شہادت", arabic: "أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللّٰهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ", translation_en: "I bear witness that there is no God but Allah, and Muhammad is His servant and Messenger.", translation_ur: "میں گواہی دیتا ہوں کہ اللہ کے سوا کوئی معبود نہیں، اور محمد ﷺ اس کے بندے اور رسول ہیں۔" },
  { id: 3, name_en: "Third Kalma (Tamjeed)", name_ur: "تیسرا کلمہ تمجید", arabic: "سُبْحَانَ اللّٰهِ وَالْحَمْدُ لِلّٰهِ وَلَا إِلٰهَ إِلَّا اللّٰهُ وَاللّٰهُ أَكْبَرُ", translation_en: "Glory be to Allah, all praise is for Allah, none is worthy of worship except Allah, and Allah is the Greatest.", translation_ur: "اللہ پاک ہے، سب تعریف اللہ کے لیے، اللہ کے سوا کوئی معبود نہیں، اللہ سب سے بڑا ہے۔" },
  { id: 4, name_en: "Fourth Kalma (Tauheed)", name_ur: "چوتھا کلمہ توحید", arabic: "لَا إِلٰهَ إِلَّا اللّٰهُ وَحْدَهُ لَا شَرِيكَ لَهُ لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ يُحْيِي وَيُمِيتُ وَهُوَ حَيٌّ لَا يَمُوتُ", translation_en: "There is no God but Allah, He is One, no partner, His is the sovereignty, and His is the praise, He gives life and causes death, and He is Ever-Living.", translation_ur: "اللہ کے سوا کوئی معبود نہیں، وہ اکیلا ہے، کوئی شریک نہیں، اسی کی بادشاہت اور تعریف، وہی زندہ کرتا اور مارتا ہے، اور وہ زندہ ہے کبھی نہیں مرتا۔" },
  { id: 5, name_en: "Fifth Kalma (Astaghfar)", name_ur: "پانچواں کلمہ استغفار", arabic: "أَسْتَغْفِرُ اللّٰهَ رَبِّي مِنْ كُلِّ ذَنْبٍ وَأَتُوبُ إِلَيْهِ", translation_en: "I seek forgiveness from Allah, my Lord, for every sin and I turn to Him.", translation_ur: "میں اپنے رب اللہ سے ہر گناہ کی مغفرت طلب کرتا ہوں اور اس کی طرف توبہ کرتا ہوں۔" },
  { id: 6, name_en: "Sixth Kalma (Radd-e-Kufr)", name_ur: "چھٹا کلمہ ردِّ کفر", arabic: "اللّٰهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ أَنْ أُشْرِكَ بِكَ شَيْئًا وَأَنَا أَعْلَمُ بِهِ وَأَسْتَغْفِرُكَ لِمَا لَا أَعْلَمُ", translation_en: "O Allah! I seek refuge in You from associating anything with You knowingly, and seek Your forgiveness for what I do not know.", translation_ur: "اے اللہ! میں تیری پناہ مانگتا ہوں جان بوجھ کر شرک سے، اور جو میں نہیں جانتا اس کی مغفرت چاہتا ہوں۔" }
];

// Namaz Data (15 steps with full Arabic tashkeel)
const namazData = [
  { step: 1, title_ur: "نیت", title_en: "Niyyah (Intention)", arabic: "نَوَيْتُ أَنْ أُصَلِّيَ لِلَّهِ تَعَالَىٰ أَرْبَعَ رَكَعَاتٍ صَلَاةَ ... (يُسَمِّي الصَّلَاةَ) مُتَوَجِّهًا إِلَىٰ الْكَعْبَةِ الشَّرِيفَةِ، أَدَاءً لِلَّهِ تَعَالَىٰ.", ur: "میں نے اللہ تعالیٰ کے لیے (مثلاً فجر کی دو رکعت) نماز پڑھنے کی نیت کی، منہ کعبہ شریف کی طرف، خالص اللہ کے لیے۔", en: "I intend to pray (e.g., two rak‘ahs of Fajr) for Allah Almighty, facing the Holy Ka‘bah, sincerely for Allah’s sake." },
  { step: 2, title_ur: "تکبیر تحریمہ", title_en: "Takbir Tahrimah", arabic: "اللَّهُ أَكْبَرُ", ur: "اللہ سب سے بڑا ہے۔", en: "Allah is the Greatest." },
  { step: 3, title_ur: "ثنا", title_en: "Thana (Sana)", arabic: "سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، وَتَبَارَكَ اسْمُكَ، وَتَعَالَىٰ جَدُّكَ، وَلَا إِلٰهَ غَيْرُكَ.", ur: "اے اللہ! تیری ذات پاک ہے اور تیری حمد کے ساتھ، تیرا نام بابرکت ہے، تیری شان بلند ہے، تیرے سوا کوئی عبادت کے لائق نہیں۔", en: "Glory be to You, O Allah, and with Your praise; blessed is Your Name, exalted is Your Majesty, and there is no god but You." },
  { step: 4, title_ur: "تعوذ و تسمیہ", title_en: "Ta‘awwudh & Tasmiyah", arabic: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ. بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ.", ur: "میں شیطان مردود سے اللہ کی پناہ مانگتا ہوں۔ اللہ کے نام سے شروع جو بے انتہا رحم کرنے والا، بہت مہربان ہے۔", en: "I seek refuge with Allah from the accursed Satan. In the name of Allah, the Most Gracious, the Most Merciful." },
  { step: 5, title_ur: "سورہ فاتحہ", title_en: "Surah Al-Fatihah", arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ، الرَّحْمَٰنِ الرَّحِيمِ، مَالِكِ يَوْمِ الدِّينِ، إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ، اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ، صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ.", ur: "تمام تعریفیں اللہ کے لیے ہیں جو تمام جہانوں کا پالنے والا ہے، بے انتہا رحم کرنے والا، بہت مہربان، روزِ جزا کا مالک۔ ہم صرف تیری ہی عبادت کرتے ہیں اور صرف تجھ سے مدد مانگتے ہیں۔ ہمیں سیدھا راستہ دکھا، ان لوگوں کا راستہ جن پر تو نے انعام کیا، نہ ان کا جن پر غضب ہوا اور نہ گمراہوں کا۔", en: "All praise is due to Allah, Lord of the worlds, the Most Gracious, the Most Merciful, Master of the Day of Judgment. You alone we worship, and You alone we ask for help. Guide us to the straight path – the path of those upon whom You have bestowed favor, not of those who have evoked [Your] anger or of those who are astray." },
  { step: 6, title_ur: "سورہ اخلاص (یا کوئی چھوٹی سورت)", title_en: "A short Surah (e.g., Al-Ikhlas)", arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ، اللَّهُ الصَّمَدُ، لَمْ يَلِدْ وَلَمْ يُولَدْ، وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ.", ur: "کہہ دو کہ وہ اللہ ایک ہے، اللہ بے نیاز ہے، نہ اس کی اولاد ہے اور نہ وہ کسی کی اولاد، اور کوئی اس کا ہم سر نہیں۔", en: "Say: He is Allah, the One. Allah, the Eternal, Absolute. He begets not, nor was He begotten. And there is none comparable to Him." },
  { step: 7, title_ur: "رکوع", title_en: "Ruku (Bowing)", arabic: "سُبْحَانَ رَبِّيَ الْعَظِيمِ (تین مرتبہ)", ur: "اپنے عظیم رب کی پاکی بیان کرتا ہوں۔", en: "Glory be to my Lord, the Almighty." },
  { step: 8, title_ur: "قومہ (رکوع سے اٹھنا)", title_en: "Qawmah (Rising from Ruku)", arabic: "سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ، رَبَّنَا لَكَ الْحَمْدُ.", ur: "اللہ نے اس کی سن لی جس نے اس کی تعریف کی، اے ہمارے رب! تیرے لیے تمام تعریفیں ہیں۔", en: "Allah hears those who praise Him. Our Lord, to You belongs all praise." },
  { step: 9, title_ur: "پہلا سجدہ", title_en: "First Sujud", arabic: "سُبْحَانَ رَبِّيَ الْأَعْلَىٰ (تین مرتبہ)", ur: "اپنے بلند ترین رب کی پاکی بیان کرتا ہوں۔", en: "Glory be to my Lord, the Most High." },
  { step: 10, title_ur: "جلسہ (سجدوں کے درمیان بیٹھنا)", title_en: "Jalsah (Sitting between prostrations)", arabic: "رَبِّ اغْفِرْ لِي، رَبِّ اغْفِرْ لِي.", ur: "اے میرے رب! مجھے بخش دے، اے میرے رب! مجھے بخش دے۔", en: "My Lord, forgive me. My Lord, forgive me." },
  { step: 11, title_ur: "دوسرا سجدہ", title_en: "Second Sujud", arabic: "سُبْحَانَ رَبِّيَ الْأَعْلَىٰ (تین مرتبہ)", ur: "اپنے بلند ترین رب کی پاکی بیان کرتا ہوں۔", en: "Glory be to my Lord, the Most High." },
  { step: 12, title_ur: "تشہد (قعدہ اولیٰ / آخرہ)", title_en: "Tashahhud", arabic: "التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ، السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ، السَّلَامُ عَلَيْنَا وَعَلَىٰ عِبَادِ اللَّهِ الصَّالِحِينَ، أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ.", ur: "تمام قولی، بدنی اور مالی عبادتیں اللہ کے لیے ہیں۔ اے نبی! آپ پر سلام ہو اور اللہ کی رحمت اور برکتیں، ہم پر اور اللہ کے نیک بندوں پر سلام ہو۔ میں گواہی دیتا ہوں کہ اللہ کے سوا کوئی معبود نہیں اور میں گواہی دیتا ہوں کہ محمد ﷺ اس کے بندے اور رسول ہیں۔", en: "All greetings, prayers, and good deeds are for Allah. Peace be upon you, O Prophet, and the mercy of Allah and His blessings. Peace be upon us and upon the righteous servants of Allah. I bear witness that there is no god but Allah, and I bear witness that Muhammad is His servant and Messenger." },
  { step: 13, title_ur: "درود ابراہیمی", title_en: "Durood Ibrahim", arabic: "اللَّهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَىٰ إِبْرَاهِيمَ وَعَلَىٰ آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ. اللَّهُمَّ بَارِكْ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَىٰ إِبْرَاهِيمَ وَعَلَىٰ آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ.", ur: "اے اللہ! محمد ﷺ پر اور آلِ محمد ﷺ پر رحمت نازل فرما جیسا تو نے ابراہیم اور آلِ ابراہیم پر رحمت نازل فرمائی، بے شک تو قابلِ تعریف اور بزرگی والا ہے۔ اے اللہ! محمد ﷺ اور آلِ محمد ﷺ کو برکت عطا فرما جیسا تو نے ابراہیم اور آلِ ابراہیم کو برکت عطا فرمائی، بے شک تو قابلِ تعریف اور بزرگی والا ہے۔", en: "O Allah, send blessings upon Muhammad and upon the family of Muhammad as You sent blessings upon Ibrahim and the family of Ibrahim; indeed You are Praiseworthy and Glorious. O Allah, bless Muhammad and the family of Muhammad as You blessed Ibrahim and the family of Ibrahim; indeed You are Praiseworthy and Glorious." },
  { step: 14, title_ur: "دعائے ماثورہ", title_en: "Dua-e-Masurah", arabic: "اللَّهُمَّ إِنِّي ظَلَمْتُ نَفْسِي ظُلْمًا كَثِيرًا، وَلَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ، فَاغْفِرْ لِي مَغْفِرَةً مِنْ عِنْدِكَ وَارْحَمْنِي، إِنَّكَ أَنْتَ الْغَفُورُ الرَّحِيمُ.", ur: "اے اللہ! میں نے اپنی جان پر بہت ظلم کیا ہے، اور گناہوں کو تیرے سوا کوئی معاف نہیں کرتا، پس مجھے اپنی خاص مغفرت عطا فرما اور مجھ پر رحم فرما، بے شک تو بہت بخشنے والا، بہت رحم کرنے والا ہے۔", en: "O Allah, I have greatly wronged myself, and none forgives sins but You. So grant me forgiveness from You and have mercy on me. Indeed, You are the Oft-Forgiving, the Most Merciful." },
  { step: 15, title_ur: "سلام", title_en: "Salam", arabic: "السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ (دائیں طرف)  السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ (بائیں طرف)", ur: "آپ پر سلام ہو اور اللہ کی رحمت (دائیں طرف)، آپ پر سلام ہو اور اللہ کی رحمت (بائیں طرف)۔", en: "Peace be upon you and the mercy of Allah (to the right). Peace be upon you and the mercy of Allah (to the left)." }
];

// Janaza Duas for Adult, Minor Boy, Minor Girl
const janazaData = {
  adult: { arabic: "اللَّهُمَّ اغْفِرْ لِحَيِّنَا وَمَيِّتِنَا وَشَاهِدِنَا وَغَائِبِنَا وَصَغِيرِنَا وَكَبِيرِنَا وَذَكَرِنَا وَأُنْثَانَا. اللَّهُمَّ مَنْ أَحْيَيْتَهُ مِنَّا فَأَحْيِهِ عَلَى الْإِسْلَامِ، وَمَنْ تَوَفَّيْتَهُ مِنَّا فَتَوَفَّهُ عَلَى الْإِيمَانِ. اللَّهُمَّ لَا تَحْرِمْنَا أَجْرَهُ وَلَا تُضِلَّنَا بَعْدَهُ.", ur: "اے اللہ! ہمارے زندوں اور مردوں، حاضر اور غائب، چھوٹے اور بڑے، مرد اور عورت کو بخش دے۔ اے اللہ! ہم میں سے جسے تو زندہ رکھے اسے اسلام پر زندہ رکھ، اور جسے تو موت دے اسے ایمان پر موت دے۔ اے اللہ! ہمیں اس (میت) کے ثواب سے محروم نہ کر اور اس کے بعد ہمیں گمراہ نہ کر۔", en: "O Allah, forgive our living and our dead, those present and those absent, our young and our old, our males and our females. O Allah, whoever among us You keep alive, let him live upon Islam, and whoever You cause to die, let him die upon faith. O Allah, do not deprive us of his reward and do not lead us astray after him." },
  minorBoy: { arabic: "اللَّهُمَّ اجْعَلْهُ لَنَا فَرَطًا، وَاجْعَلْهُ لَنَا أَجْرًا وَذُخْرًا، وَاجْعَلْهُ لَنَا شَافِعًا وَمُشَفَّعًا.", ur: "اے اللہ! اس (نابالغ لڑکے) کو ہمارے لیے (جنت میں) پیش رو بنا، اسے ہمارے لیے اجر اور ذخیرہ بنا، اور اسے ہمارا شفیع اور قبول الشفاعت بنا۔", en: "O Allah, make him a precursor (for us in Paradise), make him a reward and a treasure for us, and make him an intercessor whose intercession is accepted." },
  minorGirl: { arabic: "اللَّهُمَّ اجْعَلْهَا لَنَا فَرَطًا، وَاجْعَلْهَا لَنَا أَجْرًا وَذُخْرًا، وَاجْعَلْهَا لَنَا شَافِعَةً وَمُشَفَّعَةً.", ur: "اے اللہ! اس (نابالغ لڑکی) کو ہمارے لیے پیش رو بنا، اسے ہمارے لیے اجر اور ذخیرہ بنا، اور اسے ہماری شفیع اور قبول الشفاعت بنا۔", en: "O Allah, make her a precursor, make her a reward and a treasure for us, and make her an intercessor whose intercession is accepted." }
};

// Ghusl-e-Mayt (word-by-word from screenshots)
const ghuslSteps = [
  { step: 1, urdu: "سب سے پہلے پانی میں بیری کے پتے ڈال کر گرم کر لیں۔ پھر اس میں اتنا (سِدْر) پانی ملائیں کہ ہاتھ نہ جلے۔", en: "First, heat water with jujube (berry) leaves. Then add enough Sidr powder so that it does not burn the hands." },
  { step: 2, urdu: "میت کی شرمگاہ کو سادہ پانی سے دھوئیں۔", en: "Wash the deceased's private parts with plain water." },
  { step: 3, urdu: "ایک برتن میں آگ جلا کر لوبان یا کوئی اور خوشبو سلگاتے رہیں۔", en: "Keep burning incense (Loban) or any fragrance in a vessel." },
  { step: 4, urdu: "میت کے جسم پر جو کپڑے ہوں انہیں اتار دیں، اور ساتھ چھپاتے رہیں (پردہ رکھیں)۔", en: "Remove the deceased's clothes while keeping the body covered." },
  { step: 5, urdu: "پھر غسل دینے والا اپنے ہاتھ پر کپڑا لپیٹ کر یا دستانہ پہن کر میت کو استنجاء کرائے، اور پیش کو سیدھے ہاتھ سے اوپر سے نیچے کی طرف ملے۔", en: "The washer wraps a cloth on hand or wears gloves, cleans the deceased, and wipes the front from top to bottom." },
  { step: 6, urdu: "پھر غسل دینے والا میت کا وضو کرائے، البتہ میت کے وضو میں کلی کرنا اور ناک میں پانی ڈالنا نہیں ہے، بلکہ ہاتھ روغنی کے پھیر کر ہی کفایت کرے۔", en: "Then perform wudu for the deceased: wash hands, face, arms, wipe head, wash feet; no rinsing mouth or nose." },
  { step: 7, urdu: "عورت کے سر کے بالوں کو اور مرد کے سر اور داڑھی کے بالوں کو بیری یا صابن سے دھوئیں (جو پاک اجزاء سے بنا ہو)۔", en: "Wash the hair of the woman and the head & beard of the man using Sidr or pure soap." },
  { step: 8, urdu: "پھر بائیں کروٹ کر کے سر سے پاؤں تک پانی بہائیں۔", en: "Then turn the body to the left side and pour water from head to feet." },
  { step: 9, urdu: "اسی طرح دائیں کروٹ کر کے سر سے پاؤں تک پانی بہائیں۔", en: "Similarly turn to the right side and pour water from head to feet." },
  { step: 10, urdu: "پھر آخر میں سر سے پاؤں تک پانی بہا کر بدن کو کسی کپڑے سے آہستہ سے پونچھ دیں۔", en: "Finally pour water from head to feet and gently dry the body with a cloth." },
  { step: 11, urdu: "پیشانی، ناک، دونوں ہاتھ، گھٹنوں اور پیروں کے نشانات (سجدے کے اعضاء) پر کافور لگائیں۔", en: "Apply camphor on the forehead, nose, hands, knees, and toes (places of prostration)." },
  { step: 12, urdu: "غسل دیتے وقت پردہ کر لیں تاکہ کوئی نامحرم آدمی نہ دیکھ پائے۔", en: "Maintain complete privacy during ghusl." }
];

// 18 Expanded Masnoon Duas (with references)
const extraDuas = [
  { title_ur: "نیند سے بیدار ہونے کی دعا", title_en: "Dua upon waking up", arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ.", ur: "تمام تعریفیں اللہ کے لیے ہیں جس نے ہمیں مارنے کے بعد زندہ کیا اور اسی کی طرف (دوبارہ) اٹھنا ہے۔", en: "All praise is for Allah who gave us life after having taken it from us, and to Him is the resurrection.", reference: "Bukhari" },
  { title_ur: "سوتے وقت کی دعا", title_en: "Dua before sleeping", arabic: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا.", ur: "اے اللہ! تیرے نام کے ساتھ میں مرتا اور جیتا ہوں۔", en: "In Your name, O Allah, I die and I live.", reference: "Bukhari" },
  { title_ur: "گھر سے نکلنے کی دعا", title_en: "Dua when leaving home", arabic: "بِسْمِ اللَّهِ، تَوَكَّلْتُ عَلَى اللَّهِ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ.", ur: "اللہ کے نام سے، میں نے اللہ پر بھروسہ کیا، اور اللہ کے سوا کوئی طاقت اور قوت نہیں۔", en: "In the name of Allah, I place my trust in Allah, and there is no might nor power except with Allah.", reference: "Abu Dawud" },
  { title_ur: "گھر میں داخل ہونے کی دعا", title_en: "Dua when entering home", arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ الْمَوْلِجِ وَخَيْرَ الْمَخْرَجِ، بِسْمِ اللَّهِ وَلَجْنَا وَبِسْمِ اللَّهِ خَرَجْنَا وَعَلَى اللَّهِ رَبِّنَا تَوَكَّلْنَا.", ur: "اے اللہ! میں تجھ سے داخلے اور نکلنے کی بھلائی مانگتا ہوں۔ اللہ کے نام کے ساتھ ہم داخل ہوئے اور اللہ کے نام کے ساتھ نکلے، اور اپنے رب اللہ پر بھروسہ کیا۔", en: "O Allah, I ask You for the best of entry and the best of exit. In Allah's name we enter and in Allah's name we leave, and upon Allah our Lord we rely.", reference: "Abu Dawud" },
  { title_ur: "بیت الخلا میں داخل ہونے سے پہلے", title_en: "Dua before entering toilet", arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ.", ur: "اے اللہ! میں مرد اور عورت شیطانوں سے تیری پناہ مانگتا ہوں۔", en: "O Allah, I seek refuge in You from male and female devils.", reference: "Bukhari" },
  { title_ur: "بیت الخلا سے نکلنے کے بعد", title_en: "Dua after leaving toilet", arabic: "غُفْرَانَكَ، الْحَمْدُ لِلَّهِ الَّذِي أَذْهَبَ عَنِّي الْأَذَىٰ وَعَافَانِي.", ur: "میں تیری مغفرت چاہتا ہوں، تمام تعریفیں اللہ کے لیے ہیں جس نے مجھ سے تکلیف دور کی اور مجھے عافیت دی۔", en: "I seek Your forgiveness. All praise is for Allah who removed the harm from me and granted me well-being.", reference: "Ibn Majah" },
  { title_ur: "وضو کرنے سے پہلے", title_en: "Dua before wudu", arabic: "بِسْمِ اللَّهِ.", ur: "اللہ کے نام سے شروع کرتا ہوں۔", en: "In the name of Allah.", reference: "An-Nasa’i" },
  { title_ur: "وضو کے بعد کی دعا", title_en: "Dua after wudu", arabic: "أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ. اللَّهُمَّ اجْعَلْنِي مِنَ التَّوَّابِينَ وَاجْعَلْنِي مِنَ الْمُتَطَهِّرِينَ.", ur: "میں گواہی دیتا ہوں کہ اللہ کے سوا کوئی معبود نہیں، وہ اکیلا ہے، اس کا کوئی شریک نہیں، اور میں گواہی دیتا ہوں کہ محمد ﷺ اس کے بندے اور رسول ہیں۔ اے اللہ! مجھے بہت توبہ کرنے والوں میں سے بنا اور مجھے پاک ہونے والوں میں سے بنا۔", en: "I bear witness that there is no god but Allah, alone without any partner, and I bear witness that Muhammad is His servant and Messenger. O Allah, make me among those who repent and make me among those who purify themselves.", reference: "Muslim" },
  { title_ur: "سفر کی دعا", title_en: "Dua for travel", arabic: "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَٰذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ، وَإِنَّا إِلَىٰ رَبِّنَا لَمُنْقَلِبُونَ.", ur: "پاک ہے وہ ذات جس نے اس (سواری) کو ہمارے تابع کر دیا، حالانکہ ہم اس پر قادر نہ تھے، اور ہمیں اپنے رب کی طرف لوٹنا ہے۔", en: "Glory to Him who has subjected this to us, for we could never have done it by ourselves, and to our Lord we shall return.", reference: "Quran (43:13-14)" },
  { title_ur: "رزق کی دعا", title_en: "Dua for sustenance (Rizq)", arabic: "اللَّهُمَّ رَبَّ السَّمَاوَاتِ وَالْأَرْضِ، رَبَّنَا وَرَبَّ كُلِّ شَيْءٍ، إِنِّي أَعُوذُ بِكَ مِنَ الْفَقْرِ وَمِنَ الْجُوعِ وَمِنَ الْقِلَّةِ.", ur: "اے اللہ! آسمانوں اور زمین کے رب، ہمارے رب اور ہر چیز کے رب، میں تجھ سے فقر، بھوک اور تنگ دستی سے پناہ مانگتا ہوں۔", en: "O Allah, Lord of the heavens and the earth, our Lord and Lord of all things, I seek refuge in You from poverty, hunger, and scarcity.", reference: "Abu Dawud" },
  { title_ur: "آیت الکرسی (تحفظ کے لیے)", title_en: "Ayat-ul-Kursi (for protection)", arabic: "اللَّهُ لَا إِلٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ، لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ، لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ، مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ، يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ، وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ، وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ، وَلَا يَئُودُهُ حِفْظُهُمَا، وَهُوَ الْعَلِيُّ الْعَظِيمُ.", ur: "اللہ وہ ہے جس کے سوا کوئی عبادت کے لائق نہیں، وہ زندہ اور سب کو سنبھالنے والا ہے، اسے نہ اونگھ لیتی ہے نہ نیند۔ جو کچھ آسمانوں اور زمین میں ہے اسی کا ہے۔ کون ہے جو اس کی اجازت کے بغیر اس کے پاس سفارش کر سکے؟ وہ جانتا ہے جو کچھ لوگوں کے سامنے ہے اور جو ان کے پیچھے ہے، اور وہ اس کے علم میں سے کسی چیز کا احاطہ نہیں کر سکتے مگر جتنا وہ چاہے۔ اس کی کرسی نے آسمانوں اور زمین کو گھیر رکھا ہے، اور ان کی حفاظت اسے تھکا نہیں دیتی، اور وہ بلند و بالا، عظیم ہے۔", en: "Allah – there is no god but Him, the Ever-Living, the Sustainer of all. Neither drowsiness nor sleep overtakes Him. To Him belongs whatever is in the heavens and whatever is on the earth. Who is it that can intercede with Him except by His permission? He knows what is before them and what will be after them, and they encompass nothing of His knowledge except what He wills. His Kursi extends over the heavens and the earth, and their preservation tires Him not. And He is the Most High, the Most Great.", reference: "Quran 2:255" },
  { title_ur: "پریشانی اور غم کی دعا", title_en: "Dua for anxiety and grief", arabic: "اللَّهُمَّ إِنِّي عَبْدُكَ، ابْنُ عَبْدِكَ، ابْنُ أَمَتِكَ، نَاصِيَتِي بِيَدِكَ، مَاضٍ فِيَّ حُكْمُكَ، عَدْلٌ فِيَّ قَضَاؤُكَ، أَسْأَلُكَ بِكُلِّ اسْمٍ هُوَ لَكَ سَمَّيْتَ بِهِ نَفْسَكَ أَوْ أَنْزَلْتَهُ فِي كِتَابِكَ أَوْ عَلَّمْتَهُ أَحَدًا مِنْ خَلْقِكَ أَوِ اسْتَأْثَرْتَ بِهِ فِي عِلْمِ الْغَيْبِ عِنْدَكَ أَنْ تَجْعَلَ الْقُرْآنَ رَبِيعَ قَلْبِي، وَنُورَ صَدْرِي، وَجَلَاءَ حُزْنِي، وَذَهَابَ هَمِّي.", ur: "اے اللہ! میں تیرا بندہ ہوں، تیرے بندے کا بیٹا، تیری بندی کا بیٹا، میری پیشانی تیرے ہاتھ میں ہے، تیرا حکم مجھ پر نافذ ہے، تیرا فیصلہ میرے بارے میں عادلانہ ہے، میں تجھ سے تیرے ہر اس نام کے وسیلے سے مانگتا ہوں جو تو نے اپنے لیے رکھا، یا اپنی کتاب میں نازل کیا، یا اپنی مخلوق میں سے کسی کو سکھایا، یا اپنے علمِ غیب میں اپنے پاس خاص کیا، کہ تو قرآن کو میرے دل کی بہار، میرے سینے کا نور، میرے غم کا دور کرنے والا اور میری فکر کو ختم کرنے والا بنا دے۔", en: "O Allah, I am Your servant, son of Your servant, son of Your maidservant. My forelock is in Your hand. Your judgment is carried out upon me, and Your decree is just. I ask You by every name that belongs to You – which You have named Yourself, revealed in Your Book, taught to any of Your creation, or kept with You in the knowledge of the unseen – to make the Qur'an the spring of my heart, the light of my chest, the remover of my grief, and the departure of my anxiety.", reference: "Ahmad, Ibn Hibban" },
  { title_ur: "کھانے کے بعد کی دعا", title_en: "Dua after eating", arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَٰذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ.", ur: "تمام تعریفیں اللہ کے لیے ہیں جس نے مجھے یہ کھلایا اور بغیر میری طاقت و قوت کے مجھے یہ عطا کیا۔", en: "All praise is for Allah who fed me this and provided it to me without any strength or power from myself.", reference: "Tirmidhi" },
  { title_ur: "مصیبت کے وقت کی دعا", title_en: "Dua during calamity", arabic: "إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ، اللَّهُمَّ أْجُرْنِي فِي مُصِيبَتِي وَأَخْلِفْ لِي خَيْرًا مِنْهَا.", ur: "بے شک ہم اللہ کے ہیں اور ہم اسی کی طرف لوٹ کر جانے والے ہیں۔ اے اللہ! مجھے اس مصیبت کے بدلے اجر دے اور اس سے بہتر عطا کر۔", en: "Indeed we belong to Allah, and indeed to Him we will return. O Allah, reward me for this calamity and compensate me with something better.", reference: "Muslim" },
  { title_ur: "مسجد میں داخل ہونے کی دعا", title_en: "Dua for entering the mosque", arabic: "اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ.", ur: "اے اللہ! میرے لیے اپنی رحمت کے دروازے کھول دے۔", en: "O Allah, open for me the doors of Your mercy.", reference: "Muslim" },
  { title_ur: "مسجد سے نکلنے کی دعا", title_en: "Dua for leaving the mosque", arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ.", ur: "اے اللہ! میں تجھ سے تیرا فضل مانگتا ہوں۔", en: "O Allah, I ask You of Your bounty.", reference: "Muslim" },
  { title_ur: "کسی خیر یا نیکی کا ارادہ کرنے پر", title_en: "Dua for someone who intends good", arabic: "اللَّهُمَّ لَا سَهْلَ إِلَّا مَا جَعَلْتَهُ سَهْلًا، وَأَنْتَ تَجْعَلُ الْحَزْنَ إِذَا شِئْتَ سَهْلًا.", ur: "اے اللہ! کوئی آسانی نہیں مگر جسے تو آسان کرے، اور تو جب چاہے مشکل کو آسان بنا دیتا ہے۔", en: "O Allah, there is no ease except what You make easy, and You make difficulty easy if You will.", reference: "Ibn Hibban" }
];

// ======================== APP LOGIC (HTML/CSS/JS interaction) ========================
let currentLanguage = "en";
let currentView = "home";
let currentJanazaType = "adult"; // adult, minorBoy, minorGirl

function renderHome() {
  return `
    <div class="section-title">✨ Main Menu</div>
    <div class="btn-grid">
      <button class="nav-btn" data-view="namaz">🕌 Namaz Guide</button>
      <button class="nav-btn" data-view="janaza">⚰️ Namaz-e-Janaza (3 Types)</button>
      <button class="nav-btn" data-view="ghusl">🚿 Ghusl-e-Mayt</button>
      <button class="nav-btn" data-view="kalmas">📜 6 Kalmas</button>
      <button class="nav-btn" data-view="duas">🤲 18 Masnoon Duas</button>
    </div>
    <div class="card" style="text-align:center">
      <p>🌟 Complete guide: Namaz (15 steps), Janaza (Adult/Minor), Ghusl, 6 Kalmas, 18 Daily Duas.</p>
    </div>
  `;
}

function renderNamaz() {
  let html = `<div class="section-title">🕌 Namaz (Salah) Step-by-Step</div>`;
  namazData.forEach(step => {
    const title = currentLanguage === "en" ? step.title_en : step.title_ur;
    const desc = currentLanguage === "en" ? step.en : step.ur;
    html += `
      <div class="step-item">
        <div class="step-title">${title}</div>
        <div class="arabic-text" dir="rtl">${step.arabic}</div>
        <div class="step-desc">${desc}</div>
      </div>
    `;
  });
  html += `<button class="home-btn" id="inlineHomeBtn">🏠 Home</button>`;
  return html;
}

function renderJanazaSelector() {
  return `
    <div class="section-title">⚰️ Namaz-e-Janaza</div>
    <div style="display: flex; gap: 12px; flex-wrap: wrap; justify-content: center; margin: 20px 0;">
      <button class="janaza-option-btn ${currentJanazaType === 'adult' ? 'active' : ''}" data-janaza-type="adult">👤 Baligh (Adult)</button>
      <button class="janaza-option-btn ${currentJanazaType === 'minorBoy' ? 'active' : ''}" data-janaza-type="minorBoy">🧒 Nabaliq Larka (Minor Boy)</button>
      <button class="janaza-option-btn ${currentJanazaType === 'minorGirl' ? 'active' : ''}" data-janaza-type="minorGirl">👧 Nabaliq Larki (Minor Girl)</button>
    </div>
    <div id="janazaDetails">
      ${renderJanazaDetails()}
    </div>
    <button class="home-btn" id="inlineHomeBtn">🏠 Home</button>
  `;
}

function renderJanazaDetails() {
  let html = `<div class="card" style="background: rgba(0,0,0,0.3);"><strong>${currentLanguage === 'en' ? 'Janaza Prayer for' : 'جنازہ کی نماز'} ${currentJanazaType === 'adult' ? (currentLanguage === 'en' ? 'Adult' : 'بالغ') : (currentJanazaType === 'minorBoy' ? (currentLanguage === 'en' ? 'Minor Boy' : 'نابالغ لڑکا') : (currentLanguage === 'en' ? 'Minor Girl' : 'نابالغ لڑکی'))}</strong></div>`;
  // Janaza steps are standard: 4 takbirs with specific duas
  const steps = [
    { step: 1, title_en: "1. Niyyah (Intention)", title_ur: "1. نیت", arabic: "نَوَيْتُ أَنْ أُصَلِّيَ صَلَاةَ الْجَنَازَةِ لِلَّهِ تَعَالَىٰ", desc_en: "Make intention for Salat-ul-Janazah.", desc_ur: "نماز جنازہ کی نیت کریں۔" },
    { step: 2, title_en: "2. First Takbir & Thana", title_ur: "2. پہلی تکبیر اور ثناء", arabic: "اللَّهُ أَكْبَرُ", desc_en: "Say Allahu Akbar, then recite Thana:", desc_ur: "اللہ اکبر کہیں، پھر ثناء پڑھیں:" },
    { step: 3, title_en: "Thana (Sana)", title_ur: "ثناء", arabic: "سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ وَتَبَارَكَ اسْمُكَ وَتَعَالَى جَدُّكَ وَجَلَّ ثَنَائِكَ وَلَا إِلَهَ غَيْرُكَ", desc_en: "Recite the above Sana.", desc_ur: "مندرجہ بالا ثناء پڑھیں۔" },
    { step: 4, title_en: "3. Second Takbir & Durood Ibrahim", title_ur: "3. دوسری تکبیر اور درود ابراہیمی", arabic: "اللَّهُ أَكْبَرُ", desc_en: "Second Takbir, then recite Durood Ibrahim:", desc_ur: "دوسری تکبیر کہیں، پھر درود ابراہیمی پڑھیں:" },
    { step: 5, title_en: "Durood Ibrahim", title_ur: "درود ابراہیمی", arabic: "اللَّهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَىٰ إِبْرَاهِيمَ وَعَلَىٰ آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ. اللَّهُمَّ بَارِكْ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَىٰ إِبْرَاهِيمَ وَعَلَىٰ آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ.", desc_en: "Send blessings upon Prophet Muhammad ﷺ.", desc_ur: "درود ابراہیمی پڑھیں۔" },
    { step: 6, title_en: "4. Third Takbir & Specific Dua", title_ur: "4. تیسری تکبیر اور مخصوص دعا", arabic: "اللَّهُ أَكْبَرُ", desc_en: "Third Takbir, then recite the relevant dua:", desc_ur: "تیسری تکبیر کہیں، پھر متعلقہ دعا پڑھیں:" },
    { step: 7, title_en: "5. Fourth Takbir & Salam", title_ur: "5. چوتھی تکبیر اور سلام", arabic: "اللَّهُ أَكْبَرُ", desc_en: "Fourth Takbir, then say Salam to the right side only.", desc_ur: "چوتھی تکبیر کہیں، پھر صرف دائیں طرف سلام پھیریں۔" },
    { step: 8, title_en: "Salam", title_ur: "سلام", arabic: "السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ", desc_en: "Turn head to right and say Salam.", desc_ur: "دائیں طرف منہ پھیر کر سلام کہیں۔" }
  ];
  steps.forEach(step => {
    const title = currentLanguage === "en" ? step.title_en : step.title_ur;
    const desc = currentLanguage === "en" ? step.desc_en : step.desc_ur;
    html += `<div class="step-item"><div class="step-title">${title}</div><div class="arabic-text" dir="rtl">${step.arabic}</div><div class="step-desc">${desc}</div>`;
    if (step.step === 6) {
      const dua = janazaData[currentJanazaType];
      html += `<div class="arabic-text" dir="rtl" style="margin-top:12px;">${dua.arabic}</div>`;
      html += `<div class="step-desc">${currentLanguage === "en" ? dua.en : dua.ur}</div>`;
    }
    html += `</div>`;
  });
  return html;
}

function renderGhusl() {
  let html = `<div class="section-title">🚿 Ghusl-e-Mayt (Word-to-Word Urdu/English)</div>`;
  ghuslSteps.forEach(step => {
    const text = currentLanguage === "en" ? step.en : step.urdu;
    html += `<div class="step-item"><div class="step-title">${currentLanguage === "en" ? `Step ${step.step}` : `مرحلہ ${step.step}`}</div><div class="step-desc" style="font-size:1rem; line-height:1.6;">${text}</div></div>`;
  });
  html += `<button class="home-btn" id="inlineHomeBtn">🏠 Home</button>`;
  return html;
}

function renderKalmas() {
  let html = `<div class="section-title">📖 6 Kalmas</div>`;
  kalmasData.forEach(k => {
    const name = currentLanguage === "en" ? k.name_en : k.name_ur;
    const translation = currentLanguage === "en" ? k.translation_en : k.translation_ur;
    html += `<div class="card"><strong>${name}</strong><div class="arabic-text" dir="rtl">${k.arabic}</div><div class="translation-text">${translation}</div></div>`;
  });
  html += `<button class="home-btn" id="inlineHomeBtn">🔙 Home</button>`;
  return html;
}

function renderDuas() {
  let html = `<div class="section-title">🤲 18 Daily Masnoon Du'as</div>`;
  extraDuas.forEach(dua => {
    const title = currentLanguage === "en" ? dua.title_en : dua.title_ur;
    const translation = currentLanguage === "en" ? dua.en : dua.ur;
    html += `<div class="card"><strong>📖 ${title}</strong><div class="arabic-text" dir="rtl">${dua.arabic}</div><div class="translation-text">${translation}</div><div class="reference">📚 ${dua.reference}</div></div>`;
  });
  html += `<button class="home-btn" id="inlineHomeBtn">🏡 Home</button>`;
  return html;
}

function setView(viewName) {
  currentView = viewName;
  let contentHtml = "";
  if (viewName === "home") contentHtml = renderHome();
  else if (viewName === "namaz") contentHtml = renderNamaz();
  else if (viewName === "janaza") contentHtml = renderJanazaSelector();
  else if (viewName === "ghusl") contentHtml = renderGhusl();
  else if (viewName === "kalmas") contentHtml = renderKalmas();
  else if (viewName === "duas") contentHtml = renderDuas();
  else contentHtml = renderHome();
  document.getElementById("dynamicContent").innerHTML = contentHtml;
  attachEventHandlers();
  if (viewName === "janaza") {
    document.querySelectorAll("[data-janaza-type]").forEach(btn => {
      btn.addEventListener("click", (e) => {
        currentJanazaType = btn.getAttribute("data-janaza-type");
        setView("janaza");
      });
    });
  }
}

function attachEventHandlers() {
  document.querySelectorAll("[data-view]").forEach(btn => {
    btn.removeEventListener("click", handleNav);
    btn.addEventListener("click", handleNav);
  });
  const inlineHome = document.getElementById("inlineHomeBtn");
  if (inlineHome) inlineHome.addEventListener("click", () => setView("home"));
}

function handleNav(e) {
  const view = e.currentTarget.getAttribute("data-view");
  if (view === "namaz") setView("namaz");
  else if (view === "janaza") setView("janaza");
  else if (view === "ghusl") setView("ghusl");
  else if (view === "kalmas") setView("kalmas");
  else if (view === "duas") setView("duas");
  else setView("home");
}

function setLanguage(lang) {
  currentLanguage = lang;
  document.getElementById("langEnBtn").classList.toggle("active", lang === "en");
  document.getElementById("langUrBtn").classList.toggle("active", lang === "ur");
  setView(currentView);
}

function init() {
  setView("home");
  document.getElementById("langEnBtn").addEventListener("click", () => setLanguage("en"));
  document.getElementById("langUrBtn").addEventListener("click", () => setLanguage("ur"));
  document.getElementById("homeMainBtn").addEventListener("click", () => setView("home"));
}
init();