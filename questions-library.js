const capitalPairs = [
    { country: 'Pakistan', capital: 'Islamabad' },
    { country: 'India', capital: 'New Delhi' },
    { country: 'China', capital: 'Beijing' },
    { country: 'Japan', capital: 'Tokyo' },
    { country: 'South Korea', capital: 'Seoul' },
    { country: 'Saudi Arabia', capital: 'Riyadh' },
    { country: 'United Arab Emirates', capital: 'Abu Dhabi' },
    { country: 'Qatar', capital: 'Doha' },
    { country: 'Kuwait', capital: 'Kuwait City' },
    { country: 'Oman', capital: 'Muscat' },
    { country: 'Iran', capital: 'Tehran' },
    { country: 'Iraq', capital: 'Baghdad' },
    { country: 'Afghanistan', capital: 'Kabul' },
    { country: 'Turkey', capital: 'Ankara' },
    { country: 'Russia', capital: 'Moscow' },
    { country: 'United States', capital: 'Washington, D.C.' },
    { country: 'Canada', capital: 'Ottawa' },
    { country: 'United Kingdom', capital: 'London' },
    { country: 'France', capital: 'Paris' },
    { country: 'Germany', capital: 'Berlin' },
    { country: 'Italy', capital: 'Rome' },
    { country: 'Spain', capital: 'Madrid' },
    { country: 'Portugal', capital: 'Lisbon' },
    { country: 'Netherlands', capital: 'Amsterdam' },
    { country: 'Belgium', capital: 'Brussels' },
    { country: 'Switzerland', capital: 'Bern' },
    { country: 'Austria', capital: 'Vienna' },
    { country: 'Sweden', capital: 'Stockholm' },
    { country: 'Norway', capital: 'Oslo' },
    { country: 'Denmark', capital: 'Copenhagen' },
    { country: 'Finland', capital: 'Helsinki' },
    { country: 'Poland', capital: 'Warsaw' },
    { country: 'Greece', capital: 'Athens' },
    { country: 'Egypt', capital: 'Cairo' },
    { country: 'Nigeria', capital: 'Abuja' },
    { country: 'South Africa', capital: 'Pretoria' },
    { country: 'Kenya', capital: 'Nairobi' },
    { country: 'Ethiopia', capital: 'Addis Ababa' },
    { country: 'Morocco', capital: 'Rabat' },
    { country: 'Algeria', capital: 'Algiers' },
    { country: 'Tunisia', capital: 'Tunis' },
    { country: 'Sudan', capital: 'Khartoum' },
    { country: 'Malaysia', capital: 'Kuala Lumpur' },
    { country: 'Indonesia', capital: 'Jakarta' },
    { country: 'Thailand', capital: 'Bangkok' },
    { country: 'Vietnam', capital: 'Hanoi' },
    { country: 'Philippines', capital: 'Manila' },
    { country: 'Australia', capital: 'Canberra' },
    { country: 'New Zealand', capital: 'Wellington' },
    { country: 'Brazil', capital: 'Brasilia' },
    { country: 'Argentina', capital: 'Buenos Aires' },
    { country: 'Mexico', capital: 'Mexico City' },
    { country: 'Chile', capital: 'Santiago' },
    { country: 'Colombia', capital: 'Bogota' },
    { country: 'Peru', capital: 'Lima' },
    { country: 'Venezuela', capital: 'Caracas' },
    { country: 'Cuba', capital: 'Havana' },
    { country: 'Jamaica', capital: 'Kingston' },
    { country: 'Ghana', capital: 'Accra' },
    { country: 'Tanzania', capital: 'Dodoma' },
    { country: 'Uganda', capital: 'Kampala' },
    { country: 'Sri Lanka', capital: 'Sri Jayawardenepura Kotte' },
    { country: 'Nepal', capital: 'Kathmandu' },
    { country: 'Bangladesh', capital: 'Dhaka' },
    { country: 'Myanmar', capital: 'Naypyidaw' },
    { country: 'Cambodia', capital: 'Phnom Penh' },
    { country: 'Laos', capital: 'Vientiane' },
    { country: 'Singapore', capital: 'Singapore' },
    { country: 'Jordan', capital: 'Amman' },
    { country: 'Lebanon', capital: 'Beirut' },
    { country: 'Syria', capital: 'Damascus' },
    { country: 'Israel', capital: 'Jerusalem' },
    { country: 'Yemen', capital: 'Sanaa' },
    { country: 'Azerbaijan', capital: 'Baku' },
    { country: 'Georgia', capital: 'Tbilisi' },
    { country: 'Armenia', capital: 'Yerevan' },
    { country: 'Kazakhstan', capital: 'Astana' },
    { country: 'Uzbekistan', capital: 'Tashkent' },
    { country: 'Turkmenistan', capital: 'Ashgabat' },
    { country: 'Kyrgyzstan', capital: 'Bishkek' },
    { country: 'Tajikistan', capital: 'Dushanbe' },
    { country: 'Czech Republic', capital: 'Prague' },
    { country: 'Hungary', capital: 'Budapest' },
    { country: 'Romania', capital: 'Bucharest' },
    { country: 'Bulgaria', capital: 'Sofia' },
    { country: 'Croatia', capital: 'Zagreb' },
    { country: 'Serbia', capital: 'Belgrade' },
    { country: 'Slovakia', capital: 'Bratislava' },
    { country: 'Slovenia', capital: 'Ljubljana' },
    { country: 'Ireland', capital: 'Dublin' },
    { country: 'Iceland', capital: 'Reykjavik' },
    { country: 'Ukraine', capital: 'Kyiv' },
    { country: 'Belarus', capital: 'Minsk' },
    { country: 'Lithuania', capital: 'Vilnius' },
    { country: 'Latvia', capital: 'Riga' },
    { country: 'Estonia', capital: 'Tallinn' },
    { country: 'Luxembourg', capital: 'Luxembourg' },
    { country: 'Bolivia', capital: 'Sucre' },
    { country: 'Uruguay', capital: 'Montevideo' },
    { country: 'Paraguay', capital: 'Asuncion' }
];

const englishPairs = [
    { word: 'Abundant', synonym: 'Plentiful', antonym: 'Scarce' },
    { word: 'Brave', synonym: 'Courageous', antonym: 'Timid' },
    { word: 'Diligent', synonym: 'Hardworking', antonym: 'Lazy' },
    { word: 'Eloquent', synonym: 'Articulate', antonym: 'Inarticulate' },
    { word: 'Fragile', synonym: 'Delicate', antonym: 'Sturdy' },
    { word: 'Genuine', synonym: 'Authentic', antonym: 'Fake' },
    { word: 'Hostile', synonym: 'Aggressive', antonym: 'Friendly' },
    { word: 'Ignorant', synonym: 'Unaware', antonym: 'Knowledgeable' },
    { word: 'Jovial', synonym: 'Cheerful', antonym: 'Gloomy' },
    { word: 'Keen', synonym: 'Eager', antonym: 'Indifferent' },
    { word: 'Loyal', synonym: 'Faithful', antonym: 'Disloyal' },
    { word: 'Magnify', synonym: 'Enlarge', antonym: 'Reduce' },
    { word: 'Nimble', synonym: 'Agile', antonym: 'Clumsy' },
    { word: 'Obscure', synonym: 'Unclear', antonym: 'Obvious' },
    { word: 'Peculiar', synonym: 'Odd', antonym: 'Normal' },
    { word: 'Quick', synonym: 'Rapid', antonym: 'Slow' },
    { word: 'Robust', synonym: 'Strong', antonym: 'Weak' },
    { word: 'Scarce', synonym: 'Rare', antonym: 'Plentiful' },
    { word: 'Tactful', synonym: 'Diplomatic', antonym: 'Rude' },
    { word: 'Urgent', synonym: 'Pressing', antonym: 'Trivial' },
    { word: 'Vast', synonym: 'Immense', antonym: 'Tiny' },
    { word: 'Wary', synonym: 'Cautious', antonym: 'Careless' },
    { word: 'Yield', synonym: 'Surrender', antonym: 'Resist' },
    { word: 'Zealous', synonym: 'Enthusiastic', antonym: 'Apathetic' },
    { word: 'Adapt', synonym: 'Adjust', antonym: 'Resist' },
    { word: 'Benevolent', synonym: 'Kind', antonym: 'Cruel' },
    { word: 'Candid', synonym: 'Frank', antonym: 'Deceitful' },
    { word: 'Deficit', synonym: 'Shortfall', antonym: 'Surplus' },
    { word: 'Emerge', synonym: 'Appear', antonym: 'Disappear' },
    { word: 'Futile', synonym: 'Useless', antonym: 'Effective' },
    { word: 'Grievous', synonym: 'Severe', antonym: 'Mild' },
    { word: 'Hinder', synonym: 'Obstruct', antonym: 'Assist' },
    { word: 'Inevitable', synonym: 'Unavoidable', antonym: 'Avoidable' },
    { word: 'Jaded', synonym: 'Weary', antonym: 'Fresh' },
    { word: 'Kindle', synonym: 'Ignite', antonym: 'Extinguish' },
    { word: 'Lethargic', synonym: 'Sluggish', antonym: 'Energetic' },
    { word: 'Mitigate', synonym: 'Ease', antonym: 'Aggravate' },
    { word: 'Novel', synonym: 'New', antonym: 'Old' },
    { word: 'Omit', synonym: 'Exclude', antonym: 'Include' },
    { word: 'Prudent', synonym: 'Wise', antonym: 'Foolish' },
    { word: 'Recede', synonym: 'Retreat', antonym: 'Advance' },
    { word: 'Sincere', synonym: 'Genuine', antonym: 'Insincere' },
    { word: 'Tolerate', synonym: 'Endure', antonym: 'Reject' },
    { word: 'Visible', synonym: 'Apparent', antonym: 'Hidden' },
    { word: 'Withhold', synonym: 'Retain', antonym: 'Give' },
    { word: 'Zenith', synonym: 'Peak', antonym: 'Nadir' },
    { word: 'Abridge', synonym: 'Shorten', antonym: 'Expand' },
    { word: 'Blunt', synonym: 'Dull', antonym: 'Sharp' },
    { word: 'Coherent', synonym: 'Logical', antonym: 'Confused' },
    { word: 'Dawn', synonym: 'Sunrise', antonym: 'Sunset' },
    { word: 'Elevate', synonym: 'Raise', antonym: 'Lower' },
    { word: 'Foster', synonym: 'Encourage', antonym: 'Discourage' },
    { word: 'Gratify', synonym: 'Satisfy', antonym: 'Displease' },
    { word: 'Humble', synonym: 'Modest', antonym: 'Proud' },
    { word: 'Impartial', synonym: 'Fair', antonym: 'Biased' },
    { word: 'Lament', synonym: 'Mourn', antonym: 'Rejoice' },
    { word: 'Mature', synonym: 'Adult', antonym: 'Immature' },
    { word: 'Opaque', synonym: 'Cloudy', antonym: 'Transparent' },
    { word: 'Peril', synonym: 'Danger', antonym: 'Safety' },
    { word: 'Quell', synonym: 'Suppress', antonym: 'Incite' },
    { word: 'Rigid', synonym: 'Stiff', antonym: 'Flexible' },
    { word: 'Sturdy', synonym: 'Strong', antonym: 'Fragile' },
    { word: 'Trivial', synonym: 'Minor', antonym: 'Important' },
    { word: 'Utter', synonym: 'Speak', antonym: 'Silence' },
    { word: 'Vacant', synonym: 'Empty', antonym: 'Occupied' },
    { word: 'Waning', synonym: 'Decreasing', antonym: 'Increasing' },
    { word: 'Yearn', synonym: 'Long', antonym: 'Despise' },
    { word: 'Zany', synonym: 'Eccentric', antonym: 'Serious' },
    { word: 'Adept', synonym: 'Skilled', antonym: 'Inept' },
    { word: 'Brief', synonym: 'Short', antonym: 'Lengthy' },
    { word: 'Concur', synonym: 'Agree', antonym: 'Disagree' },
    { word: 'Deplete', synonym: 'Exhaust', antonym: 'Replenish' },
    { word: 'Elated', synonym: 'Overjoyed', antonym: 'Depressed' },
    { word: 'Frugal', synonym: 'Economical', antonym: 'Wasteful' },
    { word: 'Gloomy', synonym: 'Dreary', antonym: 'Bright' },
    { word: 'Harsh', synonym: 'Severe', antonym: 'Gentle' },
    { word: 'Impress', synonym: 'Amaze', antonym: 'Bore' },
    { word: 'Jittery', synonym: 'Nervous', antonym: 'Calm' },
    { word: 'Lucid', synonym: 'Clear', antonym: 'Confusing' },
    { word: 'Meager', synonym: 'Scanty', antonym: 'Abundant' },
    { word: 'Neglect', synonym: 'Ignore', antonym: 'Attend' },
    { word: 'Plausible', synonym: 'Believable', antonym: 'Impossible' },
    { word: 'Rugged', synonym: 'Rough', antonym: 'Smooth' },
    { word: 'Articulate', synonym: 'Expressive', antonym: 'Incoherent' },
    { word: 'Concise', synonym: 'Brief', antonym: 'Wordy' },
    { word: 'Demeanor', synonym: 'Behavior', antonym: 'Rudeness' },
    { word: 'Elusive', synonym: 'Evasive', antonym: 'Obvious' },
    { word: 'Meticulous', synonym: 'Careful', antonym: 'Careless' },
    { word: 'Pragmatic', synonym: 'Practical', antonym: 'Idealistic' }
];

const prepositionPairs = [
    { phrase: 'good ___ mathematics', correct: 'at' },
    { phrase: 'interested ___ science', correct: 'in' },
    { phrase: 'depend ___ your decision', correct: 'on' },
    { phrase: 'afraid ___ the dark', correct: 'of' },
    { phrase: 'proud ___ his success', correct: 'of' },
    { phrase: 'married ___ her friend', correct: 'to' },
    { phrase: 'responsible ___ the task', correct: 'for' },
    { phrase: 'consist ___ two parts', correct: 'of' },
    { phrase: 'listen ___ the teacher', correct: 'to' },
    { phrase: 'apply ___ the job', correct: 'for' },
    { phrase: 'arrive ___ the station', correct: 'at' },
    { phrase: 'believe ___ hard work', correct: 'in' },
    { phrase: 'deal ___ the problem', correct: 'with' },
    { phrase: 'full ___ energy', correct: 'of' },
    { phrase: 'keen ___ learning', correct: 'on' },
    { phrase: 'succeed ___ life', correct: 'in' },
    { phrase: 'tired ___ walking', correct: 'of' },
    { phrase: 'fond ___ music', correct: 'of' },
    { phrase: 'similar ___ the original', correct: 'to' },
    { phrase: 'different ___ ours', correct: 'from' },
    { phrase: 'focus ___ the goal', correct: 'on' },
    { phrase: 'insist ___ coming', correct: 'on' },
    { phrase: 'angry ___ the delay', correct: 'about' },
    { phrase: 'laugh ___ the joke', correct: 'at' },
    { phrase: 'look ___ the child', correct: 'after' },
    { phrase: 'recover ___ illness', correct: 'from' },
    { phrase: 'rely ___ the data', correct: 'on' },
    { phrase: 'pleased ___ the result', correct: 'with' },
    { phrase: 'apologize ___ the mistake', correct: 'for' },
    { phrase: 'confident ___ success', correct: 'of' },
    { phrase: 'bored ___ routine', correct: 'with' },
    { phrase: 'interfere ___ the work', correct: 'with' },
    { phrase: 'agree ___ the terms', correct: 'to' },
    { phrase: 'excited ___ the trip', correct: 'about' },
    { phrase: 'participate ___ the meeting', correct: 'in' },
    { phrase: 'specialize ___ cardiology', correct: 'in' },
    { phrase: 'suffer ___ fever', correct: 'from' },
    { phrase: 'filled ___ joy', correct: 'with' },
    { phrase: 'complain ___ the noise', correct: 'about' },
    { phrase: 'dependable ___ his team', correct: 'on' }
];

const computerAbbreviations = [
    { abbr: 'CPU', full: 'Central Processing Unit' },
    { abbr: 'RAM', full: 'Random Access Memory' },
    { abbr: 'ROM', full: 'Read Only Memory' },
    { abbr: 'BIOS', full: 'Basic Input Output System' },
    { abbr: 'GPU', full: 'Graphics Processing Unit' },
    { abbr: 'HDD', full: 'Hard Disk Drive' },
    { abbr: 'SSD', full: 'Solid State Drive' },
    { abbr: 'USB', full: 'Universal Serial Bus' },
    { abbr: 'LAN', full: 'Local Area Network' },
    { abbr: 'WAN', full: 'Wide Area Network' },
    { abbr: 'WLAN', full: 'Wireless Local Area Network' },
    { abbr: 'IP', full: 'Internet Protocol' },
    { abbr: 'HTTP', full: 'Hypertext Transfer Protocol' },
    { abbr: 'HTTPS', full: 'Hypertext Transfer Protocol Secure' },
    { abbr: 'URL', full: 'Uniform Resource Locator' },
    { abbr: 'HTML', full: 'Hypertext Markup Language' },
    { abbr: 'CSS', full: 'Cascading Style Sheets' },
    { abbr: 'SQL', full: 'Structured Query Language' },
    { abbr: 'OS', full: 'Operating System' },
    { abbr: 'GUI', full: 'Graphical User Interface' },
    { abbr: 'ALU', full: 'Arithmetic Logic Unit' },
    { abbr: 'CU', full: 'Control Unit' },
    { abbr: 'TCP', full: 'Transmission Control Protocol' },
    { abbr: 'UDP', full: 'User Datagram Protocol' },
    { abbr: 'DNS', full: 'Domain Name System' },
    { abbr: 'DHCP', full: 'Dynamic Host Configuration Protocol' },
    { abbr: 'FTP', full: 'File Transfer Protocol' },
    { abbr: 'SMTP', full: 'Simple Mail Transfer Protocol' },
    { abbr: 'API', full: 'Application Programming Interface' },
    { abbr: 'IDE', full: 'Integrated Development Environment' },
    { abbr: 'OOP', full: 'Object Oriented Programming' },
    { abbr: 'DBMS', full: 'Database Management System' },
    { abbr: 'LCD', full: 'Liquid Crystal Display' },
    { abbr: 'LED', full: 'Light Emitting Diode' },
    { abbr: 'PNG', full: 'Portable Network Graphics' },
    { abbr: 'JPEG', full: 'Joint Photographic Experts Group' },
    { abbr: 'PDF', full: 'Portable Document Format' },
    { abbr: 'GPS', full: 'Global Positioning System' },
    { abbr: 'UPS', full: 'Uninterruptible Power Supply' },
    { abbr: 'PSU', full: 'Power Supply Unit' },
    { abbr: 'CLI', full: 'Command Line Interface' },
    { abbr: 'AI', full: 'Artificial Intelligence' },
    { abbr: 'ML', full: 'Machine Learning' },
    { abbr: 'VPN', full: 'Virtual Private Network' },
    { abbr: 'RAID', full: 'Redundant Array of Independent Disks' },
    { abbr: 'IoT', full: 'Internet of Things' },
    { abbr: 'SDK', full: 'Software Development Kit' },
    { abbr: 'JSON', full: 'JavaScript Object Notation' },
    { abbr: 'XML', full: 'Extensible Markup Language' },
    { abbr: 'ISP', full: 'Internet Service Provider' },
    { abbr: 'CDN', full: 'Content Delivery Network' },
    { abbr: 'SSH', full: 'Secure Shell' },
    { abbr: 'TLS', full: 'Transport Layer Security' },
    { abbr: 'MFA', full: 'Multi-Factor Authentication' },
    { abbr: 'SaaS', full: 'Software as a Service' },
    { abbr: 'PaaS', full: 'Platform as a Service' },
    { abbr: 'IaaS', full: 'Infrastructure as a Service' }
];

const islamicFacts = [
    { question: 'How many Surahs are in the Holy Quran?', answer: '114', options: ['112', '114', '116', '118'], difficulty: 'low' },
    { question: 'How many Juz (Parahs) are in the Quran?', answer: '30', options: ['25', '28', '30', '32'], difficulty: 'low' },
    { question: 'Which Surah is the longest in the Quran?', answer: 'Al-Baqarah', options: ['Al-Baqarah', 'Al-Imran', 'An-Nisa', 'Al-Maidah'], difficulty: 'low' },
    { question: 'Which Surah is known as the Heart of the Quran?', answer: 'Yaseen', options: ['Al-Fatiha', 'Yaseen', 'Al-Kahf', 'Al-Ikhlas'], difficulty: 'mid' },
    { question: 'How many verses are in Surah Al-Fatiha?', answer: '7', options: ['5', '6', '7', '8'], difficulty: 'low' },
    { question: 'Which was the first revelation to Prophet Muhammad ﷺ?', answer: 'Surah Al-Alaq', options: ['Surah Al-Fatiha', 'Surah Al-Alaq', 'Surah Al-Ikhlas', 'Surah An-Nas'], difficulty: 'low' },
    { question: 'Where did Prophet Muhammad ﷺ receive the first revelation?', answer: 'Cave Hira', options: ['Cave Thawr', 'Cave Hira', 'Cave Uhud', 'Cave Quba'], difficulty: 'low' },
    { question: 'How many times is Salah obligatory daily?', answer: '5', options: ['3', '4', '5', '6'], difficulty: 'low' },
    { question: 'Which Caliph is known as Al-Farooq?', answer: 'Hazrat Umar (RA)', options: ['Hazrat Abu Bakr (RA)', 'Hazrat Umar (RA)', 'Hazrat Uthman (RA)', 'Hazrat Ali (RA)'], difficulty: 'mid' },
    { question: 'Who was the first Caliph of Islam?', answer: 'Hazrat Abu Bakr (RA)', options: ['Hazrat Umar (RA)', 'Hazrat Abu Bakr (RA)', 'Hazrat Uthman (RA)', 'Hazrat Ali (RA)'], difficulty: 'low' },
    { question: 'How many years did Prophet Muhammad ﷺ stay in Makkah after prophethood?', answer: '13', options: ['10', '13', '15', '20'], difficulty: 'mid' },
    { question: 'How many years did Prophet Muhammad ﷺ live in Madinah?', answer: '10', options: ['8', '10', '12', '14'], difficulty: 'mid' },
    { question: 'The Battle of Badr took place in which Hijri year?', answer: '2 AH', options: ['1 AH', '2 AH', '3 AH', '4 AH'], difficulty: 'mid' },
    { question: 'Which battle is known as the first victory of Islam?', answer: 'Battle of Badr', options: ['Battle of Uhud', 'Battle of Badr', 'Battle of Khandaq', 'Battle of Hunayn'], difficulty: 'mid' },
    { question: 'Which Surah begins with Bismillah twice?', answer: 'At-Tawbah', options: ['Al-Baqarah', 'At-Tawbah', 'Al-Anfal', 'Al-Fatiha'], difficulty: 'high' },
    { question: 'What is the meaning of "Islam"?', answer: 'Submission', options: ['Peace', 'Submission', 'Faith', 'Charity'], difficulty: 'low' },
    { question: 'How many prophets are mentioned in the Quran by name?', answer: '25', options: ['18', '25', '30', '35'], difficulty: 'mid' },
    { question: 'Who was the first Muezzin in Islam?', answer: 'Hazrat Bilal (RA)', options: ['Hazrat Umar (RA)', 'Hazrat Bilal (RA)', 'Hazrat Ali (RA)', 'Hazrat Abu Bakr (RA)'], difficulty: 'mid' },
    { question: 'Which angel brought revelations to Prophet Muhammad ﷺ?', answer: 'Jibreel (AS)', options: ['Mikael (AS)', 'Israfil (AS)', 'Jibreel (AS)', 'Azrael (AS)'], difficulty: 'low' },
    { question: 'Which Surah is known as the Mother of the Quran?', answer: 'Al-Fatiha', options: ['Al-Fatiha', 'Al-Ikhlas', 'Al-Kahf', 'Yaseen'], difficulty: 'low' },
    { question: 'In which city is Masjid al-Nabawi located?', answer: 'Madinah', options: ['Makkah', 'Madinah', 'Taif', 'Jerusalem'], difficulty: 'low' },
    { question: 'What is the first month of the Islamic calendar?', answer: 'Muharram', options: ['Ramadan', 'Safar', 'Muharram', 'Rabi-ul-Awwal'], difficulty: 'low' },
    { question: 'How many Takbeers are in funeral prayer (Janazah)?', answer: '4', options: ['3', '4', '5', '6'], difficulty: 'mid' },
    { question: 'Which Surah is named after a woman?', answer: 'An-Nisa', options: ['Maryam', 'An-Nisa', 'Al-Baqarah', 'Al-Ankabut'], difficulty: 'mid' },
    { question: 'What is Zakat usually calculated on?', answer: 'Savings', options: ['Income only', 'Savings', 'Salary', 'All assets'], difficulty: 'mid' },
    { question: 'Which Prophet is known as Kalimullah?', answer: 'Hazrat Musa (AS)', options: ['Hazrat Isa (AS)', 'Hazrat Musa (AS)', 'Hazrat Ibrahim (AS)', 'Hazrat Adam (AS)'], difficulty: 'mid' },
    { question: 'Which Prophet is known as Khalilullah?', answer: 'Hazrat Ibrahim (AS)', options: ['Hazrat Nuh (AS)', 'Hazrat Ibrahim (AS)', 'Hazrat Yusuf (AS)', 'Hazrat Yunus (AS)'], difficulty: 'mid' },
    { question: 'What is the night of power called?', answer: 'Laylat al-Qadr', options: ['Laylat al-Qadr', 'Laylat al-Miraj', 'Laylat al-Baraat', 'Laylat al-Jumuah'], difficulty: 'low' },
    { question: 'Which Surah is also called the Chapter of Purity?', answer: 'Al-Ikhlas', options: ['Al-Kawthar', 'Al-Ikhlas', 'Al-Maun', 'Al-Fil'], difficulty: 'low' },
    { question: 'How many pillars are there in Islam?', answer: '5', options: ['3', '4', '5', '6'], difficulty: 'low' },
    { question: 'Which Prophet built the Kaaba with his son?', answer: 'Hazrat Ibrahim (AS)', options: ['Hazrat Adam (AS)', 'Hazrat Ibrahim (AS)', 'Hazrat Musa (AS)', 'Hazrat Nuh (AS)'], difficulty: 'mid' },
    { question: 'Which Surah has Ayat al-Kursi?', answer: 'Al-Baqarah', options: ['Al-Baqarah', 'Al-Imran', 'An-Nisa', 'Al-Maidah'], difficulty: 'low' },
    { question: 'Which Prophet was swallowed by a fish?', answer: 'Hazrat Yunus (AS)', options: ['Hazrat Nuh (AS)', 'Hazrat Yunus (AS)', 'Hazrat Musa (AS)', 'Hazrat Isa (AS)'], difficulty: 'low' },
    { question: 'Which Prophet was given the Zabur?', answer: 'Hazrat Dawood (AS)', options: ['Hazrat Dawood (AS)', 'Hazrat Suleman (AS)', 'Hazrat Musa (AS)', 'Hazrat Isa (AS)'], difficulty: 'mid' },
    { question: 'Which Prophet was given the Torah?', answer: 'Hazrat Musa (AS)', options: ['Hazrat Musa (AS)', 'Hazrat Isa (AS)', 'Hazrat Dawood (AS)', 'Hazrat Ibrahim (AS)'], difficulty: 'mid' },
    { question: 'Which Prophet was given the Injil?', answer: 'Hazrat Isa (AS)', options: ['Hazrat Isa (AS)', 'Hazrat Yusuf (AS)', 'Hazrat Yaqub (AS)', 'Hazrat Nuh (AS)'], difficulty: 'mid' },
    { question: 'Which Prophet is known as the father of prophets?', answer: 'Hazrat Ibrahim (AS)', options: ['Hazrat Adam (AS)', 'Hazrat Ibrahim (AS)', 'Hazrat Musa (AS)', 'Hazrat Ismail (AS)'], difficulty: 'mid' },
    { question: 'What is the direction of Qibla?', answer: 'Kaaba in Makkah', options: ['Masjid al-Aqsa', 'Kaaba in Makkah', 'Madinah', 'Cave Hira'], difficulty: 'low' },
    { question: 'Which Surah is recited in every Salah?', answer: 'Al-Fatiha', options: ['Al-Fatiha', 'Al-Ikhlas', 'Al-Falaq', 'An-Nas'], difficulty: 'low' },
    { question: 'Who is known as the Prophet of Allah and a king?', answer: 'Hazrat Suleman (AS)', options: ['Hazrat Suleman (AS)', 'Hazrat Musa (AS)', 'Hazrat Isa (AS)', 'Hazrat Nuh (AS)'], difficulty: 'mid' },
    { question: 'Which Prophet is known for patience?', answer: 'Hazrat Ayyub (AS)', options: ['Hazrat Ayyub (AS)', 'Hazrat Yusuf (AS)', 'Hazrat Musa (AS)', 'Hazrat Isa (AS)'], difficulty: 'mid' },
    { question: 'Which Surah is called the Bride of the Quran?', answer: 'Ar-Rahman', options: ['Ar-Rahman', 'Yaseen', 'Al-Waqiah', 'Al-Mulk'], difficulty: 'mid' },
    { question: 'Which Surah is known for protection from punishment of the grave?', answer: 'Al-Mulk', options: ['Al-Mulk', 'Al-Ikhlas', 'Al-Kafirun', 'Al-Fil'], difficulty: 'mid' },
    { question: 'Which Prophet is known as the friend of Allah?', answer: 'Hazrat Ibrahim (AS)', options: ['Hazrat Musa (AS)', 'Hazrat Ibrahim (AS)', 'Hazrat Isa (AS)', 'Hazrat Nuh (AS)'], difficulty: 'mid' },
    { question: 'Which Prophet is known for interpreting dreams?', answer: 'Hazrat Yusuf (AS)', options: ['Hazrat Yusuf (AS)', 'Hazrat Harun (AS)', 'Hazrat Musa (AS)', 'Hazrat Yahya (AS)'], difficulty: 'mid' },
    { question: 'What is the Arabic word for charity?', answer: 'Sadaqah', options: ['Salah', 'Sadaqah', 'Sawm', 'Hajj'], difficulty: 'low' },
    { question: 'Which month do Muslims fast in?', answer: 'Ramadan', options: ['Muharram', 'Safar', 'Ramadan', 'Shaban'], difficulty: 'low' },
    { question: 'Which Surah mentions the story of Prophet Yusuf (AS)?', answer: 'Surah Yusuf', options: ['Surah Yusuf', 'Surah Maryam', 'Surah Nuh', 'Surah Ibrahim'], difficulty: 'mid' },
    { question: 'What is the name of the first mosque in Islam?', answer: 'Masjid Quba', options: ['Masjid Quba', 'Masjid al-Haram', 'Masjid al-Nabawi', 'Masjid al-Aqsa'], difficulty: 'mid' },
    { question: 'Which Surah is also called the Chapter of Light?', answer: 'An-Nur', options: ['An-Nur', 'Al-Hashr', 'Al-Jinn', 'Al-Insan'], difficulty: 'mid' },
    { question: 'Which prophet built the Ark?', answer: 'Hazrat Nuh (AS)', options: ['Hazrat Nuh (AS)', 'Hazrat Musa (AS)', 'Hazrat Yusuf (AS)', 'Hazrat Isa (AS)'], difficulty: 'low' },
    { question: 'Which Prophet was tested with fire by Nimrod?', answer: 'Hazrat Ibrahim (AS)', options: ['Hazrat Ibrahim (AS)', 'Hazrat Musa (AS)', 'Hazrat Isa (AS)', 'Hazrat Yusuf (AS)'], difficulty: 'mid' },
    { question: 'Which Surah is known as the Chapter of the Cave?', answer: 'Al-Kahf', options: ['Al-Kahf', 'Al-Baqarah', 'Al-Anfal', 'Al-Hadid'], difficulty: 'low' },
    { question: 'Which Surah is known as the Chapter of Iron?', answer: 'Al-Hadid', options: ['Al-Hadid', 'Al-Fajr', 'Al-Fil', 'Al-Qariah'], difficulty: 'mid' },
    { question: 'How many Rakats are in Fajr prayer?', answer: '2', options: ['2', '3', '4', '5'], difficulty: 'low' },
    { question: 'How many Rakats are in Zuhr prayer?', answer: '4', options: ['2', '3', '4', '5'], difficulty: 'low' },
    { question: 'How many Rakats are in Asr prayer?', answer: '4', options: ['2', '3', '4', '5'], difficulty: 'low' },
    { question: 'How many Rakats are in Maghrib prayer?', answer: '3', options: ['2', '3', '4', '5'], difficulty: 'low' },
    { question: 'How many Rakats are in Isha prayer?', answer: '4', options: ['2', '3', '4', '5'], difficulty: 'low' },
    { question: 'Which month is the month of fasting?', answer: 'Ramadan', options: ['Ramadan', 'Muharram', 'Safar', 'Rajab'], difficulty: 'low' },
    { question: 'Which month is associated with Hajj?', answer: 'Dhul Hijjah', options: ['Dhul Hijjah', 'Rabi-ul-Awwal', 'Shaban', 'Safar'], difficulty: 'low' },
    { question: 'What is the minimum Zakat rate on savings?', answer: '2.5%', options: ['2.5%', '5%', '7.5%', '10%'], difficulty: 'mid' },
    { question: 'Prophet Muhammad ﷺ was born in which city?', answer: 'Makkah', options: ['Makkah', 'Madinah', 'Taif', 'Jerusalem'], difficulty: 'low' },
    { question: 'The migration from Makkah to Madinah is called?', answer: 'Hijrah', options: ['Hijrah', 'Jihad', 'Umrah', 'Hajj'], difficulty: 'low' },
    { question: 'In which year (CE) did Hijrah take place?', answer: '622', options: ['610', '615', '622', '630'], difficulty: 'mid' },
    { question: 'The Quran was revealed over how many years?', answer: '23', options: ['10', '13', '20', '23'], difficulty: 'mid' },
    { question: 'Who was the first wife of Prophet Muhammad ﷺ?', answer: 'Hazrat Khadijah (RA)', options: ['Hazrat Aisha (RA)', 'Hazrat Khadijah (RA)', 'Hazrat Hafsa (RA)', 'Hazrat Zainab (RA)'], difficulty: 'mid' },
    { question: 'What was the name of the Prophet’s father?', answer: 'Abdullah', options: ['Abu Talib', 'Abdullah', 'Abdul Muttalib', 'Abu Bakr'], difficulty: 'mid' },
    { question: 'What was the name of the Prophet’s mother?', answer: 'Amina', options: ['Amina', 'Haleema', 'Khadijah', 'Fatimah'], difficulty: 'mid' },
    { question: 'Which battle took place in 3 AH?', answer: 'Battle of Uhud', options: ['Battle of Badr', 'Battle of Uhud', 'Battle of Khandaq', 'Battle of Hunayn'], difficulty: 'mid' },
    { question: 'Which battle took place in 5 AH?', answer: 'Battle of Khandaq', options: ['Battle of Badr', 'Battle of Uhud', 'Battle of Khandaq', 'Battle of Hunayn'], difficulty: 'mid' },
    { question: 'The Treaty of Hudaybiyyah took place in which year?', answer: '6 AH', options: ['2 AH', '4 AH', '6 AH', '8 AH'], difficulty: 'mid' },
    { question: 'The conquest of Makkah took place in which year?', answer: '8 AH', options: ['6 AH', '7 AH', '8 AH', '9 AH'], difficulty: 'mid' },
    { question: 'The Farewell Hajj was performed in which year?', answer: '10 AH', options: ['8 AH', '9 AH', '10 AH', '11 AH'], difficulty: 'mid' },
    { question: 'Which angel is responsible for revelations?', answer: 'Jibreel (AS)', options: ['Jibreel (AS)', 'Mikael (AS)', 'Israfil (AS)', 'Azrael (AS)'], difficulty: 'low' },
    { question: 'Which angel is responsible for rain?', answer: 'Mikael (AS)', options: ['Jibreel (AS)', 'Mikael (AS)', 'Israfil (AS)', 'Azrael (AS)'], difficulty: 'mid' },
    { question: 'Which angel will blow the trumpet?', answer: 'Israfil (AS)', options: ['Jibreel (AS)', 'Mikael (AS)', 'Israfil (AS)', 'Azrael (AS)'], difficulty: 'mid' },
    { question: 'Which Surah is the shortest in the Quran?', answer: 'Al-Kawthar', options: ['Al-Kawthar', 'Al-Asr', 'Al-Ikhlas', 'Al-Fil'], difficulty: 'mid' },
    { question: 'Which Surah does not begin with Bismillah?', answer: 'At-Tawbah', options: ['At-Tawbah', 'Al-Fatiha', 'Al-Baqarah', 'Al-Ikhlas'], difficulty: 'mid' },
    { question: 'How many verses are in Surah Al-Baqarah?', answer: '286', options: ['206', '256', '286', '296'], difficulty: 'mid' },
    { question: 'What is the Arabic term for pilgrimage?', answer: 'Hajj', options: ['Hajj', 'Umrah', 'Sawm', 'Zakat'], difficulty: 'low' },
    { question: 'Eid prayer consists of how many Rakats?', answer: '2', options: ['2', '3', '4', '5'], difficulty: 'low' },
    { question: 'Which Surah is recited for protection from envy and evil?', answer: 'Al-Falaq', options: ['Al-Falaq', 'Al-Kawthar', 'Al-Maun', 'Al-Quraish'], difficulty: 'mid' },
    { question: 'Which Surah is recited for protection from whispering?', answer: 'An-Nas', options: ['An-Nas', 'Al-Fil', 'Al-Asr', 'Al-Humazah'], difficulty: 'mid' },
    { question: 'Who was the first child of Prophet Muhammad ﷺ?', answer: 'Qasim', options: ['Qasim', 'Ibrahim', 'Abdullah', 'Fatimah'], difficulty: 'mid' },
    { question: 'Which Prophet could speak in the cradle?', answer: 'Hazrat Isa (AS)', options: ['Hazrat Musa (AS)', 'Hazrat Isa (AS)', 'Hazrat Yusuf (AS)', 'Hazrat Yunus (AS)'], difficulty: 'mid' },
    { question: 'Which Prophet was known for wisdom and judgement?', answer: 'Hazrat Dawood (AS)', options: ['Hazrat Dawood (AS)', 'Hazrat Harun (AS)', 'Hazrat Hud (AS)', 'Hazrat Salih (AS)'], difficulty: 'mid' },
    { question: 'Which Prophet is called the father of mankind?', answer: 'Hazrat Adam (AS)', options: ['Hazrat Adam (AS)', 'Hazrat Ibrahim (AS)', 'Hazrat Nuh (AS)', 'Hazrat Musa (AS)'], difficulty: 'mid' },
    { question: 'Which Prophet lived the longest according to tradition?', answer: 'Hazrat Nuh (AS)', options: ['Hazrat Nuh (AS)', 'Hazrat Musa (AS)', 'Hazrat Isa (AS)', 'Hazrat Yusuf (AS)'], difficulty: 'mid' }
];

const gkRawQuestionText = `
1,What is H5​N1​?,(a) Virus
2,Which Russian company provides oil and gas to Europe?,(b) Gazprome Company
3,Which planet has the maximum number of satellites?,(a) Jupiter (Note: Modern data differs, but per text)
4,Which is the largest planet?,(c) Jupiter
5,Main reason for disqualification of Arial Sharon (Israel PM)?,(c) Due to Illness
6,Which vessels carry blood from body parts to the heart?,(a) Veins
7,What two seas are linked by the Suez Canal?,(b) Mediterranean and Red Sea
8,Diego Garcia is a:,(c) US military base in Indian Ocean
9,Year European rulers captured Palestine in Crusade War?,(b) 1099 A.D
10,What is Kremlin?,(a) Offices of Russian Government
11,A mass of ice originating in mountains is called:,(b) Glaciers
12,What is the diameter of earth?,(b) 12756 km
13,What is the freezing point of heavy water?,(a) 3.82∘C
14,How many satellites (moons) of Saturn planet?,(b) 56 (Per text data)
15,Which of the following died of natural death?,(d) None of the above
16,Head Office of UNESCO is located at:,(a) Paris
17,What is the main cause of earthquakes?,(d) All of above
18,'Digital divide' term is related with:,(b) Socio economic technology difference
19,What is Ivy League?,(a) A Group of Eight University in USA
20,"Newton's law: ""Every action has reaction...""?",(c) Newton's third law of motion
21,Process to obtain pure water from seawater?,(b) Distillation
22,Common salt is obtained from seawater by:,(b) Evaporation
23,Gasoline is obtained from crude oil by:,(b) Fractional Distillation
24,White scale in electric kettles consists of:,(c) Carbonates of Calcium and Magnesium
25,Washing soda is:,(b) Hydrated Sodium Carbonate
26,Common salt is:,(a) Sodium Chloride
27,Hard water does not lather well with soap because:,(a) It contains carbonates of Ca and Mg
28,Water passing over rocks becomes hard by dissolving:,(a) Calcium Carbonate
29,Process of changing one element into another:,(b) Transmutation of the Elements
30,"Chemically, baking soda is:",(b) Sodium Bicarbonate
31,NTS stands for:,(a) National Testing Service
32,Laundry soap is:,(a) Mixture of sodium salts of fatty acids
33,Lime water contains:,(b) Calcium Hydroxide
34,Pyorrhea is a disease of the:,(b) Gums
35,The ratio of different gases in air is:,(c) Different from place to place
36,Process converting cooking oil to vegetable ghee:,(a) Hydrogenation
37,Iron articles rust because of the formation of:,(b) Mixture of ferrous/ferric hydroxides
38,Diamond is chemically:,(b) Pure Carbon
39,Nitrogen in air:,(b) Dilutes oxygen
40,Two solutions are isotonic when they:,(a) Have the same osmotic pressure
41,Lack of ___ causes diabetes:,(b) Insulin
42,Cooking gas is a mixture of:,(b) Butane and Propane
43,Mica is a:,(c) Bad conductor of heat and electricity
44,Enzymes are substances that:,(b) Convert complex organics to simpler
45,Virus causes:,(b) Typhus
46,Glass tumbler cracks from boiling water due to:,(b) Being a bad conductor of heat
47,Weight of rusted iron vs un-rusted:,(a) Appreciably more
48,'Absolute zero of temperature' is:,(b) Lowest theoretical possible temp
49,"During fuel burning, C and H are:",(b) Converted to CO2​ and water vapor
50,Most abundant gas in the atmosphere:,(c) Nitrogen
51,Process of coating iron pipes with zinc:,(c) Galvanization
52,Chemical in bones and teeth of animals:,(c) Calcium Phosphate
53,"Chemically, dry ice is:",(b) Solid carbon Dioxide
54,Gas not present in normal samples of air:,(b) Chlorine
55,A catalyst is a substance which:,(c) Increases the speed of a reaction
56,Carbon content is minimum in:,(c) Wrought Iron
57,Marsh gas (from decaying matter) is:,(b) Methane
58,The acid used in batteries is:,(c) Sulphuric Acid
59,Which planet is closest to the sun?,(a) Mercury
60,Which planet(s) experience sunrise in the west?,(b) Uranus and Venus
61,Minimum distance between sun and earth occurs on:,(d) January 3 (Per text answers)
62,"Day sun is nearest to earth, earth is in:",(b) Perihelion
63,Earth is at maximum distance from sun on:,(a) July 4
64,Rate of earth's rotation on its axis is highest on:,(d) It never changes
65,What is the International Date Line?,(d) It is the 180∘ longitude
66,Relationship between solar day and sidereal day?,(b) Solar day is longer
67,'One Astronomical Unit' is distance between:,(a) Earth and the Sun
68,AIDS is caused by:,(d) Virus
69,Unit for measuring star distances from earth?,(a) Light year
70,On the surface of the moon:,(b) Mass constant, weight is less
71,Light from nearest star reaches earth in:,(d) 4.3 years
72,Which comet appears every 76 years?,(a) Hailey's
73,Moon's revolution period relative to the sun:,(c) Equal to one synodic month
74,We always see the same face of the moon because:,(c) Revolution and rotation time equal
75,On which day(s) do spring tides occur?,(c) New moon and Full moon
76,The longest day in Australia:,(c) December 22
77,Duration difference of day/night increases from:,(a) Equator to Poles
78,Which of the following is wrong?,(c) Sun vertical over Cancer in winter
79,Equinoxes occur on:,(b) March 21 and September 23
80,Longest sunlight period in summer?,(b) Srinagar
81,Shortest route travel should follow:,(d) Longitudes
82,A day is added when one crosses:,(c) 180∘ longitude East to West
83,Most prominent gases in atmosphere by volume:,(b) Nitrogen and Oxygen
84,Most weather phenomena take place in the:,(b) Troposphere
85,Fall in temp with increasing elevation is:,(d) Lapse Rate
86,Blizzards are characteristic of ___ region:,(c) Antarctic
87,Importance of ozone in atmosphere?,(a) Protection against UV radiation
88,Snowfall occurs when:,(c) Dew point is below freezing
89,Meaning of the term 'cirrus'?,(c) A high cloud
90,What is fog?,(b) A low stratus cloud
91,What is Gulf Stream?,(c) A warm current in Atlantic
92,Which is an organic rock?,(b) Coal
93,ECG is used for diagnosis of:,(b) Heart ailments
94,Continent with highest population density?,(b) Europe
95,Name given to Native American Indians?,(c) Amerinds
96,Countries separated by Durand Line?,(b) Pakistan and Afghanistan
97,Boundary between Germany and Poland:,(a) Hindenburg Line
98,Vitamin that cannot be stored in human body?,(c) Vitamin C
99,Countries on either side of Radcliff Line?,(d) India and Pakistan
100,Countries joined by the Palk Strait?,(a) India and Sri Lanka
101,The gravitational force with which the sun attracts the earth:,(b) Is the same as the force with which earth attracts the sun
102,Correlation of the date of award of Nobel Prize with Alfred Nobel?,(a) Death anniversary of Alfred Nobel
103,In which year was the Nobel Foundation set up?,(a) 1900
104,Which of the following does not belong to the Vitamin B complex?,(b) Retinol
105,Which statement regarding the Nobel Prize founder is wrong?,(c) In 1867 Nobel discovered dynamite with his father
106,Nobel Prize in Economics is known as:,(c) Alfred Nobel Memorial Prize in Economic Sciences
107,The first Nobel Prize given to an Asian was for:,(d) Literature
108,Who was the first Asian to receive the Nobel Prize?,(b) R.N. Tagore
109,In which year was Mother Teresa awarded the Nobel Prize?,(b) 1979/Peace
110,First woman to win the Nobel Prize was:,(c) Madame Marie Curie Sklodowska
111,Urdu-Hindi controversy started first at Banaras in:,(c) 1867
112,Who laid the foundation of National Muhammadan Association in 1877?,(b) Syed Ameer Ali
113,TULF stands for Tamil United:,(b) Liberation Front
114,ASEAN refers to Association of South-East:,(a) Asian Nations
115,Which body certifies circulation figures of newspapers?,(c) ABC
116,Which of the following is not a UNO Agency?,(d) IPU
117,Sufi saint Sachal Sarmast belongs to which province?,(c) Sindh
118,The radio code signal of extreme distress is:,(c) SOS
119,Hingol Dam is situated in:,(d) Baluchistan
120,"Largest, area-wise desert of Pakistan is:",(b) Tharr
121,LASER is an acronym for Light Amplification by:,(b) Stimulated Emission of Radiation
122,Interpol means:,(a) International Crime Police Commission
123,The saltiest sea is:,(d) Dead Sea
124,The longest railway line is:,(b) Trans-Siberian Railway
125,The currency of Indonesia is:,(b) Rupiah
126,'Lufthansa' is the name of the airline of:,(d) Germany
127,Which newspaper does not belong to London?,(c) Dawn
128,The name of the news agency of UK is:,(b) Reuters
129,The national parliament of USA is called:,(b) Congress
130,Who built the Eiffel Tower?,(d) Gustav Eiffel
131,Where is Red Square situated?,(b) Moscow
132,Which street is famous for the Stock Exchange Market?,(c) Wall Street, New York
133,The Ajanta Caves are famous for:,(a) Wall paintings depicting life of Buddha
134,"""The Gateway of India"" is:",(a) Mumbai
135,"Who aimed to achieve a ""Classless Society""?",(a) Karl Marx
136,Zionism is the nationalist movement of the:,(a) Jews
137,Fourth estate means:,(a) The Press
138,Racial movement by whites to oppress Negroes:,(d) Ku Klux Klan
139,An impossible state of society is called:,(b) Utopia
140,Transfer of a foreign fugitive to his home country is:,(a) Extradition
141,The Asian Development Bank has its HQ at:,(a) Manila
142,The boundary line between India and China:,(a) Mac Mohan line
143,The Simla Pact was signed between:,(b) India-Pakistan
144,"Who wrote the ""Divine Comedy""?",(d) Dante Alighieri
145,Category in which no Muslim has won a Nobel Prize:,(a) Economics
146,"Where is the ""Isle of Pearls""?",(b) Bahrain
147,'Roof of the World' is:,(a) Pamirs
148,Nilgiri Hills are known as:,(b) Blue Mountains
149,Where is the 'Holy Land' of the World?,(c) Palestine
150,Muslim who won the Nobel Peace Prize in 1994:,(a) Yasar Arafat
151,"Which country is called the ""Land of the Rising Sun""?",(a) Japan
152,Where is the 'Playground of Europe'?,(b) Switzerland
153,Venice is known as:,(a) Queen of the Adriatic
154,Zanzibar is known as:,(b) Island of cloves
155,Which is the 'Forbidden City'?,(a) Lhasa
156,Gibraltar is known as:,(a) Key to the Mediterranean
157,Which combination is wrong?,(b) City of Palaces - London
158,Chicago is known as the:,(a) Windy city
159,Venice of the North is:,(a) Stockholm
160,Which combination is wrong?,(d) Venice - City of Merchants
161,Scotland is known as:,(b) Land of Cake
162,Which is the 'City of Seven Hills'?,(b) Rome
163,Guinea Coast of Africa is:,(a) Whiteman's grave
164,"Which place is called the ""Cockpit of Europe""?",(c) Belgium
165,Australia is known as the:,(a) Land of Golden Fleece
166,Which is called the 'Britain of the South'?,(a) New Zealand
167,Oxford is known as the:,(b) City of dreaming spires
168,Which is known as the 'Down Under'?,(a) Australia
169,'Santa Sophia' is located in:,(b) Turkey
170,Which is known as the 'Eternal City'?,(c) Rome
171,The Sobriquet of Norway is:,(a) Land of the midnight sun
172,Land of Maple Leaf is the nickname of:,(b) Canada
173,Osaka is known as the:,(b) Manchester of the Orient
174,Sick Man of Europe is a sobriquet of:,(a) Turkey
175,Where is the 'Dutch of Indies'?,(b) Indonesia
176,The 'Garden of Indies' is:,(c) Bangalore
177,Length of Great Wall of China (1500 miles) took:,(d) 20 years
178,Which is known as the 'City of Golden Gate'?,(c) San Francisco in USA
179,Which is known as the 'Herring Pond'?,(b) Atlantic Ocean
180,When was the Objectives Resolution passed?,(a) 12th March, 1949
181,Belgrade in Yugoslavia is also called the:,(a) White City
182,'Land of Midnight Sun' is the name given to:,(a) Norway
183,'Pillars of Hercules' is the nickname of:,(b) Straits of Gibraltar
184,Which is the 'City of Eternal Springs'?,(a) Quito
185,Which is the 'World's loneliest Island'?,(b) Tristan De Cunha
186,Which is referred to as the 'Isle of Dogs'?,(a) Canaria Insula
187,Laos is called the:,(a) Land of Thousand Elephants
188,Which is also known as the 'Fortunate Island'?,(a) Canary Island
189,"If Earth-Sun distance doubled, gravitational force is:",(d) One-fourth of what it is now
190,Which is known as 'Gift of Nile'?,(c) Egypt
191,Which is known as 'Land of the Thunderbolt'?,(d) Bhutan
192,Languages and dialects spoken worldwide?,(a) 6,000
193,How many people speak Chinese language?,(a) 1 billion
194,The language with the richest vocabulary is:,(c) English
195,English language has more than ___ words:,(a) 4,50,000
196,The oldest Indian language is:,(c) Tamil
197,Book printed in max languages and scripts?,(a) The Bible
198,Only religious book printed in shorthand script?,(c) The Bible
199,Oldest printed work (968 A.D.) in the world?,(b) The Hiraka Sutra
200,"The largest book, ""The Super Book"", weighs:",(a) 252 kg
201,Les Hommes de bonne volonte is the:,(a) Longest novel ever published
202,"The world's largest epic is the Mahabharata, written by:",(d) Ved Vyasa
203,The thickest book on record (2.75 m) was produced by:,(a) Peter Troendle
204,Ancient book discovered in 1984 in a grave south of Cairo:,(b) Coptic Psalter
205,The highest price paid for any book ($8.14 million) is:,(a) The Gospel Book of Henry the Lion
206,"The author of the book ""After the Dark Night"" is:",(b) S.M. Ali
207,Mass of a body is different from its weight because:,(d) Mass is quantity of matter; weight is a force
208,"The book ""Apple Cart"" was written by:",(b) George Bernard Shaw
209,"The author of the book/play ""Arthashastra"" is:",(c) Kautilya
210,"""Autobiography of an Unknown Indian"" was written by:",(b) Nirad C. Choudhry
211,Lal Suhara National Park is located in:,(b) Bahawalpur
212,"Who refers to Sir Syed as ""Father of Modern Muslim India""?",(c) Ch. Khaliq-u-Zaman
213,"""Bride for the Sahib and other stories"" was written by:",(a) Khushwant Singh
214,"The author of the book ""Broken Wing"" is:",(a) Sarojini Naidu
215,"""Bunch of Old Letters"" was written by:",(b) Jawaharlal Nehru
216,The famous longest platform 'The Loop' is situated in:,(a) USA
217,"The book ""Das Kapital"" was written by:",(b) Karl Marx
218,"The book ""Descent of Man"" was written by:",(b) Charles Darwin
219,The weight of a body is:,(b) Maximum at the poles
220,A body weighs more at poles because:,(d) All of these (Earth is flat at poles, etc.)
221,Dushanbe is the capital city of:,(b) Tajikistan
222,A person weighs more in a lift which is:,(c) Accelerating upward
223,If a body is taken from the earth to the moon:,(c) Mass constant, weight is different
224,"The book ""Glimpses of World History"" was written by:",(b) Jawaharlal Nehru
225,Tashkent is the capital city of:,(a) Uzbekistan
226,Sana is the capital city of:,(c) Yemen
227,"Ball tied to a shaft; when stopped, angular velocity:",(a) Increasing
228,"The play ""Julius Caesar"" was written by:",(c) William Shakespeare
229,First issue of 'Al-Hilal' came out on 13th July:,(a) 1912
230,More difficult to walk on ice than concrete because:,(b) Friction on ice is less
231,Recited in 1911 at Anjuman Himyat-i-Islam session:,(b) Shikwa
232,"""Letters from a Father to his Daughter"" written by:",(a) Jawaharlal Nehru
233,"The book ""Man and Superman"" was written by:",(b) George Bernard Shaw
234,Easier to roll a barrel than to pull it because:,(b) Rolling friction is less than sliding
235,"The author of ""My Experiments with Truth"" was:",(a) Mahatma Gandhi
236,"The book ""My Truth"" was written by:",(b) Indira Gandhi
237,"The book ""Oliver Twist"" was written by:",(b) Charles Dickens
238,"The book ""Origin of Species"" was written by:",(c) Charles Darwin
239,The Punjab Tenancy Act (land reforms) was passed in:,(d) 1887
240,Paper pulled from under a glass of water illustrates:,(c) Inertia
241,A horse moves forward due to force exerted by:,(d) The ground on the horse's feet
242,"When the velocity of a body is doubled, its:",(b) Momentum is doubled
243,Two bodies (heavy/light) acted on by same force/time:,(b) Acquire same momentum
244,"The play/book ""Shakuntala"" was written by:",(c) Kalidas
245,"Which of the following is the author of ""Song of India""?",(b) Sarojini Naidu
246,"The author of the book ""Time Machine"" is:",(d) H.G. Wells
247,Work done in holding 20kg at 1m height for time:,(a) Zero
248,"When the speed of a body is doubled, its kinetic energy:",(c) Quadruple
249,Sir Aga Khan headed the Simla Deputation in 1906 before:,(b) Lord Minto
250,Winding a watch is actually the process of storing:,(d) Potential energy
251,The well-known work of Abul Kalam Azad is:,(a) India Wins Freedom
252,"From 1858-1870, British politicians blamed Muslims for:",(d) Disloyalty
253,Conservation of energy means that energy:,(d) Neither created nor destroyed
254,"""Shahab Nama"" and ""Nuskh-hai-e-Wafa"" written by:",(b) Qudratullah - Faiz
255,Major works of Jawaharlal Nehru include:,(d) All (Autobiography, Discovery of India, etc.)
256,Period of revolution of a geostationary satellite:,(a) 24 hours
257,A boy standing near a high-speed train likely to:,(c) Fall towards the train
258,Food is cooked faster in a pressure cooker because:,(c) High pressure raises boiling point
259,The pitch (shrillness) of a sound is determined by:,(c) Frequency
260,Mushtaq Yousfi is famous for:,(a) Comedy
261,Aristotle was:,(d) All are correct (Political thinker, Philospher)
262,Loudness of a sound wave is determined by its:,(a) Amplitude
263,Sound travels at maximum speed in:,(d) Steel
264,Sound cannot travel through:,(a) Vacuum
265,Harare is a capital city of:,(c) Zimbabwe
266,Speed of sound will be highest in:,(d) Humid air at 30∘C
267,Thunder is heard after lightning flash because:,(d) Light travels much faster than sound
268,Echoes are produced due to:,(a) Reflection of sound
269,Bats can fly in the dark because:,(c) Guided by ultrasonic waves
270,Device used for measuring depth of the sea:,(b) Fathometer
271,A transformer is a device for:,(c) Stepping up (or down) AC voltage
272,South Pole is located in the continent of:,(c) Antarctica
273,Function of a fuse in an electrical circuit is:,(c) Break circuit in case of overload
274,"""All's Well That Ends Well"" was written by:",(c) William Shakespeare
275,"The author of the book ""Arms and the Man"" is:",(d) George Bernard Shaw
276,"""David Copperfield"" was written by:",(a) Charles Dickens
277,India Khilafat Deputation visited Lloyd George in:,(b) 1920
278,"In an electrical circuit, a fuse is connected:",(a) In the live wire
279,Atmosphere around the earth maintains its:,(a) Temperature
280,About whom did Quaid-e-Azam remark 'show-boy'?,(c) Maulana Abul Kalam Azad
281,Story on the French Revolution by Charles Dickens:,(a) A Tale of Two Cities
282,"""War and Peace"" by Tolstoy depicts:",(a) Russian life against Napoleon's invasion
283,First Muslim president of Indian National Congress:,(d) Badruddin Tayyabji
284,Bengal was partitioned in Oct. 1905 under:,(a) Lord Curzon
285,Annulment of partition of Bengal was in:,(d) 1911
286,Official report of the British Government is in:,(a) Blue Book
287,Yellow Book is the official publication of:,(c) France
288,Abraham Lincoln was the ___ president of USA:,(d) Sixteenth
289,The founder of Indian National Congress was:,(c) A.O. Hume
290,Joint session of League and Congress in 1916 at:,(d) Lucknow
291,Chairman of Punjab/Bengal Boundary Commission:,(c) Cyrel Radcliffe
292,King of Macedonia who defeated Porus in 327 B.C.:,(b) Alexander the Great
293,The SI unit of ___ is named after Ampere:,(c) Electric current
294,Scottish bacteriologist who discovered penicillin:,(a) Alexander Fleming
295,Sir Sikandar Hayat Khan was leader of:,(b) Unionist Party
296,Quaid-e-Azam passed his Bar-at-Law from:,(d) Lincoln's Inn
297,Ashoka the Great was:,(d) All are correct (Grandson of Chandragupta)
298,Founder of the Mughul Empire in India?,(a) Babur
299,The last ruler of the Mughal dynasty was:,(b) Bahadurshah Zafar
300,The Magna Carta is:,(d) Document curbing the king's power
301,Magna Carta was signed during the reign of:,(c) John II
302,Magna Carta was signed by the King of England in?,(a) 1215
303,'Renaissance' is:,(c) A period of revival of learning
304,Charlie Chaplin was:,(d) All are correct
305,Chanakya was:,(d) All are correct
306,Who was the founder of the Mauryan Dynasty?,(c) Chandragupta Maurya
307,Christian Huygens was:,(d) All are correct
308,Christopher Columbus was:,(d) All are correct
309,French Revolution took place during the reign of:,(d) King Louis XVI
310,C.F. Andrews was:,(c) A British missionary
311,The French Revolution began in the year:,(c) 1789
312,Who developed the small pox vaccination?,(a) Edward Jenner
313,Euclid was:,(d) All are correct
314,Kheiri Brothers suggested partition of India in 1917 at:,(a) Stockholm
315,Firdausi was:,(c) Both (a) & (b)
316,"Who is known as the ""Lady of the Lamp""?",(a) Florence Nightingale
317,Gabriel Daniel Fahrenheit was:,(d) All are correct
318,Galileo was an Italian astronomer who:,(d) All are correct
319,Who is known as the father of English poetry?,(a) Geoffrey Chaucer
320,American General who led revolt for independence?,(a) George Washington
321,Who was the founder of the Sikh religion?,(a) Guru Nanak Dev Ji
322,Guru Gobind Singh was:,(d) All are correct
323,Who invented the radio and wireless system?,(a) Guglielmo Marconi
324,Sir Humphrey Davy was a British chemist who:,(c) Both are correct
325,Who discovered Gravitation and three laws of motion?,(a) Sir Isaac Newton
326,'Fall of Bastille' is associated with:,(c) French Revolution
327,The French Revolution gave rise to the theory of:,(d) Socialism
328,'Renaissance' took place in Europe during ___ century:,(c) 15th
329,Why is John Dalton famous?,(c) Both are correct
330,Who invented television in 1926?,(a) John Logie Baird
331,John F. Kennedy was:,(d) All are correct
332,Kanishka was:,(d) All are correct
333,Who emerged as a leader in France after the Revolution?,(b) Napoleon Bonaparte
334,The slogan of the French Revolution was:,(c) Liberty, equality, and fraternity
335,Leonardo da Vinci was:,(d) All are correct
336,Pasteurizing milk is named after:,(b) Louis Pasteur
337,Assassin of Julius Caesar was:,(a) Marcus Junius Brutus
338,The French Revolution ended in:,(d) 1793
339,Who discovered radium and polonium?,(a) Madam Marie Curie
340,Martin Luther King was famous for:,(a) Non-violent rights movement
341,Rabat is the capital city of:,(b) Morocco
342,Michael Faraday discovered:,(d) All
343,Pakistan's foreign policy safeguards sovereignty and:,(b) Territorial Integrity
344,The Russian Revolution took place in the year:,(a) 1917
345,The Bolshevik Revolution is associated with:,(c) Russia
346,Pythagoras was first to prove:,(b) Geometrical theorem validity
347,Leader after the Russian Revolution?,(b) Vladimir Lenin
348,Who invented magnifying glass and gunpowder?,(a) Roger Bacon
349,"Who is known as ""India's Napoleon""?",(a) Samudragupta
350,First lady speaker of NA of Pakistan:,(a) Dr. Fahmeeda Mirza
351,First plane to fly without pilot made by Pakistan (2008):,(b) Uqab
352,A land-locked country in Africa is:,(c) Zambia
353,The core of the earth is:,(d) Metallic
354,Where is the coldest place in the world?,(a) Antarctica
355,Origin of earth dates back to approximately:,(c) 4.6 billion years
356,First woman Governor of State Bank of Pakistan:,(a) Dr. Shamshad Akhtar
357,Foreign Minister of Pakistan after 2008 election:,(c) Shah Mehmood Qureshi
358,Assassinated at Liaquat Bagh in December 2007?,(a) Mohtarma Benazir Bhutto
359,Chairman of the 18th Amendment drafting committee?,(b) Mian Raza Rabbani
360,Who was the founder of PPP?,(b) Zulfiqar Ali Bhutto
361,The Bolshevik Revolution took place in:,(b) 1917
362,The Russian Revolution of 1917 was led by:,(b) Lenin
363,When was the Communist Manifesto written?,(b) 1848
364,The Seven-year War was fought between:,(b) England and France
365,The Hundred-year War was fought between:,(c) France and England
366,'War of Roses' in European history is associated with:,(b) Civil war in England
367,Queen Maria Theresa is associated with the:,(b) War of Austrian succession
368,Napoleon's last battle before exile to St. Helena?,(b) Battle of Waterloo
369,Battle of Waterloo was fought in:,(d) 1815
370,Which battle was NOT fought by Napoleon?,(d) Battle of the Jutland
371,Hundred-year War was started by:,(a) Edward III
372,Muhammad Bin Qasim entered Indo-Pak in:,(b) 712 AD
373,To which country did Karl Marx belong?,(d) Germany
374,Oslo is the capital city of:,(d) Norway
375,'Phoney War' is associated with the invasion of:,(c) Germany of Norway and Denmark
376,'Boston Tea Party' is associated with:,(c) American Independence
377,War of American Independence fought between:,(b) Britain and North America
378,When was War of American Independence fought?,(c) 1775
379,Who drafted 'Declaration of American Independence'?,(b) Thomas Jefferson
380,When was 'Declaration of Rights' drafted?,(a) 1774
381,World War I commenced in:,(d) 1914
382,World War II commenced in:,(c) 1939
383,The Treaty of Versailles was signed in:,(d) 1919
384,First atom bomb dropped on Hiroshima on:,(a) August 6, 1945
385,Second atom bomb dropped on Nagasaki on:,(b) August 9, 1945
386,Crusades were movements to:,(d) Liberate the holy land
387,Crusades were against the domination of:,(a) Seljuk Turks
388,Crusades were conducted during:,(c) 1088–1270 AD
389,Country that suffered maximum in WWII?,(c) Japan
390,Bangladesh was created in:,(b) 1971
391,Zimbabwe attained independence in:,(c) 1980
392,First Sultan of Muslim Sultanate of Delhi (1207):,(a) Qutub-din-Aibek
393,Napoleon Bonaparte belonged to:,(a) France
394,The Treaty of Versailles ended the:,(a) World War I
395,First appointed Nazim of Nadwa-ul-ulema in 1883:,(b) Maulana Syed Muhammad
396,Surrendered unconditionally in WWII?,(c) Japan
397,1607 War of Gibraltar Bay was fought between:,(b) Dutch and Spaniards
398,Florence Nightingale is associated with?,(c) Crimean War
399,The European Renaissance:,(d) Centered on present world
400,NOT typical of Northern Renaissance:,(b) Independent development
401,Humanist philosophers taught that:,(a) People lead moral lives in the world
402,Renaissance painting was NOT characterized by:,(c) Themes from nature
403,16th-century European dominance of oceans was made possible by:,(a) Inventors from China and Muslim world
404,African slave trade was:,(d) Aspect of Columbian Exchange
405,"Concerning absolute monarchs, all were true EXCEPT:",(c) They lacked a bureaucracy
406,In 17th/18th-century Central Europe:,(d) Capitalism characterized by all below
407,Capitalism is characterized by all EXCEPT:,(a) Elimination of financial risks
408,The Enlightenment believed in:,(b) Basic goodness of human nature
409,Mikhail Gorbachev allowed:,(d) Elements of a market economy
410,African National Congress was:,(d) Tied to the nationalist movement
411,Country that changed allegiances between WWI and WWII?,(b) Japan
412,Post-WWI territorial changes created:,(d) The Polish Corridor
413,Japan and Western Europe share a tradition of:,(b) Feudalism
414,French Revolution awakened:,(d) Republican goals among French
415,Romantic movement emphasized:,(d) Emotion over reason
416,"In early 20th-century, Russia led a:",(d) Pan-Slavic movement in Balkans
417,"By 20th-century, which country was an exporter of primary products?",(b) Argentina
418,Map line joining places of equal rainfall:,(b) Isohyet
419,Immediate cause of WWII in Europe:,(c) Invasion of Poland
420,The first truly global war was:,(a) Seven Years' War
421,Which had NOT experienced ethnic cleansing in the 20th century?,(d) Venezuela
422,Which revolution was an independence movement?,(a) Haitian Revolution
423,Which is correctly paired with philosophy?,(b) Nietzsche-existentialism
424,Ancient civilization situated near Persian Gulf?,(a) Sumer
425,The UNO came into existence in:,(b) 1945
426,Headquarter of the UNO is at:,(a) New York
427,UN Security Council permanent members:,(a) 5
428,Which is not a principal organ of UNO?,(d) World Health Organization
429,"Joined UNO on Sept 10, 2002 as 190th member?",(a) Switzerland
430,UN day is officially celebrated on:,(b) October 24th
431,The UN has how many principal organs?,(c) 6
432,Most important body of the UN is the:,(c) Security Council
433,Which is not a UN Agency?,(d) ICRC
434,Non-permanent member term in Security Council?,(d) 2 years
435,Permanent seat of International Court of Justice:,(d) Hague
436,Dr. Boutros-Ghali took over as Sec Gen in:,(c) January 1992
437,Judges in the International Court of Justice?,(c) 15
438,Which is not a principal body of UNO?,(d) UNICEF
439,Which is not a permanent member of UNO?,(d) Pakistan
440,Separate electorate for Muslims first accepted in:,(a) 1909
441,Country without Veto power in Security Council?,(b) Canada
442,Official working languages recognized by UNO?,(c) 6
443,Headquarter of ILO is in:,(a) Geneva
444,Not a necessary qualification for UN membership?,(d) Guarantee human rights to citizens
445,Headquarter of FAO is in:,(c) Rome
446,Kofi Annan appointed Secretary General in:,(d) 1997
447,Peninsula between Black Sea and Sea of Azov?,(b) Crimean
448,UN Secretary General who died in air-crash:,(b) Dag Hammarskjöld
449,"Column match (ILO: Labour, WHO: Health, etc.):",(a) A4, B3, C1, D2
450,Org dedicated to wildlife conservation:,(a) UNDP (per text table)
451,UN org concerned with welfare of children:,(b) UNICEF
452,Year Pakistan became a member of UNO:,(d) Sept, 1947
453,"UN organ for social, cultural, economic affairs:",(c) Economic and Social Council
454,UN Agency with headquarter in Paris:,(c) UNESCO
455,Month UN General Assembly usually meets:,(c) September
456,Normal tenure of UN Secretary General:,(d) 5 years
457,Trygve Lie (1st Sec Gen) belonged to:,(c) Norway
458,Black Sea Economic Cooperation members:,(d) 11
459,Term of office of an ICJ judge:,(c) 9 years
460,Not an official language of the UNO:,(d) Japanese
461,Nations that signed the UN charter initially:,(d) 50
462,184th member of UNO (joined 1993):,(b) Andorra
463,Agency to improve standard of education:,(b) UNESCO
464,Commonwealth day is observed on:,(a) May 24
465,Commonwealth Heads meet:,(b) Biennially
466,Headquarter of European Economic Community:,(c) Brussels
467,Total Articles in UN Charter:,(c) 111
468,Treaty to form NATO was signed at:,(c) Washington
469,Kurt Waldheim (Sec Gen) belonged to:,(b) Austria
470,Headquarter of IRCC (ICRC) is in:,(d) None of these (Geneva)
471,Headquarter of Interpol:,(b) Lyons
472,Pakistan is a member of:,(a) SEATO
473,First Chairman of SAARC:,(b) Lt. Gen. H.M. Ershad
474,Economic and Social Council regional commissions:,(c) 5
475,Not a member of EEC:,(a) Austria
476,Org providing soft loans to developing Asia:,(b) Asian Development Bank
477,UN Charter signed in:,(c) 1945
478,Incorrect statement about Colombo Plan:,(a) HQ is in Colombo
479,SE Asia country not in ASEAN:,(d) Cambodia
480,Color combination of UN Flag:,(d) Blue-White
481,Cuban Missile Crisis occurred in:,(b) 1962
482,Group-77 comprises ___ countries:,(d) None of these
483,Red Cross was founded by:,(a) J.H. Durant
484,Headquarter of Amnesty International:,(a) London
485,Statesmen who formulated NAM:,(b) Nasser, Tito, and Nehru
486,1955 Panchsheel conference held at:,(c) Bandung
487,One of five principles of Panchsheel:,(c) Philosophy of Confucius
488,Doctrine of Panchsheel advocated by:,(a) India and Myammar
489,Main objective of NAM:,(c) Improve world economy
490,UAE is a federation of ___ emirates:,(b) 7
491,Permanent Secretariat of SAARC:,(c) Katmandu
492,First Secretary General of SAARC:,(c) Mr. Abul Ahsan
493,Major donor in financing SAARC?,(b) India
494,109th member of NAM (joined 1993):,(c) South Africa
495,51st member of Commonwealth:,(b) South Africa
496,Admission of State to UN is made by:,(d) General Assembly on Security Council recommendation
497,Function of UN Trusteeship Council except:,(b) Membership confined to trust nations
498,Not a member of NATO:,(b) Pakistan
499,Not a permanent member of Security Council:,(b) Canada
500,Did NOT secede from Commonwealth:,(c) Malaysia
501,Org NOT headquartered in Geneva:,(a) Food and Agricultural Organization
502,Org NOT headquartered in Washington:,(c) United Nations Children's Fund
503,East Timor (191st member) is in:,(a) Asia
504,Eritrea (182nd member) is in:,(b) Africa
505,Chronological order of Sec Generals:,(b) Trygve Lie, Dag Hammarskjöld, U Thant
506,New UN membership is effected by:,(b) General Assembly on Security Council recommendation
507,1943 Tehran meeting purpose:,(c) Maintain international peace
508,1945 50-nation conference city:,(c) San Francisco
509,Security Council increased from 11 to 15 in:,(b) 1965
510,'Uniting for Peace' resolution adopted in:,(a) 1950
511,India became a UN member in:,(b) 1945
512,Org encouraging productive private enterprise:,(b) International Finance Corporation
513,UN related agency in existence longest:,(b) Universal Postal Union
514,EEC was established in:,(b) 1957
515,German reunification occurred in:,(b) 1990
516,First UN General Assembly meeting city:,(a) London
517,General Assembly meets regularly:,(d) Once a year
518,Group of 77 is a/an:,(a) Economic Group
519,"UN agencies headquartered in Vienna, which is in:",(a) Austria
520,All headquartered in Vienna EXCEPT:,(c) United Nations Development Programme
521,Headquarter of Asian Development Bank:,(d) Manila
522,Headquarter of International Red Cross:,(a) Geneva
523,Germany invaded Poland in:,(b) 1939
524,Headquarter of OPEC:,(d) Vienna
525,Headquarter of Warsaw Treaty Organisation:,(c) Moscow
526,Arab League established in March:,(b) 1945
527,Int'l Atomic Energy Agency created in:,(d) 1957
528,Commonwealth of Independent States established in:,(c) 1991
529,Agency to raise living standards of underdeveloped:,(d) IDA
530,President of ICJ normal term:,(a) 3 years
531,Treaty of Versailles settled peace in:,(c) Europe
532,NATO created in:,(c) 1949
533,Official languages of the UN:,(b) Arabic, Chinese, English, French, Russian, Spanish
534,Scandinavia constitutes:,(d) None of these (usually 5 nations)
535,Country equator passes through:,(b) Malaysia (Note: Per text table)
536,Equator does NOT pass through:,(d) Tanzania
537,Sun rises in East because:,(a) Earth rotates West to East
538,Dates of equal day and night:,(b) 21st March and 23rd September
539,Always equal duration of day and night:,(a) On the Equator
540,Country closest to Int'l Date Line:,(a) New Zealand
541,Longest day in Northern Hemisphere:,(c) 21st June
542,Int'l Date Line lies along:,(a) 180° meridian
543,"A ""Great Circle"" is:",(a) Equator
544,Shortest day:,(b) 22 December
545,Earth completes rotation in:,(a) 23 hours 56 minutes 4.9 seconds
546,Nautical mile is equal to:,(c) 1825 metres
547,Earth rotates from:,(a) West to East
548,Frozen continent around South Pole:,(c) Antarctica
549,Country NOT land-locked:,(a) Burma
550,'Tsunami' language:,(d) Japanese
`;

const gkOptionsQuestionText = `
1,What is H5​N1​? ,(a) Virus (b) Bacteria (c) Vaccine (d) Fungi ,(a) Virus
2,Which Russian company provides oil and gas to European countries? ,(a) BSGO (b) Gazprome (c) Gestapo (d) Nindo ,(b) Gazprome Company
3,Which one of the following planets has the maximum number of satellites? ,(a) Jupiter (b) Saturn (c) Venus (d) Uranus ,(a) Jupiter
4,Which is the largest planet? ,(a) Venus (b) Earth (c) Jupiter (d) Mars ,(c) Jupiter
5,Main reason for Arial Sharon's disqualification as Israel's PM? ,(a) Two terms (b) Impeached (c) Illness (d) None ,(c) Due to Illness
6,Which blood vessels carry blood from body parts to the heart? ,(a) Veins (b) Arteries (c) Capillaries (d) Vessels ,(a) Veins
7,What are the two seas linked by the Suez Canal? ,(a) Med. and Baltic (b) Med. and Red Sea (c) Black and China (d) Black and Baltic ,(b) Med. and Red Sea
8,Diego Garera is a: ,(a) Airline (b) Missile (c) US base in Indian Ocean (d) Island ,(c) US base in Indian Ocean
9,Year European rulers captured Palestine in Crusade War? ,(a) 1095 A.D (b) 1099 A.D (c) 1115 A.D (d) 1199 AD ,(b) 1099 A.D
10,What is Kremlin? ,(a) Russian Govt. offices (b) Sri Lankan offices (c) Japan theater (d) None ,(a) Offices of Russian Govt.
11,Mass of ice originating in mountains is called: ,(a) Mountain River (b) Glaciers (c) Lakes (d) None ,(b) Glaciers
12,What is the diameter of earth? ,(a) 11756 km (b) 12756 km (c) 13756 km (d) 14756 km ,(b) 12756 km
13,What is the freezing point of heavy water? ,(a) 3.82∘C (b) 2.82∘C (c) 1.82∘C (d) 0.82∘C ,(a) 3.82∘C
14,How many satellites (moons) of Saturn planet? ,(a) 36 (b) 56 (c) 27 (d) 23 ,(b) 56
15,Which of the following died of natural death: ,(a) Gandhi (b) Indira (c) Rajiv (d) None of above ,(d) None of the above
16,Head Office of UNESCO is located at: ,(a) Paris (b) Geneva (c) London (d) Washington ,(a) Paris
17,What is the main cause of earthquakes? ,(a) Volcanic (b) Tectonic plate (c) Tectonic dislocation (d) All ,(d) All of above
18,'Digital divide' term is related with: ,(a) Economics (b) Socio-tech difference (c) Politics (d) Journalism ,(b) Socio-tech difference
19,What is Ivy League? ,(a) 8 US Universities (b) Switzerland group (c) Football (d) Islands ,(a) 8 US Universities
20,"Newton's law: ""Every action has reaction...""? ",(a) First law (b) Second law (c) Third law (d) None ,(c) Newton's third law
21,Pure water obtained from seawater by: ,(a) Filtration (b) Distillation (c) Evaporation (d) None ,(b) Distillation
22,Common salt is obtained from seawater by: ,(a) Sublimation (b) Evaporation (c) Crystallisation (d) Filtration ,(b) Evaporation
23,Gasoline is obtained from crude oil by: ,(a) Evaporation (b) Fractional Distillation (c) Distillation (d) Filtration ,(b) Fractional Distillation
24,White scale deposited in electric kettle consists of: ,(a) Sugar (b) Common salt (c) Ca & Mg Carbonates (d) Sodium Carbonate ,(c) Ca & Mg Carbonates
25,Washing soda is: ,(a) Sodium Chloride (b) Hydrated Sodium Carbonate (c) Sodium Carbonate (d) Calcium ,(b) Hydrated Sodium Carbonate
26,Common salt is: ,(a) Sodium Chloride (b) Bicarbonate (c) Magnesium Carbonate (d) Calcium Chloride ,(a) Sodium Chloride
27,Hard water doesn't lather well with soap because: ,(a) Ca & Mg carbonates (b) Colored (c) Impurities (d) NaCl ,(a) Ca & Mg carbonates
28,Water becomes hard over rocks by dissolving: ,(a) Calcium Carbonate (b) NaCl (c) Sodium Carbonate (d) Phosphate ,(a) Calcium Carbonate
29,Process of changing one element to another: ,(a) Radioactive Decay (b) Transmutation (c) Covalent (d) Hybridization ,(b) Transmutation
30,"Chemically, baking soda is: ",(a) Calcium Phosphate (b) Sodium Bicarbonate (c) NaCl (d) Carbonate ,(b) Sodium Bicarbonate
31,NTS stands for: ,(a) National Testing Service (b) System (c) Tourism (d) None ,(a) National Testing Service
32,Laundry soap is: ,(a) Sodium salts/fatty acids (b) Carbonate (c) NaCl (d) Sulphuric ,(a) Sodium salts/fatty acids
33,Lime water contains: ,(a) Sodium Hydroxide (b) Calcium Hydroxide (c) Carbonate (d) Chloride ,(b) Calcium Hydroxide
34,Pyorrhea is a disease of the: ,(a) Nose (b) Gums (c) Heart (d) Lungs ,(b) Gums
35,The ratio of different gases in air is: ,(a) Unknown (b) Fixed (c) Different by place (d) Independent ,(c) Different by place
36,Cooking oil converted to ghee by: ,(a) Hydrogenation (b) Distillation (c) Crystallisation (d) Oxidation ,(a) Hydrogenation
37,Iron articles rust because of: ,(a) Ferrous Chloride (b) Ferrous/Ferric hydroxides (c) Sulphate (d) Ferric Chloride ,(b) Ferrous/Ferric hydroxides
38,Diamond is chemically: ,(a) Metal carbonates (b) Pure Carbon (c) Sand (d) Phosphates ,(b) Pure Carbon
39,Nitrogen in air: ,(a) Essential (b) Dilutes oxygen (c) Makes oxygen soluble (d) Density ,(b) Dilutes oxygen
40,Two solution are isotonic when they: ,(a) Same osmotic pressure (b) Equal concentration (c) Same solute (d) Same vapour ,(a) Same osmotic pressure
41,Lack of ____ causes diabetes: ,(a) Sugar (b) Insulin (c) Calcium (d) Vitamins ,(b) Insulin
42,Cooking gas is a mixture of: ,(a) CO & CO2​ (b) Butane & Propane (c) Methane & Ethylene (d) None ,(b) Butane & Propane
43,Mica is a: ,(a) Good/Good (b) Bad/Good (c) Bad heat/Bad electricity (d) Good/Bad ,(c) Bad heat/Bad electricity
44,Enzymes are substances that: ,(a) Soluble (b) Convert complex to simpler (c) Ductless glands (d) Resist viral ,(b) Convert complex to simpler
45,Virus causes: ,(a) Cholera (b) Typhus (c) Typhoid (d) Scurvy ,(b) Typhus
46,Glass tumbler cracks from boiling liquid because: ,(a) Heated (b) Pressure (c) Bad conductor of heat (d) Non-metal ,(b) Pressure (per text answer key)
47,Weight of rusted iron object is: ,(a) Appreciably more (b) Same (c) Less (d) None ,(a) Appreciably more
48,'Absolute zero of temperature' is: ,(a) Starting point (b) Lowest possible (c) Vapours freeze (d) All vapour ,(b) Lowest possible
49,"During burning, fuel carbon and hydrogen: ",(a) Released (b) Converted to CO2​/water (c) Absorbed (d) None ,(b) Converted to CO2​/water
50,Most abundant gas in atmosphere: ,(a) Carbon Dioxide (b) Helium (c) Nitrogen (d) Oxygen ,(c) Nitrogen
51,Coating iron pipes with zinc is termed:,(a) Electroplating (b) Annealing (c) Galvanization (d) Vulcanization,(c)
52,Main chemical in animal bones/teeth:,(a) NaCl (b) Sugar (c) Calcium Phosphate (d) Calcium Sulphate,(c)
53,"Chemically, dry ice is:",(a) Distilled ice (b) Solid CO2​ (c) Sub-zero ice (d) None,(b)
54,Gas not present in normal air:,(a) Neon (b) Chlorine (c) CO2​ (d) Helium,(b)
55,A catalyst is a substance which:,(a) Stops (b) Normals (c) Increases speed (d) Decreases speed,(c)
56,Carbon content is minimum in:,(a) Steel (b) Pig Iron (c) Wrought Iron (d) Cast Iron,(c)
57,Marsh gas formed from decaying matter:,(a) CO2​ (b) Methane (c) Ethane (d) Carbon Monoxide,(b)
58,The acid used in batteries is:,(a) Acetic (b) Hydrochloric (c) Sulphuric (d) Nitric,(c)
59,Which planet is closest to the sun?,(a) Mercury (b) Pluto (c) Earth (d) Jupiter,(a)
60,Which planets experience sunrise in West?,(a) i & ii (b) ii & iv (c) i & iv (d) iii & iv,(b)
61,Min distance between Sun and Earth:,(a) Dec 22 (b) June 21 (c) Sept 22 (d) Jan 3,(d)
62,"Day sun is nearest, earth is in:",(a) Aphelion (b) Perihelion (c) Apogee (d) Perigee,(b)
63,Earth at max distance from sun on:,(a) July 4 (b) Jan 30 (c) Sept 22 (d) Dec 22,(a)
64,Rate of earth rotation highest on:,(a) Jan 3 (b) Dec 22 (c) July 4 (d) Never changes,(d)
65,International Date Line is:,(a) Equator (b) 0∘ long (c) 90∘ long (d) 180∘ long,(d)
66,Solar day vs Sidereal day:,(a) Equal (b) Solar is longer (c) Solar is shorter (d) No relation,(b)
67,'One Astronomical Unit' distance between:,(a) Earth/Sun (b) Earth/Moon (c) Jupiter/Sun (d) Pluto/Sun,(a)
68,AIDS is caused by:,(a) Bacterium (b) Protozoan (c) Fungus (d) Virus,(d)
69,Unit for measuring star distances:,(a) Light year (b) Fathoms (c) Nautical miles (d) Kilometres,(a)
70,On the surface of the moon:,"(a) Mass/weight less (b) Mass constant, weight less (c) Both a/b (d) None",(b)
71,Light from nearest star reaches earth in:,(a) 4.3 sec (b) 4.5 min (c) 43 min (d) 4.3 years,(d)
72,Which comet appears every 76 years?,(a) Hailey's (b) Holme's (c) Donati's (d) Alpha Centauri,(a)
73,Moon's period of revolution ref to sun:,(a) Solar month (b) Sidereal month (c) Synodic month (d) None,(c)
74,Why see same face of moon?,(a) Smaller (b) Opposite rotation (c) Revolution/Rotation time equal (d) Speed,(c)
75,On which day do spring tides occur?,"(a) i, ii, iv (b) ii, iii, iv (c) i & iv (d) ii & iii",(c)
76,The longest day in Australia:,(a) June 21 (b) Sept 22 (c) Dec 22 (d) March 23,(c)
77,Day/night duration diff increases from:,(a) Equator to Poles (b) Poles to Equator (c) Cancer to Equator (d) Cancer to Cap.,(a)
78,Which is wrong?,(a) Sun vertical (b) Pole light (c) Sun vertical Cancer winter (d) Equinox,(c)
79,Equinoxes occur on:,(a) Jan 4/Sept 22 (b) March 21/Sept 23 (c) Dec 22/June 21 (d) March 21/Dec 22,(b)
80,Longest sunlight in summer place:,(a) Mumbai (b) Srinagar (c) Cheney (d) Calcutta,(b)
81,Shortest travel route follow:,(a) Winds (b) Rivers (c) Latitudes (d) Longitudes,(d)
82,A day is added when crossing:,(a) Equator N to S (b) 280∘ W to E (c) 180∘ E to W (d) Equator S to N,(c)
83,Most prominent gases in atmosphere:,(a) N2​ & Methane (b) N2​ & Oxygen (c) O2​ & CO2​ (d) H2​ & N2​,(b)
84,Most weather phenomena occur in:,(a) Stratosphere (b) Troposphere (c) Tropopause (d) Ionosphere,(b)
85,Fall in temp with elevation is:,(a) Anomaly (b) Reduction (c) Temp Fall (d) Lapse Rate,(d)
86,Blizzards are characteristic of:,(a) Equatorial (b) Tropical (c) Antarctic (d) Temperate,(c)
87,Ozone importance in atmosphere:,(a) UV protection (b) Nuclei (c) Greenhouse (d) Scatter blue light,(a)
88,Snowfall occurs when:,(a) Droplets freeze (b) Rain carried up (c) Dew point below freezing (d) Convection,(c)
89,Meaning of 'cirrus':,(a) Low cloud (b) Rain cloud (c) High cloud (d) Hail cloud,(c)
90,What is fog?,(a) Cumulonimbus (b) Low stratus (c) Cirro stratus (d) Altocumulus,(b)
91,What is Gulf Stream?,(a) Cold Atl (b) Cold Pac (c) Warm Atl (d) Warm Pac,(c)
92,Which is an organic rock?,(a) Marble (b) Coal (c) Granite (d) Slate,(b)
93,ECG diagnosis for:,(a) Brain (b) Heart (c) Liver (d) Lungs,(b)
94,Continent highest pop density:,(a) Asia (b) Europe (c) Africa (d) North America,(b)
95,Name for Native American Indians:,(a) Bushmen (b) Alpine (c) Amerinds (d) Mestizoes,(c)
96,Durand Line separates:,(a) India/Pak (b) Pak/Afghan (c) India/China (d) China/USSR,(b)
97,Germany/Poland boundary:,(a) Hindenburg (b) Maginot (c) Durand (d) 17th Parallel,(a)
98,Vitamin not stored in human body:,(a) Vit A (b) Vit B (c) Vit C (d) Vit D,(c)
99,Radcliff Line separates:,(a) India/Bangla (b) Nepal/Bhutan (c) N/S Korea (d) India/Pak,(d)
100,Palk Strait joins:,(a) India/Sri Lanka (b) N/S Korea (c) Pak/China (d) Britain/France,(a)
101,Sun attracts earth force is:,(a) Less than (b) Same as (c) More than (d) Constant,(b)
102,Nobel award date correlation:,(a) Death anniv (b) Birth anniv (c) Discovery (d) None,(a)
103,Nobel Foundation set up in:,(a) 1900 (b) 1901 (c) 1866 (d) 1899,(a)
104,Not Vitamin B complex:,(a) Thiamine (b) Retinol (c) Riboflavin (d) Folic acid,(b)
105,Wrong Nobel statement:,(a) Swede (b) Valued award (c) 1867 discovery (d) Award Dec 10,(c)
106,Nobel Economics special name:,(a) Sci (b) Prize (c) Alfred Nobel Memorial (d) No special name,(c)
107,First Asian Nobel work:,(a) Chem (b) Phys (c) Med (d) Literature,(d)
108,First Asian Nobel recipient:,(a) Raman (b) Tagore (c) Teresa (d) Bunin,(b)
109,Teresa Nobel year/category:,(a) 1981 (b) 1979/Peace (c) 1980 (d) 1979/Service,(b)
110,First woman Nobel winner:,(a) Teresa (b) Suu Kyi (c) Marie Curie (d) None,(c)
111,Urdu Hindi controversy start:,(a) 1865 (b) 1866 (c) 1867 (d) 1868,(c)
112,Foundation National Muhammadan Assoc:,(a) Sir Syed (b) Syed Ameer Ali (c) Sir Agha Khan (d) None,(b)
113,TULF stands for Tamil United:,(a) Lib Fund (b) Lib Front (c) Lib Force (d) Lib Forum,(b)
114,ASEANAssociation of South-East:,(a) Asian Nations (b) Arab (c) American (d) African,(a)
115,Certifies newspaper circulation:,(a) PTI (b) ISI (c) ABC (d) None,(c)
116,Not a UNO Agency:,(a) WMO (b) ILO (c) IMF (d) IPU,(d)
117,Saint Sachal Sarmast province:,(a) Punjab (b) Baluch (c) Sindh (d) None,(c)
118,Radio signal extreme distance:,(a) SO (b) STD (c) SOS (d) None,(c)
119,Hingol Dam province:,(a) Punjab (b) KPK (c) Sindh (d) Baluchistan,(d)
120,Largest area desert Pak:,(a) Cholistan (b) Tharr (c) Iisar (d) None,(b)
121,LASER Light Amplification by:,(a) Radio (b) Radiation (c) Radio waves (d) Spont radiation,(b)
122,Interpol means:,(a) Crime Police (b) Pol Conf (c) Assoc Police (d) None,(a)
123,Saltiest sea:,(a) Arab (b) Med (c) Red (d) Dead,(d)
124,Longest railway line:,(a) Can-Pac (b) Trans-Sib (c) Indian (d) London,(b)
125,Currency of Indonesia:,(a) Dollar (b) Rupiah (c) Lira (d) Rupee,(b)
126,Lufthansa airline of:,(a) Russia (b) USA (c) Malaysia (d) Germany,(d)
127,Newspaper NOT London:,(a) New Statesman (b) Guardian (c) Dawn (d) Times,(c)
128,News agency UK:,(a) UPI (b) Reuters (c) Tass (d) Guardian,(b)
129,National parliament USA:,(a) White House (b) Congress (c) Upper House (d) Diet,(b)
130,Who built Eiffel Tower?,(a) Newton (b) Casel (c) Morris (d) Gustav Eiffel,(d)
131,Red Square location:,(a) Kashmir (b) Moscow (c) China (d) NY,(b)
132,Street famous for Stock Market:,(a) Fleet (b) Downing (c) Wall Street (d) Broadway,(c)
133,Ajanta Caves famous for:,(a) Buddha painting (b) Limestone (c) Civilization (d) Lord Rama,(a)
134,Gateway of India:,(a) Mumbai (b) Delhi (c) Kochi (d) Bangalore,(a)
135,Aimed Classless Society:,(a) Karl Marx (b) Hitler (c) Churchill (d) Gandhi,(a)
136,Zionism nationalist movement:,(a) Jews (b) Muslim (c) Christian (d) Hindu,(a)
137,Fourth estate means:,(a) Press (b) Police (c) Judiciary (d) Ministry,(a)
138,Racial movement whites vs Negroes:,(a) White rev (b) Nazism (c) Blackout (d) Ku Klux Klan,(d)
139,Impossible society:,(a) Socialism (b) Utopia (c) Euphoria (d) Communism,(b)
140,Transfer fugitive home country:,(a) Extradition (b) Asylum (c) Entente (d) Detente,(a)
141,Asian Dev Bank HQ:,(a) Manila (b) Ottawa (c) Delhi (d) Tokyo,(a)
142,India China boundary:,(a) Mac Mohan (b) Durand (c) Red (d) Radcliff,(a)
143,Simla Pact signed:,(a) Russ-Ind (b) Ind-Pak (c) Ind-Chi (d) Ind-Ban,(b)
144,Divine Comedy written by:,(a) Shakespeare (b) Voltaire (c) Aquinas (d) Dante,(d)
145,No Muslim Nobel Prize in:,(a) Economics (b) Peace (c) Physics (d) Literature,(a)
146,Isle of Pearls:,(a) Thailand (b) Bahrain (c) Japan (d) Switz,(b)
147,Roof of the World:,(a) Pamirs (b) Tibet (c) Himalayas (d) Everest,(a)
148,Nilgiri Hills known as:,(a) Roof (b) Blue Mtns (c) Tea (d) None,(b)
149,Holy Land of the World:,(a) Amritsar (b) Vatican (c) Palestine (d) Egypt,(c)
150,Muslim Peace Nobel 1994:,(a) Yasar Arafat (b) Hussni (c) Faisal (d) None,(a)
151,Land of Rising Sun:,(a) Japan (b) Norway (c) Ireland (d) Thailand,(a)
152,Playground of Europe:,(a) USA (b) Switz (c) LA (d) None,(b)
153,Venice known as:,(a) Queen Adriatic (b) Holy Land (c) Holy City (d) Beauty,(a)
154,Zanzibar known as:,(a) Spice (b) Cloves (c) Flavour (d) Town,(b)
155,Forbidden City:,(a) Lhasa (b) Ireland (c) Palestine (d) Vatican,(a)
156,Gibraltar known as:,(a) Key Med (b) Eternal city (c) Queen Adriat (d) None,(a)
157,Wrong combination:,(a) Empire NY (b) Palaces London (c) Dark Africa (d) Emerald Ire,(b)
158,Chicago known as:,(a) Windy (b) Modern (c) Records (d) None,(a)
159,Venice of North:,(a) Stockholm (b) London (c) Scotland (d) None,(a)
160,Wrong combination:,(a) Granite city (b) Gift Nile (c) Hermit Kingdom (d) City Merchants,(d)
161,Scotland known as:,(a) Palaces (b) Land Cake (c) Windy (d) Hermit,(b)
162,City of Seven Hills:,(a) Himal (b) Rome (c) Venice (d) None,(b)
163,Guinea Coast:,(a) Grave (b) Empire (c) Emerald (d) Daffodils,(a)
164,Cockpit of Europe:,(a) South-hall (b) Bangalore (c) Belgium (d) Belgrade,(c)
165,Australia known as:,(a) Golden Fleece (b) Dependent (c) S Europe (d) Richest,(a)
166,Britain of South:,(a) NZ (b) Bangalore (c) Chennai (d) Australia,(a)
167,Oxford known as:,(a) Literature (b) Spires (c) Univ (d) None,(b)
168,Down Under:,(a) Australia (b) Nicobar (c) Jawa (d) Lanka,(a)
169,Santa Sophia location:,(a) Italy (b) Turkey (c) India (d) Greece,(b)
170,Eternal City:,(a) Amritsar (b) Jerusalem (c) Rome (d) Palestine,(c)
171,Norway Sobriquet:,(a) Midnight sun (b) Rising sun (c) Morning calm (d) Maple Leaf,(a)
172,Maple Leaf nickname:,(a) NY (b) Canada (c) Malta (d) Ireland,(b)
173,Osaka Manchester of Orient:,(a) Rising sun (b) Manchester (c) Cross Island (d) None,(b)
174,Sick Man of Europe:,(a) Turkey (b) France (c) S-hall (d) Berlin,(a)
175,Dutch of Indies:,(a) W Indies (b) Indonesia (c) Hawaii (d) Neth,(b)
176,Garden of Indies:,(a) Himal (b) Dehradun (c) Bangalore (d) Kodai,(c)
177,Wall of China build years:,(a) 10 (b) 12 (c) 15 (d) 20,(d)
178,City Golden Gate:,(a) Amritsar (b) London (c) SF USA (d) SF Aust,(c)
179,Herring Pond:,(a) Indian (b) Atlantic (c) Pacific (d) Med,(b)
180,Liaqat Obj Res date:,(a) 1949 (b) 1948 (c) 1947 (d) 1950,(a)
181,Belgrade White City:,(a) White (b) Power (c) Windy (d) Quacker,(a)
182,Land Midnight Sun:,(a) Norway (b) Sweden (c) Denmark (d) Dublin,(a)
183,Pillars of Hercules:,(a) Venice (b) Gibral (c) Natal (d) None,(b)
184,City Eternal Springs:,(a) Quito (b) Egypt (c) Korea (d) Dehradun,(a)
185,World's loneliest Island:,(a) Aust (b) Tristan Cunha (c) Nicobar (d) Ivory,(b)
186,Isle of Dogs:,(a) Canaria (b) Chanel (c) Cape Verde (d) Cayman,(a)
187,Laos Land of:,(a) 1k Elephants (b) White (c) Hermit (d) Elephants,(a)
188,Fortunate Island:,(a) Canary (b) Cocos (c) Christmas (d) Cook,(a)
189,Gravity if dist twice:,(a) 2x (b) 4x (c) 1/2 (d) 1/4,(d)
190,Gift of Nile:,(a) Arg (b) Jordan (c) Egypt (d) Israel,(c)
191,Land of Thunderbolt:,(a) Norway (b) Nepal (c) Finland (d) Bhutan,(d)
192,Languages world:,(a) 6000 (b) 9000 (c) 4000 (d) 1000,(a)
193,Speak Chinese:,(a) 1 bill (b) 1 mill (c) 1 lac (d) 1 k,(a)
194,Richest vocabulary:,(a) Hindi (b) French (c) English (d) German,(c)
195,English words count:,(a) 450k (b) 45k (c) 4.5k (d) 450,(a)
196,Oldest Indian language:,(a) Telugu (b) Hindi (c) Tamil (d) Punjabi,(c)
197,Book max printed:,(a) Bible (b) Hiraka (c) Super Book (d) None,(a)
198,Religious shorthand book:,(a) Ramayana (b) Mahab (c) Bible (d) Guru Granth,(c)
199,Oldest printed work:,(a) Bible (b) Hiraka (c) Ramayana (d) Mahab,(b)
200,Largest super book kg:,(a) 252 (b) 100 (c) 60 (d) None,(a)
201,Les Hommes de bonne volonte is the:,(a) Longest novel (b) Shortest (c) Oldest (d) None,(a)
202,Largest epic Mahabharata written by:,(a) Valmiki (b) Tagore (c) Prem Chand (d) Ved Vyasa,(d)
203,Thickest book produced by:,(a) Peter Troendle (b) Gibbon (c) Shaw (d) Byron,(a)
204,Ancient book found in girl's grave (Cairo):,(a) After Dark (b) Coptic Psalter (c) Antony (d) Ape,(b)
205,Highest price paid for a book ($8.14m):,(a) Gospel Henry Lion (b) Coptic (c) Bread (d) Paradise,(a)
206,"Author of ""After the Dark Night"":",(a) Shakespeare (b) S.M. Ali (c) Huxley (d) Radhakrishnan,(b)
207,Mass vs Weight difference:,"(a) Mass variable (b) Little change (c) Poles (d) Mass=matter, Weight=force",(d)
208,"""Apple Cart"" written by:",(a) Burton (b) G.B. Shaw (c) Hunt (d) Carroll,(b)
209,"Author of ""Arthashastra"":",(a) Chatterjee (b) Tagore (c) Kautilya (d) Choudhry,(c)
210,"""Autobiography of an unknown Indian"":",(a) S.M. Ali (b) Nirad Choudhry (c) Tagore (d) Anand,(b)
211,Lal Suhara National Park is in:,(a) Multan (b) Bahawalpur (c) D.G. Khan (d) Lahore,(b)
212,"Who calls Sir Syed ""Father of Muslim India"":",(a) Hali (b) Abdul Qadar (c) Khaliq-u-Zaman (d) None,(c)
213,"""Bride for the Sahib"" written by:",(a) Khushwant Singh (b) Gupt (c) Tagore (d) Choudhry,(a)
214,"Author of ""Broken Wing"":",(a) Naidu (b) Nehru (c) Indira (d) Dickens,(a)
215,"""Bunch of old letters"" written by:",(a) Naidu (b) Nehru (c) Indira (d) Sivananda,(b)
216,Platform 'The Loop' situated in:,(a) USA (b) Russia (c) Britain (d) Japan,(a)
217,"""Das Kapital"" written by:",(a) Shakespeare (b) Karl Marx (c) Dickens (d) Shaw,(b)
218,"""Descent of Man"" written by:",(a) Dickens (b) Darwin (c) Shaw (d) Byron,(b)
219,Weight of a body is:,(a) Same everywhere (b) Max poles (c) Max equator (d) Hills,(b)
220,Weight more at poles because:,(a) Flat poles (b) Equator speed (c) Ice cap (d) None,(d)
221,Dushambe is capital of:,(a) Turkmen (b) Tajikistan (c) Azerbaijan (d) None,(b)
222,Person weighs more in lift which is:,(a) Constant v (b) Down const v (c) Up accel (d) Down accel,(c)
223,Body taken from earth to moon:,"(a) Mass diff (b) Both diff (c) Mass same, weight diff (d) Same",(c)
224,"""Glimpses of World History"" author:",(a) Bhutto (b) Nehru (c) Syed (d) Arif,(b)
225,Tashkent is capital of:,(a) Uzbekistan (b) Tajiki (c) Turkmen (d) None,(a)
226,Sana is capital of:,(a) Egypt (b) Syria (c) Yemen (d) Jordan,(c)
227,"Ball/string shaft stopped, angular velocity:",(a) Increasing (b) Decreasing (c) Constant (d) Zero,(a)
228,"Play ""Julius Caesar"" written by:",(a) Gunther (b) Stevenson (c) Shakespeare (d) Lawrence,(c)
229,First issue of 'Al-Hilal' in July:,(a) 1912 (b) 1914 (c) 1916 (d) 1918,(a)
230,Walk difficult on ice because:,(a) Spongy (b) Less friction (c) More friction (d) None,(b)
231,Iqbal poem session 1911:,(a) Shahma (b) Shikwa (c) Jawab (d) None,(b)
232,"""Letters from Father to Daughter"":",(a) Nehru (b) Ghosh (c) Shaw (d) Shakespeare,(a)
233,"""Man and Superman"" author:",(a) Shakespeare (b) Shaw (c) Eliot (d) Baig,(b)
234,Easier roll barrel than pull because:,(a) Pull wt (b) Rolling friction < sliding (c) Area (d) Other,(b)
235,"""My experiments with Truth"" author:",(a) Gandhi (b) Indira (c) Mayo (d) Eliot,(a)
236,"""My Truth"" author:",(a) Gandhi (b) Indira (c) Nehru (d) None,(b)
237,"""Oliver Twist"" author:",(a) Darwin (b) Dickens (c) Orwell (d) Ahmad,(b)
238,"""Origin of Species"" author:",(a) Bernard (b) Shakespeare (c) Darwin (d) Hardy,(c)
239,Punjab Tenancy Act passed in:,(a) 1885 (b) 1886 (c) 1888 (d) 1887,(d)
240,Paper pulled under glass of water:,(a) Friction (b) Newton 3rd (c) Inertia (d) Inertia,(c)
241,Horse pulls tonga due to force by:,(a) Tonga (b) Horse on tonga (c) Horse/ground (d) Ground/feet,(d)
242,"Velocity doubled, its:",(a) Accel double (b) Momentum double (c) KE double (d) PE double,(b)
243,Heavy/light body same force/time:,(a) Same velocity (b) Same momentum (c) Accel (d) None,(b)
244,"Play ""Shakuntala"" author:",(a) Iqbal (b) Hali (c) Kalidas (d) Shibli,(c)
245,"Author of ""Song of India"":",(a) Firdausi (b) Naidu (c) Iqbal (d) Shakir,(b)
246,"""Time Machine"" author:",(a) Carroll (b) Stevenson (c) Lamb (d) H.G. Wells,(d)
247,Work done holding 20kg at 1m:,(a) Zero (b) 20 J (c) 200 J (d) None,(a)
248,"Speed doubled, KE becomes:",(a) Double (b) Half (c) Quadruple (d) 1/4,(c)
249,Simla Deputation Oct 1906 before:,(a) Curzon (b) Minto (c) Irwin (d) None,(b)
250,Winding watch stores:,(a) Electric (b) Pressure (c) Kinetic (d) Potential,(d)
251,Work of Abul Kalam Azad:,(a) India Wins Freedom (b) Faces (c) Leaves (d) Village,(a)
252,British blamed Muslims for:,(a) Independence (b) Leaders (c) Conciliation (d) Disloyalty,(d)
253,Conservation of energy means:,(a) Created/dest (b) Created (c) Dest (d) Neither created/dest,(d)
254,"""Shahab Nama"" author:",(a) Iqbal (b) Qudratullah-Faiz (c) Nasir (d) None,(b)
255,Jawaharlal Nehru works include:,(a) Autobiography (b) Discovery (c) Glimpses (d) All,(d)
256,Geostationary sat revolution:,(a) 24 hrs (b) 30 days (c) 365 days (d) Changing,(a)
257,Platform boy edge near train:,(a) Unaffected (b) Fall away (c) Fall towards (d) Speed dep,(c)
258,Pressure cooker fast because:,(a) No heat escape (b) Steam (c) boiling pt raised (d) lower temp,(c)
259,Pitch of sound determined by:,(a) Speed (b) Amplitude (c) Frequency (d) Loudness,(c)
260,Mushtaq Yousfi famous for:,(a) Comedy (b) Drama (c) Poetry (d) None,(a)
261,Aristotle was:,(a) Ethical (b) Metaphysical (c) Philosopher (d) All,(d)
262,Loudness sound wave:,(a) Amplitude (b) Frequency (c) Wavelength (d) Speed,(a)
263,Sound max speed in:,(a) Vacuum (b) Air (c) Water (d) Steel,(d)
264,Sound cannot travel through:,(a) Vacuum (b) Hydrogen (c) Water (d) Steel,(a)
265,Harare capital of:,(a) Zambia (b) Nepal (c) Zimbabwe (d) Turkey,(c)
266,Speed sound highest in:,(a) Dry 0C (b) Dry 30C (c) Humid 0C (d) Humid 30C,(d)
267,Thunder heard after lightning:,(a) Later (b) Clouds (c) Vacuum (d) Light faster,(d)
268,Echoes produced due to:,(a) Reflection (b) Refraction (c) Diffraction (d) Polarization,(a)
269,Bats dark fly:,(a) Vision (b) Pupils (c) Ultrasonic (d) Bird,(c)
270,Sea depth measure device:,(a) Altimeter (b) Fathometer (c) Hydrometer (d) Manometer,(b)
271,Transformer device for:,(a) Step dc (b) Generate (c) Step up/down ac (d) ac to dc,(c)
272,South Pole continent:,(a) Africa (b) Asia (c) Antarctica (d) Australia,(c)
273,Fuse function circuit:,(a) Shock (b) Regulate (c) Break overload (d) None,(c)
274,"""All's Well That Ends Well"" author:",(a) Carol (b) Shaw (c) Shakespeare (d) Wallace,(c)
275,"""Arms and the Man"" author:",(a) Shakespeare (b) Carol (c) Remarque (d) Shaw,(d)
276,"""David Copperfield"" author:",(a) Dickens (b) Wallace (c) Shaw (d) Carol,(a)
277,Khilafat Deputation England:,(a) 1918 (b) 1920 (c) 1922 (d) 1924,(b)
278,Fuse connected in:,(a) Live wire (b) Neutral (c) Earth (d) Anywhere,(a)
279,Atmosphere around earth maintains:,(a) Temp (b) Pressure (c) Shape (d) Density,(a)
280,Quaid-e-Azam 'show-boy' remark:,(a) Gandhi (b) Nehru (c) Azad (d) Petal,(c)
281,French Rev story Dickens:,(a) Tale of Two Cities (b) Origin (c) War (d) Guide,(a)
282,"""War and Peace"" novel:",(a) Napoleon invasion (b) Culture (c) French Rev (d) Europe,(a)
283,First Muslim president Congress:,(a) Azad (b) Hussain (c) Scientist (d) Tayyabji,(d)
284,Bengal partition Oct 1905 Viceroy:,(a) Curzon (b) Mayo (c) Rippon (d) Lytton,(a)
285,Annulment partition Bengal:,(a) 1906 (b) 1907 (c) 1909 (d) 1911,(d)
286,Official report British Govt:,(a) Blue (b) Green (c) Grey (d) Orange,(a)
287,Yellow Book is:,(a) Italy (b) Netherlands (c) France (d) Japan,(c)
288,Abraham Lincoln president:,(a) First (b) Tenth (c) Twentieth (d) Sixteenth,(d)
289,Founder Indian National Congress:,(a) Gandhi (b) Nehru (c) A.O. Hume (d) Dufferin,(c)
290,Joint session League/Congress 1961:,(a) Aligarh (b) Bombay (c) Simla (d) Lucknow,(d)
291,Chairman Boundary Commission:,(a) Mountbatten (b) Auchinleck (c) Radcliffe (d) Attlee,(c)
292,King Macedonia defeated Porus:,(a) Hitler (b) Alexander (c) Maurya (d) Columbus,(b)
293,SI unit named after Ampere:,(a) Power (b) Potential (c) Electric current (d) Energy,(c)
294,Bacteriologist penicillin:,(a) Fleming (b) Einstein (c) Archimedes (d) Aryabhatta,(a)
295,Sir Sikandar Hayat Khan party:,(a) Muslim League (b) Unionist (c) Congress (d) None,(b)
296,Quaid Bar-at-Law exam from:,(a) Oxford (b) Cambridge (c) Harvard (d) Lincoln's Inn,(d)
297,Ashoka the great was:,(a) Grandson (b) Buddhist (c) Emperor (d) All,(d)
298,Founder Mughul Empire India:,(a) Babur (b) Akbar (c) Maurya (d) None,(a)
299,Last Mughul ruler:,(a) Babur (b) Bahadurshah Zafar (c) Akbar (d) None,(b)
300,Magna Carta is:,(a) King (b) War (c) Ship (d) Doc curbing king,(d)
301,Magna Carta signed reign of:,(a) Edward II (b) Henry IV (c) John II (d) Elizabeth,(c)
302,Magna Carta signed in?,(a) 1215 (b) 1315 (c) 1415 (d) 1515,(a)
303,Renaissance is:,(a) Russia (b) France (c) Rebirth learning (d) War,(c)
304,Charlie Chaplin was:,(a) Comedian (b) Actor (c) Producer (d) All,(d)
305,Chanakya was:,(a) PM (b) Kautilya (c) Arthashastra (d) All,(d)
306,Founder Mauryan Dynasty:,(a) Babur (b) Akbar (c) Maurya (d) Kanishka,(c)
307,Christian Huygens was:,(a) Dutch (b) Clock (c) Saturn (d) All,(d)
308,Christopher Columbus was:,(a) Italian (b) Americas (c) Puerto Rico (d) All,(d)
309,French Revolution reign:,(a) Louis II (b) Louis III (c) Louis IV (d) Louis XVI,(d)
310,C.F. Andrews was:,(a) Viceroy (b) GG (c) Missionary/Gandhi (d) All,(c)
311,French Rev begin year:,(a) 1770 (b) 1788 (c) 1789 (d) 1750,(c)
312,Small pox vaccination:,(a) Jenner (b) Fleming (c) Einstein (d) None,(a)
313,Euclid was:,(a) Greek (b) Logic (c) Geometry (d) All,(d)
314,Kheiri partition plan 1917:,(a) Stockholm (b) London (c) Oslo (d) None,(a)
315,Firdausi was:,(a) Poet (b) Shahnama (c) Both (d) None,(c)
316,Lady of the Lamp:,(a) Nightingale (b) Naidu (c) Laxmibai (d) Pal,(a)
317,Gabriel Fahrenheit was:,(a) Physicist (b) Thermometer (c) Scale (d) All,(d)
318,Galileo Italian who:,(a) Telescope (b) Jupiter (c) Pendulum (d) All,(d)
319,Father English poetry:,(a) Chaucer (b) Milton (c) Keats (d) None,(a)
320,American General led revolt:,(a) Washington (b) Clinton (c) Bush (d) None,(a)
321,Founder Sikh religion:,(a) Nanak (b) Gobin (c) Teg (d) None,(a)
322,Guru Gobind Singh was:,(a) 10th (b) Khalsa (c) Granth (d) All,(d)
323,Radio/wireless invented:,(a) Marconi (b) Dalton (c) Einstein (d) Braille,(a)
324,Humphrey Dary chemist:,(a) Lamp (b) Anesthetic (c) Both (d) None,(c)
325,Law Gravitation/Motion:,(a) Newton (b) Einstein (c) Marconi (d) Salam,(a)
326,Fall of Bastille associated:,(a) Napoleon (b) 30 yr (c) French Rev (d) 100 yr,(c)
327,French Rev theory:,(a) Communism (b) Nationalism (c) Democracy (d) Socialism,(d)
328,Renaissance century:,(a) 12th (b) 10th (c) 15th (d) 18th,(c)
329,John Dalton famous:,(a) Atomic (b) Mixture gas (c) Both (d) None,(c)
330,Television 1926:,(a) Baird (b) Keats (c) Kennedy (d) Dalton,(a)
331,John F. Kennedy was:,(a) Pres (b) Catholic (c) Profile (d) All,(d)
332,Kanishka was:,(a) Kushan (b) Buddha (c) Central Asia (d) All,(d)
333,Leader leader after French Rev:,(a) Voltaire (b) Napoleon (c) Marx (d) None,(b)
334,Slogan French Rev:,(a) 1 nation (b) people (c) Liberty (d) Workers,(c)
335,Leonardo de Vinci:,(a) Painter (b) Monaliza (c) Organs (d) All,(d)
336,Pasteurizing milk:,(a) Braille (b) Pasteur (c) Einstein (d) Curie,(b)
337,Assassin Julius Caesar:,(a) Brutus (b) Polo (c) Trotsky (d) Marx,(a)
338,French Rev ended in:,(a) 1780 (b) 1785 (c) 1790 (d) 1793,(d)
339,Radium/polonium Nobel:,(a) Marie Curie (b) Pierre (c) Both (d) None,(a)
340,Martin Luther King famous:,(a) Non-violent (b) Apostle (c) Tashkent (d) None,(a)
341,Rabat capital of:,(a) Egypt (b) Morocco (c) Turkey (d) Malaysia,(b)
342,Faraday discovered:,(a) Electromagnetism (b) Gas (c) induction (d) All,(d)
343,Pakistan foreign policy safety:,(a) Relations (b) Integrity (c) Trade (d) None,(b)
344,Russian Rev year:,(a) 1917 (b) 1914 (c) 1910 (d) 1920,(a)
345,Bolshevik Revolution:,(a) France (b) Germany (c) Russia (d) England,(c)
346,Pythagoras valid theorem:,(a) Give (b) Prove (c) Both (d) None,(b)
347,Leader after Russian Rev:,(a) Marx (b) Lenin (c) Robbespierre (d) None,(b)
348,Magnifying glass/gunpowder:,(a) Bacon (b) Diesel (c) Freud (d) Boyle,(a)
349,India's Napoleon:,(a) Samudragupta (b) Gupta I (c) Gupta II (d) None,(a)
350,First lady speaker NA Pak:,(a) Mirza (b) Sujjat (c) Raja (d) Lodhi,(a)
351,Pakistan fly without pilot 2008:,(a) Shahbaz (b) Uqab (c) Sohrab (d) None,(b)
352,Land-locked country Africa:,(a) Nigeria (b) Somalia (c) Zambia (d) Tanzania,(c)
353,Core of earth:,(a) Plastic (b) Amorphous (c) Vacuum (d) Metallic,(d)
354,Coldest place world:,(a) Antarctica (b) Russia (c) Greenland (d) None,(a)
355,Origin earth dates:,(a) 2.8 bill (b) 3.8 bill (c) 4.6 bill (d) 5.6 bill,(c)
356,First woman Gov SBP:,(a) Akhtar (b) Khatoon (c) Kausar (d) None,(a)
357,Foreign Minister after 2008:,(a) Ashraf (b) Nawaz (c) Qureshi (d) None,(c)
358,Assassinated Liaquat Bagh 2007:,(a) Benazir (b) Ahmad (c) Qazi (d) None,(a)
359,Chairman 18th Amendment:,(a) Somro (b) Rabbani (c) Nisar (d) None,(b)
360,Founder PPP:,(a) Nawaz (b) Bhutto (c) Benazir (d) None,(b)
361,Bolshevik Revolution year:,(a) 1916 (b) 1917 (c) 1918 (d) 1919,(b)
362,Russian Rev 1917 led by:,(a) Stalin (b) Lenin (c) Nicholas I (d) Marx,(b)
363,Communist Manifesto year:,(a) 1840 (b) 1848 (c) 1917 (d) 1918,(b)
364,Seven-year War:,(a) France/Germ (b) Eng/France (c) Eng/Prussia (d) France/Aust,(b)
365,Hundred-year War:,(a) France/Germ (b) Germ/Aust (c) France/Eng (d) Eng/Aust,(c)
366,War of Roses:,(a) Eng/France (b) Civil Eng (c) Spanish (d) Prussia/Aust,(b)
367,Maria Theresa associated:,(a) Civil Eng (b) Austrian succession (c) 7 yr (d) 30 yr,(b)
368,Napoleon last battle:,(a) Trafalgar (b) Waterloo (c) Austerlitz (d) Leipzig,(b)
369,Battle Waterloo year:,(a) 1805 (b) 1809 (c) 1813 (d) 1815,(d)
370,Not fought by Napoleon:,(a) Waterloo (b) Leipzig (c) Trafalgar (d) Jutland,(d)
371,Hundred-year War started:,(a) Edward III (b) Henry V (c) Normandy (d) Arc,(a)
372,Qasim sub-continent Indo-Pak:,(a) 612 (b) 712 (c) 716 (d) 720,(b)
373,Karl Marx country:,(a) Italy (b) Yugo (c) Russia (d) Germany,(d)
374,Oslo capital of:,(a) Nauru (b) Nepal (c) Malavi (d) Norway,(d)
375,Phoney War associated invasion:,(a) Japan (b) France (c) Germ of Nor/Den (d) Brit,(c)
376,Boston Tea Party:,(a) French (b) Russian (c) American Indep (d) Egypt,(c)
377,American Independence:,(a) N/S Amer (b) Brit/N Amer (c) France/Amer (d) Canada,(b)
378,War Amer Indep year:,(a) 1770 (b) 1772 (c) 1775 (d) 1776,(c)
379,Drafted Declaration Amer Ind:,(a) Washington (b) Jefferson (c) Marx (d) None,(b)
380,Declaration of Rights year:,(a) 1774 (b) 1775 (c) 1776 (d) 1778,(a)
381,World War I commence:,(a) 1904 (b) 1908 (c) 1910 (d) 1914,(d)
382,World War II commence:,(a) 1930 (b) 1935 (c) 1939 (d) 1940,(c)
383,Treaty Versailles year:,(a) 1914 (b) 1920 (c) 1928 (d) 1919,(d)
384,1st atom bomb Hiroshima:,"(a) Aug 6, 1914 (b) Aug 9, 1945 (c) Aug 9, 1946 (d) Aug 9, 1943",(a)
385,2nd atom bomb Nagasaki:,"(a) Aug 6, 1914 (b) Aug 9, 1945 (c) Aug 6, 1943 (d) Aug 9, 1943",(b)
386,Crusades movement to:,(a) Christianity (b) Catholics (c) Protestant (d) Liberate land,(d)
387,Crusades liberate Jerusalem:,(a) Turks (b) Palestinians (c) Libyans (d) Egyptians,(a)
388,Crusades period:,(a) 1080-1100 (b) 1088-1200 (c) 1088-1270 (d) 1270-1300,(c)
389,Max suffering WWII:,(a) France (b) Germany (c) Japan (d) England,(c)
390,Bangladesh created:,(a) 1970 (b) 1971 (c) 1972 (d) 1973,(b)
391,Zimbabwe independence:,(a) 1975 (b) 1979 (c) 1980 (d) 1981,(c)
392,First Sultan establishment Delhi:,(a) Aibek (b) Ghuri (c) Tughluq (d) None,(a)
393,Napoleon Bonaparte:,(a) France (b) Austria (c) Germany (d) England,(a)
394,Treaty Versailles ended:,(a) WWI (b) WWII (c) French Rev (d) Russo-Jap,(a)
395,First Nazim Nadwa:,(a) Shibli (b) Muhammad (c) Ghafoor (d) None,(b)
396,Surrendered unconditionally WWII:,(a) Germany (b) France (c) Japan (d) Austria,(c)
397,1607 War Gibraltar Bay:,(a) Dutch/Port (b) Dutch/Span (c) Port/Span (d) Dutch vs All,(b)
398,Florence Nightingale:,(a) WWI (b) WWII (c) Crimean (d) Leipzig,(c)
399,European Renaissance:,(a) Indep (b) ancient (c) western (d) present world,(d)
400,Northern Renaissance EXCEPT:,(a) Religious (b) Indep dev (c) Print (d) Portrait,(b)
401,Humanist philosophers taught that:,(a) People could lead moral lives in world (b) Monasticism purest (c) Faith superior (d) Reason leads astray,(a)
402,Renaissance painting was NOT:,(a) Emphasis on persons (b) Perspective (c) Nature themes (d) Realism,(c)
403,16th century ocean dominance by:,(a) China/Muslim inventors (b) Japan (c) China silver (d) China trade,(a)
404,African slave trade:,(a) Promoted unity (b) Outrage to Islam (c) Restricted Sub-Sahara (d) Columbian Exchange,(d)
405,Absolute monarchs EXCEPT:,(a) Ultimate authority (b) Divine right (c) Lacked bureaucracy (d) Could make laws,(c)
406,17th/18th century Central Europe:,(a) 30 yr war (b) Commercialized (c) Monarchies (d) Capitalism all below,(d)
407,Capitalism characterized by EXCEPT:,(a) Elimination of risks (b) Private ownership (c) Profits (d) Supply/demand,(a)
408,The Enlightenment was:,(a) Unrelated to Sci (b) Goodness of human nature (c) Women vote (d) Permanent republic,(b)
409,Gorbachev regime differed by:,(a) Closed churches (b) Prevented ownership (c) Strict censorship (d) Allowed market economy,(d)
410,African National Congress:,(a) Formed after imperialism (b) Accused Communist (c) Decreased activism (d) Less support,(b)
411,Country changed allegiances WWI/WWII:,(a) Russia (b) Japan (c) China (d) Spain,(b)
412,Post-WWI territorial changes:,(a) Rewarded Russia (b) United Aust/Hung (c) Created Polish Corridor (d) Strengthened Ottoman,(d)
413,Japan/Western Europe shared:,(a) Industrialism (b) Militarism (c) Imperialism (d) Strong executive,(b)
414,The French Revolution:,(a) Women vote (b) Meeting goals (c) Success (d) Republican goals,(d)
415,Romantic movement:,(a) Return to classic (b) Elite classes (c) Emphasized emotion (d) Global,(d)
416,Early 20th century Russia:,(a) Lagged steel (b) Victory Russo-Jap (c) Gained Ottoman (d) Pan-Slavic Balkans,(d)
417,20th century primary product exporter:,(a) Germany (b) Argentina (c) Japan (d) France,(b)
418,Line joining equal rainfall:,(a) Isobar (b) Isohyet (c) Isotherm (d) Isoneph,(b)
419,Immediate cause WWII in Europe:,(a) Pact Germ/USSR (b) Depression (c) Invasion Poland (d) Versailles,(c)
420,First truly global war:,(a) Seven Years (b) Hundred Years (c) World War II (d) Thirty Years,(a)
421,NOT ethnic cleansing/genocide 20th C:,(a) Bosnia (b) Rwanda (c) Tibet (d) Venezuela,(d)
422,Revolution was independence movement:,(a) Haitian (b) French (c) Mexican (d) Russian,(a)
423,Correct philosophy pair:,(a) Marx-laissez (b) Nietzsche-existential (c) Owen-utilitarian (d) Smith-socialism,(b)
424,Ancient civ near Persian Gulf:,(a) Sumer (b) Egypt (c) Yellow River (d) Indus Valley,(a)
425,UNO came into existence:,(a) 1946 (b) 1945 (c) 1947 (d) 1950,(b)
426,Headquarter of UNO:,(a) New York (b) Washington (c) D.C. (d) Geneva,(a)
427,UN Security Council permanent members:,(a) 5 (b) 7 (c) 8 (d) 15,(a)
428,NOT principal organ UNO:,(a) General Assembly (b) Trusteeship (c) Security Council (d) WHO,(d)
429,Joined UNO 2002 as 190th member:,(a) Switzerland (b) Bahamas (c) Mauritius (d) Dominican Republic,(a)
430,UN day celebrated on:,(a) Dec 25th (b) Oct 24th (c) Nov 26th (d) Jan 1st,(b)
431,UN principal organs number:,(a) 4 (b) 5 (c) 6 (d) 7,(c)
432,Most important body UN:,(a) IMF (b) UNESCO (c) Security Council (d) Secretariat,(c)
433,NOT a UN Agency:,(a) WHO (b) ILO (c) FAO (d) ICRC,(d)
434,Non-permanent member term:,(a) 5 yrs (b) 4 yrs (c) 3 yrs (d) 2 yrs,(d)
435,Permanent seat HQ of ICJ:,(a) Paris (b) Geneva (c) Rome (d) Hague,(d)
436,Dr. Boutros-Ghali took over in:,(a) Dec 1990 (b) Jan 1991 (c) Jan 1992 (d) Dec 1991,(c)
437,Judges in the ICJ:,(a) 10 (b) 12 (c) 15 (d) 20,(c)
438,NOT principal body of UNO:,(a) Security Council (b) ICJ (c) Trusteeship (d) UNICEF,(d)
439,NOT permanent member UNO:,(a) USA (b) Russia (c) UK (d) Pakistan,(d)
440,Separate electorate first accepted:,(a) 1909 (b) 1919 (c) 1935 (d) 1937,(a)
441,NO Veto power in Security Council:,(a) UK (b) Canada (c) USA (d) France,(b)
442,Official working languages UNO:,(a) 8 (b) 7 (c) 6 (d) 5,(c)
443,HQ of ILO located at:,(a) Geneva (b) Hague (c) New York (d) Rome,(a)
444,NOT necessary UN qualification:,(a) Sovereign (b) Peace loving (c) Willing (d) Human rights,(d)
445,HQ of FAO located in:,(a) NY (b) Wash (c) Rome (d) France,(c)
446,Kofi Anan appointed as Sec Gen:,(a) 2000 (b) 1999 (c) 1998 (d) 1997,(d)
447,Peninsula between Black Sea/Azov:,(a) Iberian (b) Crimean (c) Kamchatka (d) Arabian,(b)
448,UN Sec Gen who died in air-crash:,(a) Trygve Lie (b) Dag Hammarskjöld (c) U Thant (d) Kofi Anan,(b)
449,"ILO, WHO, OPEC, UNDP match:","(a) A4, B3, C1, D2 (b) A4, B2, C1, D3 (c) A3, B4, C1, D2 (d) A2, B1, C3, D4",(a)
450,Wild life conservation dedicated:,(a) UNDP (b) WHO (c) UNESCO (d) UNFPQ,(a)
451,Welfare of children world:,(a) UNESCO (b) UNICEF (c) WHO (d) FAO,(b)
452,Year Pakistan became UN member:,"(a) 1946 (b) 1948 (c) 1949 (d) Sept, 1947",(d)
453,Principal organ social/econ affairs:,(a) Trusteeship (b) Security (c) Econ/Social Council (d) None,(c)
454,UN Agency HQ in Paris:,(a) UNICEF (b) ILO (c) UNESCO (d) FAO,(c)
455,UN General Assembly meets month:,(a) May (b) March (c) September (d) December,(c)
456,Normal tenure Sec Gen:,(a) 3 yrs (b) 4 yrs (c) 10 yrs (d) 5 yrs,(d)
457,Trygve Lie country:,(a) Swede (b) Burma (c) Norway (d) Austria,(c)
458,Black Sea Economic Zone members:,(a) 8 (b) 9 (c) 10 (d) 11,(d)
459,ICJ judge term:,(a) 5 yrs (b) 6 yrs (c) 9 yrs (d) 10 yrs,(c)
460,NOT an official language UNO:,(a) English (b) French (c) Chinese (d) Japanese,(d)
461,Nations signed UN charter established:,(a) 25 (b) 33 (c) 31 (d) 50,(d)
462,184th member UNO (1993):,(a) Monaco (b) Andorra (c) Macedonia (d) Eritrea,(b)
463,Standard of education Agency:,(a) UNICEF (b) UNESCO (c) UNEDA (d) SAARC,(b)
464,Commonwealth day observed:,(a) May 24 (b) Oct 24 (c) Nov 14 (d) Jan 25,(a)
465,Heads of Gov Commonwealth meet:,(a) Once a yr (b) Biennially (c) Twice a yr (d) No schedule,(b)
466,HQ of European Economic Community:,(a) Bonn (b) Rome (c) Brussels (d) Hague,(c)
467,Total Articles Charter UNO:,(a) 109 (b) 110 (c) 111 (d) 112,(c)
468,NATO treaty signed at:,(a) Geneva (b) Paris (c) Washington (d) Rome,(c)
469,Kurt Waldheim belonged to:,(a) Poland (b) Austria (c) USA (d) None,(b)
470,HQ of IRCC (ICRC) at:,(a) Berlin (b) Prague (c) Moscow (d) None,(d)
471,HQ of Interpol:,(a) Rome (b) Lyons (c) Paris (d) None,(b)
472,Pakistan is member of:,(a) SEATO (b) EEC (c) OPEC (d) None,(a)
473,First Chairman SAARC:,(a) Zia-ur-Rehman (b) H.M. Enhad (c) Birendra (d) Indra Gandhi,(b)
474,Econ/Social Council Regional Comm:,(a) 10 (b) 7 (c) 5 (d) 3,(c)
475,NOT a member EEC:,(a) Austria (b) Italy (c) France (d) Germany,(a)
476,Soft loans Asia Agency:,(a) IMF (b) Asian Dev Bank (c) IDA (d) World Bank,(b)
477,UN Charter signed in:,(a) 1947 (b) 1956 (c) 1945 (d) 1944,(c)
478,Colombo Plan incorrect:,(a) HQ Colombo (b) Economic dev (c) Silver Jubilee (d) All above,(a)
479,NOT a member ASEAN:,(a) Singapore (b) Philippines (c) Indonesia (d) Cambodia,(d)
480,UN Flag color combination:,(a) Red-Blue (b) Blue-White (c) White-Green (d) Only White,(d)
481,Cuban Missile Crisis:,(a) 1960 (b) 1962 (c) 1963 (d) 1964,(b)
482,Group-77 countries:,(a) 52 (b) 111 (c) 135 (d) None,(d)
483,Red Cross founded by:,(a) J.H. Durant (b) Baden Powell (c) Trygve Lie (d) Passey,(c)
484,HQ of Amnesty International:,(a) Geneva (b) London (c) Paris (d) NY,(a)
485,NAM statesmen:,(a) Tito/Nasser/Bhutto (b) Nehru/Nasser/Gandhi (c) Nasser/Tito/Nehru (d) Nehru/Chou/Bhutto,(b)
486,1955 Panchsheel conference:,(a) Cairo (b) Lahore (c) Bandung (d) Dhaka,(c)
487,Five principles Panchsheel:,(a) Corner stone India (b) Confucius (c) Mahavira (d) None,(c)
488,Panchsheel advocated by:,(a) India/Myammar (b) India/USA (c) India/Indo (d) Pak/Ind,(a)
489,Objective NAM:,(a) Racial (b) 3rd world (c) World economy (d) None,(c)
490,UAE federation of:,(a) 6 (b) 7 (c) 8 (d) 9,(b)
491,Permanent Secretariat SAARC:,(a) Dhaka (b) Karachi (c) Katmandu (d) None,(c)
492,First Sec Gen SAARC:,(a) Gandhi (b) Abul Ahsan (c) Birendra (d) Ershad,(c)
493,Major donor SAARC:,(a) Pak (b) Sri Lanka (c) India (d) Bangla,(b)
494,NAM 109th member:,(a) Singapore (b) South Africa (c) Myanmar (d) None,(c)
495,Commonwealth 51st member:,(a) Pak (b) South Africa (c) Macedonia (d) None,(b)
496,Admission State to UN:,(a) Simple majority (b) Unanimous (c) Sec Council (d) 2/3 majority GA,(d)
497,NOT function Trusteeship:,(a) Self gov (b) Membership confined (c) Supervises (d) Meetings twice yr,(b)
498,NOT member NATO:,(a) Greece (b) Pakistan (c) Turkey (d) Germany,(b)
499,NOT permanent member UN Security:,(a) Britain (b) Canada (c) China (d) France,(b)
500,NOT seceded from Commonwealth:,(a) Ireland (b) Pak (c) Malaysia (d) South Africa,(c)
501,NOT HQ Geneva:,(a) FAO (b) ILO (c) WHO (d) WTO,(a)
502,NOT HQ Washington:,(a) IBRD (b) IMF (c) UNICEF (d) IFC,(c)
503,East Timor continent:,(a) Asia (b) Africa (c) Europe (d) S America,(a)
504,Eritrea continent:,(a) Asia (b) Africa (c) Europe (d) Eritrea,(b)
505,Chronological order Sec Gen:,(a) U Thant/Kurt/Dag (b) Trygve/Dag/U Thant (c) Trygve/U Thant/Dag (d) U Thant/Dag/Trygve,(b)
506,New membership affected:,(a) decision SC/GA (b) GA decision on SC rec (c) joint decision (d) new membership,(b)
507,1943 Roosevelt/Churchill/Stalin:,(a) invade Germ (b) Axis action (c) Maintain peace (d) action Japan,(c)
508,1945 50 nations meeting:,(a) Dumbarton (b) London (c) San Fran (d) Yalta,(c)
509,SC membership 11 to 15:,(a) 1960 (b) 1965 (c) 1972 (d) 1975,(b)
510,Uniting for Peace resolution:,(a) 1950 (b) 1960 (c) 1965 (d) 1980,(a)
511,India became UN member:,(a) 1945 (b) 1947 (c) 1959 (d) 1960,(b)
512,Encourage private enterprise Agency:,(a) UNIDO (b) IFC (c) IMF (d) World Bank,(b)
513,Longest period Agency:,(a) ILO (b) UPU (c) WHO (d) WMO,(b)
514,EEC established in:,(a) 1957 (b) 1958 (c) 1959 (d) 1960,(b)
515,German reunification:,(a) 1989 (b) 1990 (c) 1991 (d) 1992,(b)
516,First GA meeting city:,(a) London (b) NY (c) San Fran (d) Teheran,(a)
517,GA meets regularly:,(a) month (b) 3 months (c) twice yr (d) once yr,(d)
518,Group 77 is:,(a) Economic (b) Political (c) Social (d) Cultural,(a)
519,Vienna HQ Agencies:,(a) Austria (b) Belgium (c) Denmark (d) Sweden,(a)
520,Vienna HQ EXCEPT:,(a) UNIDO (b) OPEC (c) UNDP (d) IAEA,(c)
521,Asian Dev Bank HQ:,(a) Jakarta (b) Singapore (c) Bangkok (d) Manila,(d)
522,Red Cross HQ:,(a) Geneva (b) Paris (c) Rome (d) Stockholm,(a)
523,Germany invaded Poland:,(a) 1938 (b) 1939 (c) 1940 (d) 1941,(b)
524,OPEC HQ:,(a) Algiers (b) Lagos (c) Kuwait (d) Vienna,(d)
525,Warsaw Treaty HQ:,(a) Berlin (b) Prague (c) Moscow (d) Warsaw,(c)
526,Arab League established:,(a) 1944 (b) 1945 (c) 1946 (d) 1947,(b)
527,IAEA created:,(a) 1945 (b) 1946 (c) 1955 (d) 1957,(d)
528,CIS established:,(a) 1989 (b) 1990 (c) 1991 (d) 1992,(c)
529,living standards underdeveloped Agency:,(a) IMF (b) UNICEF (c) UNDP (d) IDA,(d)
530,ICJ President term:,(a) 3 yrs (b) 5 yrs (c) 7 yrs (d) 9 yrs,(a)
531,Treaty Versailles peace:,(a) Asia (b) Middle East (c) Europe (d) None,(c)
532,NATO created:,(a) 1945 (b) 1947 (c) 1949 (d) 1951,(c)
533,UN Official languages:,(a) African/Germ (b) Arab/Russ (c) Arab/Jap (d) Chin/Hindi,(b)
534,Scandinavia constitutes:,(a) 9 (b) 10 (c) 11 (d) None,(d)
535,Equator passes through:,(a) Iraq (b) Malaysia (c) China (d) Hong Kong,(b)
536,Equator does NOT pass through:,(a) Egypt (b) Kenya (c) Uganda (d) Tanzania,(d)
537,Sun rises East due:,(a) West to East rot (b) East to West (c) S to N (d) None,(a)
538,Equal day/night dates:,(a) 21 Mar/24 Dec (b) 21 Mar/23 Sept (c) 14 Jan/22 June (d) None,(b)
539,Always equal day/night place:,(a) Equator (b) Poles (c) Cap (d) Can,(a)
540,Closed to Int'l Date Line:,(a) NZ (b) China (c) Japan (d) Malaysia,(a)
541,Longest day Northern Hem:,(a) 15 June (b) 20 June (c) 21 June (d) 22 Dec,(c)
542,Int'l Date Line along:,(a) 180 deg (b) 90 deg (c) 75 deg (d) None,(a)
543,Great Circle:,(a) Equator (b) Arctic (c) Cancer (d) None,(a)
544,Shortest day:,(a) 20 Dec (b) 22 Dec (c) 22 June (d) 22 Oct,(b)
545,Earth one rotation time:,(a) 23h 56m 4.9s (b) 23h 40m (c) 23h 30m (d) 24h 20m,(a)
546,Nautical mile equal to:,(a) 1008m (b) 1260m (c) 1825m (d) 1850m,(c)
547,Earth rotates axis:,(a) West to East (b) East to West (c) N to S (d) S to N,(a)
548,Frozen continent South Pole:,(a) Iceland (b) Greenland (c) Antarctica (d) None,(c)
549,NOT land-locked:,(a) Burma (b) Afghan (c) Nepal (d) None,(a)
550,'Tsunami' language:,(a) English (b) Arab (c) Hindi (d) Japanese,(d)
551,Earth rotates pointing towards:,(a) Pole Star (b) Moon (c) Sun (d) Pluto,(a)
552,Duration day/night diff increases:,(a) Equator to Poles (b) Poles to Equator (c) E to W (d) W to E,(a)
553,Earth-Sun distance smallest month:,(a) Dec (b) June (c) March (d) January,(d)
554,Watches set according to:,(a) Standard time (b) Local (c) GMT (d) None,(a)
555,Island of Cloves:,(a) Indo (b) China (c) Bahamas (d) Zanzibar,(d)
556,Great height (Golan?) located:,(a) Turkey (b) USA (c) UK (d) France,(a)
557,Sericulture means:,(a) Fruit trees (b) Vegetables (c) Silkworm (d) None,(c)
558,Height of Lahore from sea level:,(a) 702 ft (b) 704 ft (c) 710 ft (d) 712 ft,(a)
559,Height of Islamabad:,(a) 1500 ft (b) 2000 ft (c) 3000 ft (d) 4000 ft,(b)
560,Pak-Iran boundary complete:,(a) 1870 (b) 1872 (c) 1876 (d) 1880,(b)
561,Country NO railway:,(a) UAE (b) Maldives (c) Afghan (d) Lebanon,(c)
562,Samizdat:,(a) metal (b) Secret police (c) Underground press (d) None,(c)
563,First newspaper world:,(a) Peking news (b) Al Ahram (c) Izvestia (d) Le Monde,(a)
564,Father of medicines:,(a) Socrates (b) Pluto (c) Aristotle (d) Hippocrates,(d)
565,Plague spreads by:,(a) Cat (b) Rat (c) Monkey (d) Dog,(b)
566,Statue of Liberty gift to USA from:,(a) Greece (b) Brit (c) France (d) Switz,(c)
567,Suez Canal construction company:,(a) Asia (b) Europe (c) America (d) Africa,(d)
568,Pencils in one grouse (gross?):,(a) 132 (b) 24 (c) 144 (d) 12,(c)
569,AMAN secret agency of:,(a) USA (b) Germany (c) Russia (d) Spain,(b)
570,Greatest literary promoters Sufism:,(a) Hafiz (b) Omar Khy (c) Both (d) None,(c)
571,Bikanoor first space centre:,(a) Russia (b) Kazakhstan (c) China (d) USA,(b)
572,Arg-Brit Falkland war:,(a) 1980 (b) 1982 (c) 1984 (d) 1988,(b)
573,Rohtas Fort built by:,(a) Akbar (b) Sher Shah Suri (c) Humayun (d) Shah Jehan,(b)
574,"""Queen's House"" residence:",(a) Sri Lanka Pres (b) Indian (c) Belgium (d) Brit PM,(a)
575,Tupolev Tu-144 aircraft:,(a) USA (b) France (c) Russia (d) China,(c)
576,Pharaohs of Alexandria wonder:,(a) Light House (b) Leaning (c) Wall (d) Wall,(a)
577,Italy wonder located:,(a) Hanging (b) Leaning Tower (c) Budha (d) Wall,(b)
578,Lal Shahbaz Qalandar Sufi poet:,(a) Pushto (b) Urdu (c) Punjabi (d) Sindhi,(d)
579,Mayan airline of:,(a) Iran (b) China (c) India (d) Nepal,(c)
580,Lal Masjid/Jamia Hifza operation:,(a) Silence (b) Red (c) Military (d) None,(a)
581,Pearl of Gandhara city:,(a) Peshawar (b) Taxila (c) Harrapa (d) Mohanjodaro,(b)
582,Diplomacy/Nuclear Weapons books:,(a) Kissinger (b) Ford (c) Reagan (d) Bush,(a)
583,Gawadar Port lease to:,(a) China (b) USA (c) France (d) Singapore,(a)
584,Britain's oldest university:,(a) St Andrews (b) Oxford (c) Cambridge (d) St Helina,(b)
585,Largest state USA area:,(a) Alaska (b) Florida (c) Michigan (d) Hawaii,(a)
586,Largest forestland country:,(a) Brazil (b) Australia (c) US (d) South Africa,(a)
587,Pak Physics Nobel 1979:,(a) Dr. Abdul Salam (b) Saddat (c) Ali (d) Arfat,(a)
588,Political/Econ History Since 1947 author:,(a) Saeed (b) Omar Noman (c) Qureshi (d) Chaudhary,(b)
589,Equal day/night Mar 21 at:,(a) Cancer (b) All parallel (c) Equator (d) Capricorn,(b)
590,Int'l Relations between Wars author:,(a) Holsti (b) E.H. Carr (c) Cheema (d) None,(b)
591,Lunar eclipse occurs when:,(a) Moon between (b) Sun between (c) Earth between (d) right angles,(c)
592,Diet parliament of:,(a) France (b) Japan (c) China (d) Denmark,(b)
593,Rickets disease of:,(a) Blood (b) Bones (c) Muscles (d) Lungs,(b)
594,Vit C deficiency disease:,(a) Rickets (b) Night blind (c) Cancer (d) Scurvy,(d)
595,George W. Bush state:,(a) Cali (b) Texas (c) Virginia (d) India,(b)
596,FIA established:,(a) 1971 (b) 1972 (c) 1973 (d) 1975,(c)
597,May 3rd observed as:,(a) Environment (b) Rights (c) Press Freedom (d) None,(c)
598,Environmental hazard tree:,(a) Babul (b) Amaltas (c) Neem (d) Eucalyptus,(d)
599,EM radiation admitted by:,(a) Protons (b) X-rays (c) Electrons (d) None,(c)
600,Correct spelling:,(a) Bureaucracy (b) Beurucracy (c) Bureucracy (d) Baureucracy,(a)
601,Gandhara civ between:,(a) Chenab/Jhelum (b) Ravi (c) Jhelum/Kabul (d) Indus/Jhelum,(d)
602,Largest living bird:,(a) Ostrich (b) Duck (c) Kiwi (d) Peacock,(a)
603,Qantas airline of:,(a) Australia (b) Singapore (c) USA (d) UK,(a)
604,Anthra news agency of:,(a) Indonesia (b) China (c) Malaysia (d) Taiwan,(a)
605,City called Windy City:,(a) Tokyo (b) Chicago (c) Paris (d) Rome,(b)
606,Pak largest export partner:,(a) China (b) USA (c) S Arabia (d) Japan,(c)
607,Kharif crop:,(a) Wheat (b) Gram (c) Mustard (d) Rice,(d)
608,Normal body temp:,(a) 98.6 F (b) 98.7 F (c) 98.2 F (d) 97.4 F,(a)
609,Green leaf red light looks:,(a) Green (b) Black (c) Red (d) Violet,(b)
610,Red light traffic signal due:,(a) Wavelength (b) Beautiful (c) Eyesight (d) None,(a)
611,Shortest day N Hem:,(a) 20 Dec (b) 22 Dec (c) 20 June (d) None,(b)
612,Oldest barrage Pak:,(a) Guddu (b) Sukkur (c) Chasma (d) Kotri,(b)
613,US VP Nobel Peace 2007:,(a) Adams (b) Kissinger (c) Al-Gore (d) Chenny,(c)
614,Smallest protein unit:,(a) Starch (b) Carbo (c) Amino acid (d) Hemo,(c)
615,Vitamin clotting blood:,(a) Vit A (b) Vit C (c) Vit D (d) Vit K,(d)
616,Dafur Conflict:,(a) Somalia (b) Liberia (c) Sudan (d) Congo,(c)
617,Muslim Brotherhood party:,(a) Syria (b) Jordan (c) Egypt (d) Iran,(c)
618,HEC first chairman:,(a) Ata-ur-Rehman (b) Abbas (c) Qazi (d) Ahmad,(a)
619,Parachinar town of:,(a) N Waz (b) S Waz (c) Khyber (d) Kuram,(d)
620,"""Macbeth"" drama by:",(a) Shakespeare (b) Austen (c) Dickens (d) Milton,(a)
621,Doubly Landlocked:,(a) Iraq/Slov (b) Afghan/Ando (c) Uganda/Bur (d) Liecht/Uzb,(d)
622,Palassey battle:,(a) Clive (b) Canning (c) Hasten (d) Alam,(a)
623,Muslim League foundation:,(a) Aligarh (b) Lahore (c) Dhaka (d) None,(c)
624,Paradise Lost by:,(a) Milton (b) Dickens (c) William (d) Russell,(a)
625,Disease more common in males:,(a) Heart (b) Dementia (c) Color blind (d) Herpes,(c)
626,Direct Action Day date:,(a) 6 Aug 1946 (b) 16 Aug 1946 (c) 26 Aug (d) None,(b)
627,Archipelago:,(a) Cluster Islands (b) Group Seas (c) Students (d) Army,(a)
628,During rusting:,(a) Iron gains weight (b) loses (c) same (d) volatilizes,(a)
629,Smallest planet:,(a) Mercury (b) Mars (c) Neptune (d) Jupiter,(a)
630,US President killed in office:,(a) Truman (b) Nixon (c) Lincoln (d) Roosevelt,(c)
631,Oldest disease:,(a) Influenza (b) Malaria (c) Plague (d) Leprosy,(d)
632,Continent NO glacier:,(a) Africa (b) Australia (c) Asia (d) N America,(a)
633,NOT connected with climate study:,(a) Due pt (b) Hydrogram (c) Flash pt (d) None,(c)
634,Best electricity conductor:,(a) Iron (b) Aluminum (c) Copper (d) Silver,(d)
635,Cosmic rays:,(a) Charged (b) Charged/un (c) Uncharged (d) None,(b)
636,First Muslim woman Nobel:,(a) Benazir (b) Jalal (c) Sherin Abadi (d) None,(c)
637,Dec 9 observed as:,(a) Water (b) Env (c) Anti Corruption (d) Family,(c)
638,Kigali capital:,(a) Uganda (b) Togo (c) Namibia (d) Rwanda,(d)
639,SBP work amount:,(a) 20m (b) 30m (c) 40m (d) 50m,(b)
640,Subak Zai Dam location:,(a) Punjab (b) Sindh (c) Baluch (d) KPK,(c)
641,Oldest Anthem country:,(a) Japan (b) China (c) Russia (d) Greece,(a)
642,Big Ben:,(a) Clock (b) Tower (c) Cinema (d) Road,(a)
643,Rocket principle:,(a) Mass (b) Energy (c) Linear Mom (d) Angular,(c)
644,Nyere currency of:,(a) Niger (b) Nigeria (c) Togo (d) Switz,(b)
645,Mercury thermometric fluid:,(a) Low sp heat (b) More (c) visibility (d) None,(a)
646,Loggia:,(a) Pathway (b) Gallery (c) Carriage (d) Art,(b)
647,Largest Road Tunnel:,(a) Rokko (b) Appenine (c) Shinizu (d) St Goatherd,(d)
648,Apartheid:,(a) Racial Segregation (b) Unity (c) Extermination (d) Rocks,(a)
649,Cathay Pacific airline:,(a) China (b) USA (c) Hong Kong (d) France,(c)
650,Anemometer measure:,(a) Wind velocity (b) Magnetic (c) Elec (d) Graph,(a)
651,First Viceroy India:,(a) Ripon (b) Canning (c) Curzon (d) Mayo,(b)
652,Ultrasonic waves:,(a) High audio (b) Short (c) Vacuum (d) None,(a)
653,Helvetia old name:,(a) Neth (b) Jap (c) Hung (d) Switz,(d)
654,Great Sandy Desert:,(a) Australia (b) S Africa (c) Chad (d) China,(a)
655,WEF HQ:,(a) Davos (b) Cairo (c) Wash (d) Geneva,(a)
656,First Battle Tarain:,(a) 1190 (b) 1191 (c) 1192 (d) 1193,(b)
657,Bosphorus connects Black with:,(a) Aegean (b) Marmara (c) Red (d) Java,(b)
658,Pak got Lenin Prize:,(a) Fraz (b) Jalib (c) Zaheer (d) Faiz,(d)
659,Longest river Asia:,(a) Indus (b) Nile (c) Yangtze (d) Hang Ho,(c)
660,ATM abbreviation:,(a) Automated Teller Machine (b) Automatic (c) Auto (d) None,(a)
661,Master Builder Mughal:,(a) Shah Jahan (b) Jahangir (c) Akbar (d) Aurangzeb,(a)
662,Cataract disease:,(a) Ear (b) Nose (c) Eye (d) All,(c)
663,Ramallah HQ:,(a) West Bank (b) Gaza (c) Tunis (d) Jordan,(a)
664,Seattle seaport of:,(a) Germany (b) USA (c) Brit (d) France,(b)
665,Largest Muslim country:,(a) Sudan (b) Nigeria (c) Pak (d) Kazakhstan,(d)
666,Golden Gate located:,(a) NY (b) Mexico (c) London (d) San Fran,(d)
667,Sassi Punnu writer:,(a) Hashim Shah (b) Fazal (c) Warish (d) Hafiz,(a)
668,Malaysia currency:,(a) Peso (b) Dinar (c) Ringgit (d) Rupee,(c)
669,Pneumonia disease:,(a) Lungs (b) Liver (c) Kidney (d) Heart,(a)
670,Wall to divide Palestinians:,(a) Gaza (b) West Bank (c) Jerusalem (d) Golan,(a)
671,World's oldest city:,(a) Damas (b) Baghd (c) Jericho (d) Cairo,(c)
672,Taj Mahal state:,(a) UP (b) HP (c) MP (d) Maha,(a)
673,Invented paper:,(a) Egypt (b) Greek (c) Roman (d) Chinese,(b)
674,Frozen continent:,(a) Green (b) Ice (c) Antarctica (d) None,(c)
675,Monarchy exists in:,(a) Swed (b) Thai (c) Jap (d) All,(d)
676,Transformer used:,(a) Increase AC (b) Increase DC (c) Convert DC/AC (d) None,(a)
677,Last Supper creator:,(a) Vinci (b) Picasso (c) Rembr (d) Guljee,(a)
678,One mile in km:,(a) 1.7015 (b) 1.198 (c) 1.470 (d) 1.609,(d)
679,Vit from sunlight:,(a) Vit A (b) B (c) C (d) D,(d)
680,Deficiency iron:,(a) Anemia (b) Goiter (c) Scurvy (d) Rickets,(a)
681,Napoleon afraid of:,(a) Dog (b) Mon (c) Cat (d) Rat,(c)
682,Wana town:,(a) Baj (b) Khy (c) N Waz (d) S Waz,(d)
683,Lines parallel equator:,(a) Merid (b) Long (c) Lat (d) None,(c)
684,Fahrenheit 9/11:,(a) Book (b) Film (c) Report (d) Doc,(b)
685,Latakia seaport:,(a) Syria (b) Libya (c) Jordan (d) None,(a)
686,Finest harbour:,(a) London (b) Sydney (c) Mumbai (d) Karachi,(b)
687,Days/nights equal rays fall:,(a) Equator (b) S Pole (c) N Pole (d) None,(a)
688,Two Nation Theory founder:,(a) Iqbal (b) Sir Syed (c) Ch Rehmat (d) Quaid,(b)
689,Right to vote:,(a) Franchise (b) Priv (c) Init (d) Cons,(a)
690,Chenab Formula author:,(a) Abdul Qayyum (b) Gillani (c) Sultan (d) None,(a)
691,Shalimar Lahore year:,(a) 1634 (b) 1639 (c) 1642 (d) 1652,(c)
692,Electric filament element:,(a) Copper (b) Tungsten (c) Iron (d) Silver,(b)
693,South Asian landlocked:,(a) Sri Lanka (b) Bangla (c) Nepal (d) Mald,(c)
694,Abu Ghraib:,(a) PLO (b) Leb (c) Arab (d) Prison Iraq,(d)
695,Continent NO desert:,(a) Europe (b) Asia (c) Aust (d) N Amer,(a)
696,Scientist discovered Insulin:,(a) Banting (b) Joseph (c) McLeod (d) Prestley,(a)
697,Hepatitis disease:,(a) Liver (b) Lungs (c) Heart (d) Kidney,(a)
698,Feb 2005 first time vote:,(a) S Arabia (b) Kuwait (c) Oman (d) Bah,(a)
699,First woman speaker NA:,(a) Sumaira (b) Jalal (c) Fahmeeda (d) Tehmeena,(c)
700,NIKKEI stock exchange:,(a) NY (b) Tokyo (c) HK (d) London,(b)
701,"Pakistan renamed ""Micro Finance Bank"" as:",(a) Supporting (b) Kisan (c) Khushali (d) Cooperative,(c) Khushali Bank
702,"""Wheel"" is a symbol of:",(a) Peace (b) Progress (c) Prosperity (d) Speed,(b) Progress
703,'Sharme-el Sheikh' is an Egyptian seaport on:,(a) Black sea (b) Red sea (c) Mediterranean (d) Arabian,(b) Red sea
704,Badshahi mosque (Lahore) built in:,(a) 1670 (b) 1674 (c) 1678 (d) 1686,(b) 1674
705,"Historic site ""Mehrgarh"" discovered near:",(a) Indus (b) Kabul (c) Bolan (d) Hub,(c) Bolan River
706,FAO headquarters located in:,(a) Geneva (b) Rome (c) Montreal (d) Vienna,(b) Rome
707,Source of energy for human brain?,(a) Protein (b) Fats (c) Glucose (d) Hormones,(c) Glucose
708,Night blindness is due to lack of:,(a) Vit A (b) Vit B (c) Vit C (d) Vit D,(a) Vit A
709,Suez Canal links the:,(a) Pac/Atl (b) Med/Red Sea (c) Med/Black (d) North/Baltic,(b) Med/Red Sea
710,Olive Branch is a sign of:,(a) Progress (b) Peace (c) Hate (d) Love,(b) Peace
711,Santiago is the capital of:,(a) Chile (b) Hong Kong (c) Monaco (d) Spain,(a) Chile
712,Which is the smallest republic in the world:,(a) Vatican (b) Nauru (c) Chile (d) Slovakia,(b) Nauru
713,Nippon is the old name of:,(a) Japan (b) Thailand (c) Vatican (d) Sri Lanka,(a) Japan
714,News Agency of Egypt is called:,(a) Suna (b) SPI (c) Sky (d) MENA,(d) MENA
715,Gas commonly used in refrigerators?,(a) Neon (b) Freon (c) Oxygen (d) Hydrogen,(a) Neon (Note: Per text key)
716,Oxygen gas was discovered by:,(a) Pries Mate (b) Priestly (c) Faraday (d) B. Frank,(b) Priestly
717,Lahore Railway Station established in:,(a) 1846 (b) 1854 (c) 1864 (d) 1869,(c) 1864
718,Knesset is the parliament of:,(a) Japan (b) China (c) Russia (d) Israel,(d) Israel
719,UNESCO member on 1 Jan 2008?,(a) Pakistan (b) Iran (c) Afghanistan (d) None,(a) Pakistan
720,State Bank inaugurated by Quaid-e-Azam:,"(a) July 1, 1948 (b) 1947 (c) 1949 (d) None","(a) July 1, 1948 "
721,Durand Line Treaty signed in 1893 by:,(a) Aman Ullah (b) Abdul Rehman (c) Noor (d) Abdali,(b) Abdul Rehman
722,Lion's share of UNO's budget spent on:,(a) Diseases (b) Disasters (c) Peace (d) Poverty,(c) Peace
723,"""Greatest Middle East Initiative Plan"" for:",(a) Democracy (b) Help Israel (c) Kingship (d) None,(a) Democracy
724,How many time zones divide the world?,(a) 20 (b) 22 (c) 24 (d) 26,(c) 24
725,Muslim country with lowest per capita income?,(a) Somalia (b) Kenya (c) Uganda (d) Sreli,(a) Somalia
726,First country to issue currency notes:,(a) Greece (b) China (c) Italy (d) Russia,(b) China
727,Spartly islands disputed between China and:,(a) Vietnam (b) Malaysia (c) Philippine (d) All,(d) All of these
728,Most inventions after USA in last 2 decades?,(a) France (b) Switz (c) Germany (d) UK,(c) Germany (Per text)
729,"""The idea of Pakistan"" author?",(a) Stephen Cohen (b) Pinter (c) Martin (d) None,(a) Stephen Philip Cohen
730,Khanki Headworks situated on river:,(a) Chenab (b) Indus (c) Ravi (d) Jehlum,(a) Chenab
731,Hindi Year month brother of March?,(a) Chate (b) Basakh (c) Magh (d) Phaggan,(a) Chate
732,Capital of Taiwan is:,(a) Nanoi (b) Taipei (c) Minsk (d) Andorra,(b) Taipei
733,Olympic Airways belongs to:,(a) Greece (b) Canada (c) Germany (d) China,(a) Greece
734,"""Clash of Civilizations"" author?",(a) Huntington (b) Burk (c) John (d) Clinton,(a) Samuel Huntington
735,Oldest Human Rights organization:,(a) Antislavery (b) Asia Watch (c) Freedom House (d) Amnesty,(b) Asia Watch (Per key)
736,Oldest organization of the world?,(a) UNO (b) African Unity (c) League of Nations (d) C-wealth,(c) League of Nations
737,Father of computer?,(a) Charles Babbage (b) Zuse (c) John (d) None,(a) Charles Babbage
738,Days and nights equal all year?,(a) Nairobi (b) NY (c) London (d) Oslo,(a) Nairobi
739,Jehlum and Chenab rivers meet?,(a) Trimmu (b) Panjnad (c) Rasool Pur (d) Khanki,(a) Trimmu
740,Sky is blue due to:,(a) Refraction (b) Dispersion (c) Reflection (d) Diffraction,(b) Dispersion
741,Longest crop period between cultivation/harvest?,(a) Cotton (b) Sugarcane (c) Rice (d) Wheat,(b) Sugarcane
742,Silicon valley famous for:,(a) Computers (b) Film (c) Cars (d) Birds,(a) Computers
743,Largest search engine of Internet?,(a) MSN (b) Google (c) Yahoo (d) None,(b) Google
744,Furakha Dam Ganges dispute:,(a) Ind/Pak (b) Ind/Nepal (c) Ind/China (d) Ind/Bangla,(d) India and Bangladesh
745,Biggest bird in the world?,(a) Ostrich (b) Kiwi (c) Eagle (d) None,(a) Ostrich
746,"""Khaki Shadows"" writer:",(a) Burk (b) K.M. Arif (c) Baig (d) Askari,(b) K.M. Arif
747,"Dam violation ""Indus Water Treaty"":",(a) Sabsal (b) Baglihar (c) Wullar (d) All,(d) All of these
748,Causeway means:,(a) Raised path (b) Marsh (c) Salty (d) Road on Hill,(a) A raised path
749,Unit of energy same as that of:,(a) Work (b) Power (c) Force (d) Accel,(a) Work
750,"""Night Watch"" Paintings belongs to:",(a) Angelo (b) Picasso (c) Leonardo (d) Rembrand,(d) Rembrand
751,Freedom House HQ:,(a) Wash (b) Geneva (c) London (d) None,(a) Washington
752,Harappa city on bank of:,(a) Ravi (b) Chenab (c) Sutlej (d) Indus,(a) Ravi River
753,Bismarck statesman of:,(a) Germany (b) Russia (c) Italy (d) France,(a) Germany
754,Magnitude of Oct 2005 earthquake?,(a) 7.6 (b) 7.5 (c) 7.7 (d) 7.4,(a) 7.6
755,Country sent more paramedics post-2005 quake?,(a) China (b) Cuba (c) USA (d) UK,(b) Cuba
756,Largest producer of solar energy?,(a) USA (b) Germany (c) Switz (d) Holland,(a) USA (Per text data)
757,UN special representative relief Oct 2005?,(a) Senior Bush (b) Clinton (c) Annan (d) George W.,(a) Senior Bush (Per key)
758,Unwritten constitution country?,(a) USA (b) Den (c) NZ (d) UK,(d) United Kingdom
759,Gas speed of sound least in?,(a) N2 (b) O2 (c) CO2 (d) SO2,(d) Sulphur dioxide
760,Babari Mosque situated?,(a) Ayadhya (b) Agra (c) Dehli (d) Calcutta,(a) Ayadhya
761,NOT chemical action:,(a) Coal burn (b) Water to Stream (c) Food digest (d) Paper burn,(b) Conversation water into Stream
762,Black Forest mountain country?,(a) Germany (b) Russia (c) UK (d) USA,(a) Germany
763,Holocaust killing of Jews during:,(a) WWI (b) WWII (c) Germans (d) Americans,(b) WWII
764,LPG consists of:,(a) Butane/Propane (b) Eth/Hex (c) Eth/Non (d) None,(a) Butane and Propane
765,"Word ""Tsunami"" language:",(a) Japanese (b) Urdu (c) English (d) Greek,(a) Japanese
766,Decade 2004–2014 declared as:,(a) Environment (b) Poverty (c) Terror (d) Education,(a) Protection of Environment (Per key)
767,78th best picture Oscar Award:,(a) Munich (b) Capote (c) Crash (d) None,(c) Crash
768,US President during WWI?,(a) Wilson (b) Roosevelt (c) Kennedy (d) Nixon,(a) Woodrow Wilson
769,Major constituent of air:,(a) N2 (b) H2 (c) O2 (d) CO2,(a) Nitrogen
770,Diamond form of carbon:,(a) Crystalline (b) Amorphous (c) Chemical (d) Alkaline,(a) Crystalline
771,Shikwa/Jawab poems in book:,(a) Dara (b) Bal (c) Payam (d) Zerb,(a) Bang-e-Dara
772,Braille system introduced for:,(a) Blind (b) Deaf (c) Dumb (d) All,(a) Blind
773,Ghulam Muhammad barrage also:,(a) Chasma (b) Kotri (c) Gudu (d) Jinnah,(b) Kotri Barrage
774,Kremlin fortress location:,(a) Japan (b) China (c) Russia (d) Thai,(c) Russia
775,Intifada means:,(a) War (b) Active (c) Attack (d) Uprising,(d) Uprising
776,NOT a noble gas:,(a) Argon (b) Radon (c) Neon (d) Bromine,(d) Bromine
777,Gas used to manufacture chloroform?,(a) Methane (b) Ethane (c) Propane (d) Chlorine,(d) Chlorine
778,Present in hard water?,(a) Calcium (b) Aluminum (c) Sodium (d) Chlorine,(a) Calcium
779,Memories autobiography?,(a) Austen (b) Clinton (c) Nixon (d) Bush,(c) Richard Nixon
780,"""Macbeth"" drama by:",(a) Shakespeare (b) Austen (c) Dickens (d) Milton,(a) Shakespeare
781,"""No restriction in Islam"" verse in:",(a) Baqra (b) Alaq (c) Kasur (d) None,(a) Sura Baqra
782,Which is a mixture?,(a) Gun powder (b) Iron Sulp (c) Brass (d) Dry ice,(a) Gun powder (Note: Brass is alloy)
783,Gas used in cigarette lighters?,(a) Butane (b) Methane (c) Propane (d) Radon,(a) Butane
784,Hardest element?,(a) Copper (b) Diamond (c) Iron (d) Silicon,(b) Diamond
785,Gas in air unites with many metals?,(a) H2 (b) O2 (c) Helium (d) CO2,(b) Oxygen
786,Speleology is study of:,(a) Soil (b) Cave (c) Rain (d) Cloud,(b) Cave
787,Chemical name of Vit C?,(a) Citric (b) Ascorbic (c) Oxalic (d) Nitric,(b) Ascorbic Acid
788,Chief constituent of Gobar gas?,(a) Methane (b) Ethane (c) Propane (d) Chlorine,(a) Methane
789,Nightingale Florence was a:,(a) Nurse (b) Soldier (c) Reformer (d) None,(a) Nurse
790,Main purpose of WBC?,(a) Nutrients (b) Infection (c) Oxygen (d) Strength,(b) To combat infection
791,Oldest disease:,(a) Influenza (b) Malaria (c) Plague (d) Leprosy,(a) Influenza (Per key)
792,Continent NO glacier:,(a) Africa (b) Australia (c) Asia (d) N America,(b) Australia
793,Rift valley?,(a) Rhine (b) Thames (c) Indus (d) None,(a) The Rhine valley
794,ISI Military Intelligence of:,(a) Iran (b) UK (c) Pakistan (d) USA,(c) Pakistan
795,RBCs formed in:,(a) Liver (b) Bone marrow (c) Kidneys (d) Heart,(b) Bone marrow
796,Total blood volume normal human:,(a) 5-6 litres (b) 3-4 (c) 8-10 (d) 10-12,(a) 5-6 litres
797,Lungs situated in:,(a) Abdominal (b) Pericardial (c) Buccal (d) Thoracic,(d) Thoracic cavity
798,Number of bones in adult:,(a) 210 (b) 208 (c) 206 (d) 212,(c) 206
799,Largest contributor UNO budget:,(a) USA (b) Japan (c) Russia (d) China,(a) USA
800,Pancreas secretes:,(a) Insulin (b) Vit A (c) Bile (d) None,(a) Insulin
801,Strongest muscle found in:,(a) Hands (b) Buttocks (c) Neck (d) Legs,(b) Buttocks
802,Human cell chromosomes:,(a) 44 (b) 46 (c) 48 (d) 50,(b) 46
803,Enzymes help in:,(a) Respiration (b) Digestion (c) Immune (d) Repro,(b) Digestion of Food
804,Main function of kidney:,(a) BP (b) Temp (c) Remove waste (d) Digest,(c) Remove waste products
805,Function of Hemoglobin:,(a) Oxygen (b) Bacteria (c) Anemia (d) Energy,(a) To transport Oxygen
806,Shintoism followed in:,(a) China (b) Thai (c) Nepal (d) Japan,(d) Japan
807,Largest internal organ:,(a) Brain (b) Heart (c) Skin (d) Liver,(d) Liver
808,Founder of Algebra?,(a) Khwarizmi (b) Khayyam (c) Tze (d) Yousaf,(a) Al-Khwarizmi
809,Martin Luther was a:,(a) Founder Protestant (b) Poetry (c) France (d) All,(a) Founder of Protestant Sect
810,Part coordinates organ functions?,(a) Heart (b) Liver (c) Brain (d) Kidneys,(c) Brain
811,Master gland:,(a) Pancreas (b) Thyroid (c) Pituitary (d) Spleen,(c) Pituitary
812,Richest source Vit A:,(a) Orange (b) Apple (c) Eggs (d) Meat,(c) Eggs
813,Helvetia old name of:,(a) Neth (b) Hung (c) Jap (d) Switz,(d) Switzerland
814,Great Sandy Desert in:,(a) Australia (b) S Africa (c) Wash (d) China,(a) Australia
815,Balanced diet contains:,(a) Animal (b) Macro/Micro (c) Food nutrients (d) Butter,(c) Food nutrients for growth
816,Wisest bird in Europe?,(a) Owl (b) Eagle (c) Parrot (d) Sparrow,(a) Owl
817,NOT Vitamin B complex:,(a) Thiamine (b) Ascorbic (c) Riboflavin (d) Folic,(b) Ascorbic Acid
818,Abel Tasman discovered:,(a) Aust (b) USA (c) NZ (d) Georgia,(c) Newzealand
819,Vitamins stored in liver?,(a) Vit A (b) Vit C (c) Vit D (d) Vit K,(a) Vit A
820,Tissue culture:,(a) biochemical (b) Storage (c) grafting (d) None,(a) Prep for biochemical exam
821,NOT member of G-8?,(a) China (b) Russia (c) USA (d) Japan,(a) China
822,Taliban movement 1994 from:,(a) Kabul (b) Hirat (c) Kandhar (d) None,(c) Kandhar
823,Iran-Pak linked rail cities:,(a) Quetta-Zedan (b) Cham-Tehr (c) Sheraz (d) Pesha,(a) Quetta-Zedan
824,Hiffa Seaport of:,(a) Israel (b) Leb (c) Egypt (d) Canada,(a) Israel
825,GMT established:,(a) 1864 (b) 1880 (c) 1882 (d) 1884,(d) 1884
826,"""Struggle for Pakistan"" author?",(a) Qureshi (b) Aziz (c) Burk (d) Chaudhary,(a) I.H. Qureshi
827,3rd founder ECO:,(a) Syria (b) Afghan (c) Turkey (d) Turkmen,(c) Turkey
828,Zeros in one trillion?,(a) 12 (b) 13 (c) 14 (d) 10,(a) Twelve
829,Vit for eye function:,(a) Vit B (b) Vit C (c) Vit A (d) Vit D,(c) Vitamin A
830,World Trade Centre location name:,(a) Ground Zero (b) Paradise (c) Golden (d) City,(a) Ground Zero
831,Blood plasma percentage:,(a) 35% (b) 40% (c) 50% (d) 65%,(d) 65% (Per text answer key)
832,Gestapo secret police of:,(a) Italy (b) Russia (c) Germany (d) USA,(c) Germany
833,National floral symbol Pak?,(a) Pink Rose (b) Jasmine (c) White (d) Motia,(b) Jasmine (Chambeli)
834,Diabetes is disease of:,(a) Liver (b) Pancreas (c) Kidney (d) Lungs,(b) Pancreas
835,Myopia is defect of:,(a) Close (b) Distant (c) Coloured (d) None,(b) Distant objects
836,Average heartbeat per minute:,(a) 50 (b) 72 (c) 80 (d) 60,(b) 72
837,Essential for RBC formation:,(a) Vit C (b) Folic Acid (c) Calcium (d) Vit A,(b) Folic Acid
838,1st Pak ambassador to UNO:,(a) Khan (b) Nishtar (c) Bukhari (d) None,(c) Ahmad Shah Patres Bukhari
839,Father of modern psychology?,(a) Freud (b) Ibn-e-Kh (c) Smith (d) Darwin,(a) Sigmund Freud
840,1st CM Punjab:,(a) Nishtar (b) Hussain (c) Memdoot (d) Daultana,(c) Iftikhar Hussain Memdoot
841,Zinedine Zidane birth country:,(a) Morocco (b) Senegal (c) Cameroon (d) Algeria,(d) Algeria
842,Choreography is art of:,(a) Dancing (b) Music (c) Garden (d) Fight,(a) Art of dancing
843,Doctrine of necessity case:,(a) Tamiz (b) Dosso (c) Asma (d) Nusrat,(a) Maulvi Tamiz-ud-Din Vs State
844,AWACS abbreviation:,(a) Airbrone Warning and Control System,(a)
845,Blood group receive any?,(a) A (b) AB (c) B (d) O,(b) AB
846,Writ commanding produce body:,(a) Quo (b) Certiorari (c) Prohib (d) Habeas,(d) Writ of habeas Corpus
847,Cause of pipeline project failure?,(a) Opinion (b) USA pressure (c) High price (d) Tension,(b) Economic and political pressure of USA
848,Amicus Curiae means:,(a) Jurist advice (b) Ambass (c) Law break (d) Friend,(a) Person invited to advise court
849,"""Nuclear Fission"":",(a) splits (b) join (c) break (d) All,(a) Atom splits into two masses
850,Sinkiang Muslims called:,(a) Ulghur (b) Bantu (c) Hutu (d) Berber,(a) Ulghur
851,Authority of Bible Christianity?,(a) Evangelical (b) protestant (c) Catholic (d) None,(a) Evangelical
852,Latani River country:,(a) Syria (b) Lebanon (c) Turkey (d) Sudan,(b) Lebanon
853,"""Ikebana"" is art of:",(a) Flowers (b) fighting (c) dancing (d) None,(a) Japanese Art of flower arrangement
854,Pariah state:,(a) Acceptable (b) Protected (c) Avoided (d) None,(c) State not acceptable/avoided
855,Track-II Diplomacy:,(a) Official (b) Unofficial (c) War (d) None,(b) Using unofficial channels
856,Oldest stock exchange?,(a) NY (b) Tokyo (c) London (d) None,(c) London Stock Exchange
857,Constitutional Monarchy to women?,(a) Nepal (b) Sweden (c) Japan (d) Canada,(b) Sweden
858,Stock market down falling called:,(a) Bullish (b) Bearish (c) Falling (d) Crashing,(b) Bearish
859,River crosses Equator twice?,(a) Amazon (b) Congo (c) Nile (d) Ganga,(b) Congo
860,Heart attack caused due to:,(a) Sugar (b) Cholesterol (c) Protein (d) Urea,(b) Cholesterol
861,Night blindness Vit lack?,(a) Vit A (b) Vit B (c) Vit C (d) Vit D,(a) Vitamin A
862,Conqueror of central Asia?,(a) Saad (b) Qatiba (c) Abu (d) None,(b) Qatiba-bin-Muslim
863,Primary colours?,"(a) R, B, G (b) W, R, Blk (c) Blk, R, B (d) G, R, Blk","(a) Red, Blue, Green "
864,Iraq wonder?,(a) Hanging Gardens (b) Rhodes (c) Taj (d) Pharos,(a) Hanging gardens
865,Oldest invention:,(a) Clock (b) Microscope (c) Barometre (d) Cycle,(a) Clock
866,Holocaust killing of Jews during:,(a) WWI (b) WWII (c) Germans (d) Japanese,(b) WWII
867,Meningitis caused by:,(a) Fungi (b) Salmonella (c) Meningococcus (d) Virus,(c) Meningococcus
868,Qutab-ud-Din Aibak died playing:,(a) Polo (b) Cricket (c) Hockey (d) Buzakashi,(a) Polo (Chugan)
869,Babar's tomb in:,(a) Agra (b) Delhi (c) Kabul (d) Lahore,(c) Kabul
870,SBP work amount Rs?,(a) 20m (b) 30m (c) 35m (d) None,(b) Thirty Millions
871,Al-Hilal newspaper associate:,(a) Johar (b) Azad (c) Khan (d) Shaukat,(b) Maulana Abul Kalam Azad
872,Babar came from:,(a) Farghana (b) Khiva (c) Kabul (d) Seistan,(a) Farghana
873,King's tomb NOT in sub continent?,(a) Jahangir (b) Akbar (c) Babar (d) Aurangzeb,(c) Babar
874,Largest state India?,(a) UP (b) MP (c) Banarass (d) Madrass,(b) Madhya Perdesh
875,PM with longest tenure?,(a) Gandhi (b) Benazir (c) Bandaranaike (d) None,(a) Indra Gandhi
876,Harry Potter character of:,(a) J.K. Rowling (b) Marshal (c) Menin (d) None,(a) J.K. Rowling
877,Chromosomes:,(a) nucleus (b) biggest (c) DNA (d) Visible,(c) Made up of DNA
878,Leukemia disease of:,(a) Lungs (b) Blood (c) Skin (d) Nerves,(b) Blood
879,Alzheimer's degeneration of:,(a) Kidney (b) Nerve cell (c) Liver (d) Bone,(b) Nerve cell
880,E=mc2 what is C?,(a) light v (b) power (c) radius (d) voice v,(a) Velocity of light
881,Iron deficiency causes:,(a) Goiter (b) Scurvy (c) Anemia (d) Rickets,(c) Anemia
882,"""History of God"" writer?",(a) Chomsky (b) Armstrong (c) Sheldon (d) None,(b) Karen Armstrong
883,Situated below sea level?,(a) Finland (b) Holland (c) Switz (d) NZ,(b) Holland (Netherlands)
884,"""Spirit of Islam"" author?",(a) Khan (b) Ali (c) Zafar (d) Shibli,(b) Syed Ameer Ali
885,Biggest oil field Iraq?,(a) Kirkuk (b) Mosal (c) Basra (d) None,(a) Kirkuk oil field
886,MOSSAD secret agency of?,(a) Israel (b) Iraq (c) Russia (d) Germany,(a) Israel
887,Trachoma disease of:,(a) Liver (b) Eyes (c) Lungs (d) Kidneys,(b) Eyes
888,"""Creation of Pakistan"" writer?",(a) Qadri (b) Qureshi (c) Chaudhary (d) Saeed,(b) I.H. Qureshi
889,Autopsy connected with:,(a) Post-mortem (b) Study (c) Cancer (d) None,(a) Post-mortem
890,Egypt Suez nationalised?,(a) 1950 (b) 1954 (c) 1956 (d) 1960,(c) 1956
891,Silicon Valley state?,(a) Virginia (b) Alaska (c) California (d) Maryland,(c) California
892,Akhori Dam location?,(a) Punjab (b) Sindh (c) KPK (d) Baluch,(a) Punjab
893,Taklamakan desert?,(a) Mongolia (b) Russia (c) Kazakhstan (d) None,(a) Mongolia (Per text)
894,Khalil Jibran belonged to:,(a) Jordan (b) Syria (c) Lebanon (d) Turkey,(c) Lebanon
895,Civilization Tigris bank?,(a) Indus (b) Samarian (c) Egypt (d) Greek,(b) Samarian civilization
896,Hollywood location?,(a) Maryland (b) Virginia (c) California (d) NY,(c) California
897,Defeated Mongols 14th C?,(a) Shah (b) Berber (c) Babar (d) None,(a) Khawarzim Shah (Per text)
898,"Meaning of ""Vishnu""?",(a) preserver (b) helper (c) destroyer (d) creator,(a) The preserver
899,"""Armageddon""?",(a) battle (b) last day (c) film (d) None,(a) Final battle world end
900,Salisbury old name:,(a) England (b) Petrograd (c) Harare (d) Mumbai,(c) Harare
901,"""Ain-i-Akbari"" author?",(a) Firdausi (b) Ghalib (c) Abul Fazal (d) None,(c) Abul Fazal
902,"""A Passage to India"" writer?",(a) Forster (b) Nehru (c) Keats (d) None,(a) E.M. Forster
903,Written by Nehru?,(a) Passage (b) Experiments (c) Freedom (d) Discovery,(d) The Discovery of India
904,Author Anand Math?,(a) Iqbal (b) Chatterjee (c) Tara (d) None,(b) Bankim Chandra Chatterjee
905,Oldest book:,(a) Mahab (b) Rig Veda (c) Atharva (d) Upanishads,(b) Rig Veda
906,"Author ""Shahnama"" & ""Akbarnama""?",(a) Firdausi/Abul (b) Fazal/Firdausi (c) Fazal/Syed,(a) Firdausi and Abul Fazal
907,"""India Divided"" author?",(a) Nehru (b) Prashad (c) Azad (d) Kabir,(b) Rajendra Prashad
908,Laissez Faire theory?,(a) Marshall (b) Malthus (c) Smith (d) None,(c) Adam Smith
909,"Known as ""Fuehrer""?",(a) Stalin (b) Lenin (c) Hitler (d) Bismarck,(c) Hitler
910,Sea route to India?,(a) Vasco (b) Columbus (c) Magellan (d) Hopkins,(a) Vasco de Gama
911,Senate constitution Intro:,(a) 1956 (b) 1962 (c) 1973 (d) None,(c) 1973
912,Otto von Bismarck name:,(a) Commoner (b) Blood/Iron (c) Old Man (d) Destiny,(b) Man of Blood and Iron
913,Marshal Tito was:,(a) Egypt (b) WWII (c) Yugoslavia (d) None,(c) President of Yugoslavia
914,"""Nightingale of India""?",(a) Pandit (b) Naidu (c) Soraiya (d) None,(b) Sarojini Naidu
915,1st lady PM world?,(a) Sirimavo (b) Thatcher (c) Indira (d) Benazir,(a) Smit Sirimavo Bandaranaike
916,1st navigator sail round?,(a) Polo (b) Columbus (c) Amundsen (d) Magellan,(d) Magellan
917,1st Dry Port 1974 city?,(a) Karachi (b) Lahore (c) Sialkot (d) Quetta,(b) Lahore
918,Vasco de Gama was a:,(a) Australian (b) Portuguese (c) British (d) French,(b) Portuguese explorer
919,1st woman North Pole?,(a) Fran (b) Valentina (c) Karoline (d) None,(a) Mrs. Fran Phipps
920,Fa hien was a:,(a) Chinese traveller (b) sailor (c) Norw (d) Jap,(a) Chinese traveller
921,Known as 'Little Corporal'?,(a) Hitler (b) Napoleon (c) Gladstone (d) None,(b) Napoleon Bonaparte
922,Valentina Tereshkova 1st:,(a) Channel (b) N Pole (c) S Pole (d) None,(d) None (1st woman space)
923,Mona Liza artist:,(a) French (b) Italian (c) German (d) None,(b) Italian artist
924,Mother Teresa born in:,(a) Switz (b) India (c) Germany (d) Albania,(d) Albania
925,Blind writing inventor?,(a) Bunsen (b) Braille (c) Davy (d) Huygens,(b) Louis Braille
926,Freud associated with:,(a) Detective (b) Med (c) Psychology (d) Leprosy,(c) Psychology
927,1st human space traveller?,(a) Aldrin (b) Boreman (c) Gagarin (d) Titov,(c) Yuri Gagarin
928,Zambia freedom struggle?,(a) Lumumba (b) Kaunda (c) Kenyatta (d) None,(b) Kenneth Kaunda
929,Socrates disciple:,(a) Plato disciple Socrates,(b)
930,US President incorrect?,(a) Slavery (b) 16th (c) assass (d) first,(d) He was the first President
931,Martin Luther King was:,(a) social (b) US civil rights (c) Sec Gen (d) None,(b) Black US civil rights leader
932,Pioneers modern nursing?,(a) Nightingale (b) Teresa (c) Garbo (d) Zinta,(a) Florence Nightingale
933,Oldest religion:,(a) Judaism (b) Islam (c) Christianity (d) Hinduism,(d) Hinduism (Per text)
934,Largest religion:,(a) Islam (b) Hinduism (c) Christianity (d) Judaism,(c) Christianity
935,Buddhism founded?,(a) 500 BC (b) 525 BC (c) 400 BC (d) 300 BC,(b) 525 BC
936,No sacred text religion?,(a) Taoism (b) Shintoism (c) Confucianism (d) Judaism,(b) Shintoism
937,Universal gravitation:,(a) Kepler (b) Newton (c) Galileo (d) Copernicus,(b)
938,Founder Arya Samaj?,(a) Vivekenanda (b) Dayananda (c) Shankar (d) None,(b) Swami Dayananda
939,Lumbini sacred to:,(a) Muslims (b) Buddhists (c) Christians (d) Sikhs,(b) Buddhists
940,Lumbini location:,(a) Bengal (b) Bihar (c) Nepal (d) UP,(c) Nepal
941,Confucianism main religion:,(a) Arabia (b) China/Taiwan (c) Japan (d) Nepal,(b) China and Taiwan
942,Confucianist sacred text?,(a) Tripitaka (b) Analects (c) Torach (d) None,(b) Analects
943,Jesus Christ birth:,(a) Iraq (b) Jerusalem (c) Mecca (d) Madina,(b) Jerusalem (Note: Bethlehem in key)
944,Christianity years old:,(a) 1500 (b) 2000 (c) 2500 (d) >2500,(b) 2000 years
945,Sacred place Christians:,(a) Nazareth (b) Jerusalem (c) Mecca (d) None,(b) Jerusalem
946,Founded Judaism:,(a) Muhammad (b) Jesus (c) Moses (d) None,(c) Moses
947,Stock exchanges Pak?,(a) 2 (b) 3 (c) 4 (d) 5,(b)
948,Started ancient Olympic?,(a) Romans (b) Greeks (c) Egyptians (d) None,(b)
949,Ancient Olympics till:,(a) 200 BC (b) 394 BC (c) 300 BC (d) 370 BC,(b)
950,Modern Games revived after:,(a) 1000 yr (b) 1200 (c) 1500 (d) 2000,(c)
951,Modern Olympics revived by:,(a) Dutch (b) Greek (c) French (d) German,(c) A French nobleman
952,Father modern Olympics?,(a) Dover (b) Coubertin (c) Theodosius (d) Curtis,(b) Pierre de Coubertin
953,1st modern Olympic year?,(a) 1908 (b) 1904 (c) 1896 (d) 1895,(c) 1896
954,IOC formed year?,(a) 1845 (b) 1875 (c) 1894 (d) 1895,(c) 1894
955,IOC Headquarters:,(a) Olympia (b) Lausanne (c) Paris (d) Athens,(b) Lausanne
956,Summer Olympic symbol:,(a) same (b) different color (c) blue (d) 4 rings,(b) Five rings different colour
957,1st modern games place?,(a) Olympia (b) Athens (c) Seoul (d) LA,(b) Athens
958,1st rocket Pak space:,(a) Akbar (b) Babar (c) Badar (d) Ayyubi,(c) Badar
959,Motorway-1 connects:,(a) Lah-Rawal (b) Lah-Faisal (c) Faisal-Pesha (d) Pesha-Isla,(c) Faisalabad - Peshawar
960,Olympic Flag background:,(a) Yellow (b) White (c) Light Blue (d) Silver,(b) White
961,"""Law Courts Glass House"" writer?",(a) Kayyani (b) Sajjad (c) Ajmal (d) None,(a) Justice (Rtd) Kayyani
962,Merdeka Cup associate:,(a) Badminton (b) Volleyball (c) Hockey (d) Football,(d) Football
963,Reliance Cup associate:,(a) Hockey (b) Cricket (c) Football (d) Tennis,(b) Cricket
964,Former name Reliance Cup?,(a) Uber (b) Thomas (c) Rothman (d) Prudential,(d) Prudential Cup
965,Cup NOT Badminton:,(a) Uber (b) Thomas (c) Yonex (d) Beighton,(d) Beighton Cup
966,Term 'Knock Out' associate:,(a) Football (b) Basket (c) Cricket (d) Boxing,(d) Boxing
967,Cricket 'Long Top':,(a) before (b) behind (c) left (d) None,(b) position behind batsman
968,Hockey associated term?,(a) Short Corner (b) Dribble (c) Bully (d) Hat Trick,(c) Bully
969,Grand Prix associate:,(a) Tennis (b) Badminton (c) Hockey (d) Cricket,(a) Tennis
970,Wimbledon associate:,(a) Golf (b) Lawn Tennis (c) Hockey (d) Badminton,(b) Lawn Tennis
971,Term 'Butterfly' sports?,(a) Basket (b) Swimming (c) Rowing (d) Golf,(b) Swimming
972,'Dribbling' NOT associate?,(a) Hockey (b) Football (c) Basket (d) Baseball,(d) Baseball
973,Term 'smash' sports:,(a) Lawn Tennis (b) Badminton (c) Volleyball (d) Hockey,(b) Badminton
974,Term 'bogey' associate:,(a) Tennis (b) Golf (c) Baseball (d) Chess,(b) Golf
975,'Epsom' associate:,(a) Polo (b) Water (c) Table (d) Horse Riding,(d) Horse Riding
976,Pivot associated game?,(a) Hockey (b) Basketball (c) Golf (d) Tennis,(b) Basketball
977,Term 'deuce' games?,(a) Basket/Bad (b) Bad/Tennis (c) Volley/Tennis,(b) Badminton and Tennis
978,Term Bishop associated?,(a) Golf (b) Chess (c) Bridge (d) Billiards,(b) Chess
979,Term L.B.W. associate:,(a) Tennis (b) Badminton (c) Hockey (d) Cricket,(d) Cricket
980,Players cricket team:,(a) 7 (b) 11 (c) 6 (d) 8,(b) 11
981,Players Basketball side:,(a) 11 (b) 7 (c) 5 (d) 4,(c) 5
982,Duration normal half Hockey:,(a) 45 min (b) 40 (c) 35 (d) 30,(c) 35 min
983,Volleyball invented where?,(a) Eng (b) USA 1894 (c) Canada (d) Aust,"(b) USA, 1894 "
984,Players Football team?,(a) 10 (b) 11 (c) 12 (d) 6,(b) 11
985,Players women's Basketball:,(a) 5 (b) 6 (c) 7 (d) 10,(a) 5
986,Swaythling Cup associate:,(a) Lawn Tennis (b) Table Tennis (c) Hockey (d) Golf,(b) Table Tennis
987,Pak longest border with:,(a) India (b) Afghan (c) Iran (d) China,(b) Afghanistan
988,Lawn tennis origin:,(a) England (b) France (c) Australia (d) USA,(a) England
989,'The Ashes' matches:,(a) Aust/Indies (b) Aust/Eng (c) Eng/Indies (d) NZ/Indies,(b) Australia and England
990,'Bully' associated sports?,(a) Hockey (b) Football (c) Golf (d) Polo,(a) Hockey
991,'Aga Khan Cup' associate:,(a) Basket (b) Hockey (c) Table (d) Football,(b) Hockey
992,EZAR Cup associate sports?,(a) Hockey (b) Football (c) Polo (d) Tennis,(c) Polo
993,'Beighton Cup' associate:,(a) Football (b) Hockey (c) Boxing (d) Badminton,(b) Hockey
994,Stadium 'Eden Gardens' at:,(a) Kolkota (b) Mumbai (c) Chennai (d) Banglore,(a) Kolkota
995,'Bishop' term associated?,(a) Cricket (b) Polo (c) Chess (d) Golf,(c) Chess
996,Football World Cup most times?,(a) Brazil 4 (b) Brazil 5 (c) Germ/Brazil 4 (d) Brazil/Germ 3,"(b) Brazil, 5 times "
997,Tagore Nobel work:,(a) Eve (b) Morn (c) Gitanjali (d) Gora,(c) Gitanjali
998,Nobel Prize value enhanced in:,(a) 1988 (b) 1989 (c) 1990 (d) 1987,(b) 1989
999,Nobel Prize instituted year?,(a) 1896 (b) 1901 (c) 1876 (d) 1900,(b) 1901
1000,Country awards Nobel Prize?,(a) America (b) England (c) Sweden (d) Ireland,(c) Sweden
1001,National flower of Pakistan?,(a) Jasmine (b) Rose (c) Sunflower (d) Lily,(a) Jasmine
1002,The Indus River originates from:,(a) Tibet (b) Punjab (c) Sindh (d) Kashmir,(a) Tibet
1003,Pakistan Resolution was passed in:,(a) 1930 (b) 1935 (c) 1940 (d) 1947,(c) 1940
1004,The first constitution of Pakistan was enforced in:,(a) 1956 (b) 1962 (c) 1973 (d) 1949,(a) 1956
1005,The national poet of Pakistan is:,(a) Faiz Ahmed Faiz (b) Allama Iqbal (c) Hafeez Jalandhari (d) Ahmad Faraz,(b) Allama Iqbal
1006,The Himalayas are an example of:,(a) Fold mountains (b) Block mountains (c) Volcanic mountains (d) Residual mountains,(a) Fold mountains
1007,The SI unit of electric current is:,(a) Volt (b) Ohm (c) Ampere (d) Watt,(c) Ampere
1008,Which gas is essential for respiration? ,(a) Nitrogen (b) Oxygen (c) Carbon dioxide (d) Helium,(b) Oxygen
1009,The powerhouse of the cell is:,(a) Nucleus (b) Ribosome (c) Mitochondria (d) Chloroplast,(c) Mitochondria
1010,The chemical symbol for sodium is:,(a) Na (b) So (c) Sn (d) S,(a) Na
1011,Speed of light in vacuum is approximately:,(a) 3 x 10^8 m/s (b) 3 x 10^6 m/s (c) 3 x 10^5 km/s (d) 3 x 10^3 km/s,(a) 3 x 10^8 m/s
1012,The largest planet in our solar system is:,(a) Earth (b) Mars (c) Jupiter (d) Saturn,(c) Jupiter
`;

const parseGkRawQuestions = () => {
    return gkRawQuestionText
        .trim()
        .split('\n')
        .map(line => line.trim())
        .filter(line => line && !line.startsWith('#'))
        .map(line => {
            const match = line.match(/^\\d+,(.*),\\([a-d]\\)\\s*(.*)$/i);
            if (!match) {
                return null;
            }
            const question = match[1].trim().replace(/^\"|\"$/g, '').replace(/\s+/g, ' ');
            const answer = match[2].trim().replace(/^\"|\"$/g, '');
            return { question, answer };
        })
        .filter(Boolean);
};

const parseGkOptionQuestions = () => {
    return gkOptionsQuestionText
        .trim()
        .split('\n')
        .map(line => line.trim())
        .filter(line => line && !line.startsWith('#'))
        .map(line => {
            const numberMatch = line.match(/^\\d+,(.*)$/);
            if (!numberMatch) {
                return null;
            }
            const cleaned = numberMatch[1].replace(/\"/g, '');
            const correctMatches = [...cleaned.matchAll(/,\\((a|b|c|d)\\)/gi)];
            if (!correctMatches.length) {
                return null;
            }
            const correctMatch = correctMatches[correctMatches.length - 1];
            const correctKey = correctMatch[1].toLowerCase();
            const correctAnswer = cleaned
                .slice(correctMatch.index + correctMatch[0].length)
                .trim()
                .replace(/\s+/g, ' ');
            const beforeCorrect = cleaned.slice(0, correctMatch.index).trim().replace(/,$/, '');
            const optionsStart = beforeCorrect.search(/,\\s*\"?\\(a\\)/i);
            const questionPart = optionsStart === -1
                ? beforeCorrect
                : beforeCorrect.slice(0, optionsStart);
            const optionsText = optionsStart === -1
                ? null
                : beforeCorrect.slice(optionsStart + 1).replace(/^\"|\"$/g, '');
            const question = questionPart.trim().replace(/^\"|\"$/g, '').replace(/\s+/g, ' ');
            let options = null;
            if (optionsText) {
                const optionMatch = optionsText.match(
                    /\\(a\\)\\s*([\\s\\S]*?)\\s*\\(b\\)\\s*([\\s\\S]*?)\\s*\\(c\\)\\s*([\\s\\S]*?)\\s*\\(d\\)\\s*([\\s\\S]*)$/i
                );
                if (optionMatch) {
                    options = optionMatch.slice(1).map(option => option.trim().replace(/\s+/g, ' '));
                }
            }
            const correctIndex = ['a', 'b', 'c', 'd'].indexOf(correctKey);
            return {
                question,
                options,
                correct: correctIndex,
                answer: correctAnswer
            };
        })
        .filter(Boolean);
};

const shuffleArray = (items) => {
    const array = [...items];
    for (let i = array.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const pickOptions = (pool, correct, labelKey) => {
    const distractors = shuffleArray(pool.filter(item => item[labelKey] !== correct)).slice(0, 3);
    const options = shuffleArray([correct, ...distractors.map(item => item[labelKey])]);
    return options;
};

const buildGKQuestions = () => {
    const uniquePairs = capitalPairs.slice(0, 100);
    const questions = [];
    const seenQuestions = new Set();
    uniquePairs.forEach(pair => {
        const capitalOptions = pickOptions(uniquePairs, pair.capital, 'capital');
        questions.push({
            category: 'GK',
            question: `What is the capital of ${pair.country}?`,
            options: capitalOptions,
            correct: capitalOptions.indexOf(pair.capital),
            difficulty: 'low',
            explanation: `${pair.capital} is the capital of ${pair.country}.`
        });
        seenQuestions.add(`what is the capital of ${pair.country}?`);
        const countryOptions = pickOptions(uniquePairs, pair.country, 'country');
        questions.push({
            category: 'GK',
            question: `${pair.capital} is the capital city of which country?`,
            options: countryOptions,
            correct: countryOptions.indexOf(pair.country),
            difficulty: 'low',
            explanation: `${pair.capital} is the capital city of ${pair.country}.`
        });
        seenQuestions.add(`${pair.capital} is the capital city of which country?`.toLowerCase());
    });
    const rawQuestions = parseGkRawQuestions();
    const answerPool = rawQuestions.map(item => item.answer);
    rawQuestions.forEach(item => {
        const normalizedQuestion = item.question.trim().toLowerCase();
        if (seenQuestions.has(normalizedQuestion)) {
            return;
        }
        const distractors = shuffleArray(answerPool.filter(answer => answer !== item.answer)).slice(0, 3);
        const options = shuffleArray([item.answer, ...distractors]);
        questions.push({
            category: 'GK',
            question: item.question,
            options,
            correct: options.indexOf(item.answer),
            difficulty: 'mid',
            explanation: item.answer
        });
        seenQuestions.add(normalizedQuestion);
    });
    const optionQuestions = parseGkOptionQuestions();
    const optionAnswerPool = optionQuestions.map(item => item.answer);
    const fullAnswerPool = [...new Set([...answerPool, ...optionAnswerPool])];
    optionQuestions.forEach(item => {
        const normalizedQuestion = item.question.trim().toLowerCase();
        if (seenQuestions.has(normalizedQuestion)) {
            return;
        }
        let options = item.options;
        if (!options || options.length < 4) {
            const distractors = shuffleArray(fullAnswerPool.filter(answer => answer !== item.answer)).slice(0, 3);
            options = shuffleArray([item.answer, ...distractors]);
            item.correct = options.indexOf(item.answer);
        }
        questions.push({
            category: 'GK',
            question: item.question,
            options,
            correct: item.correct,
            difficulty: 'mid',
            explanation: item.answer
        });
        seenQuestions.add(normalizedQuestion);
    });
    return questions;
};

const buildEnglishQuestions = () => {
    const questions = [];
    englishPairs.slice(0, 90).forEach(entry => {
        const synonymOptions = shuffleArray([
            entry.synonym,
            entry.antonym,
            'Ordinary',
            'Plain'
        ]);
        questions.push({
            category: 'English',
            question: `Choose the synonym of "${entry.word}":`,
            options: synonymOptions,
            correct: synonymOptions.indexOf(entry.synonym),
            difficulty: 'low',
            explanation: `"${entry.synonym}" is closest in meaning to "${entry.word}".`
        });
        const antonymOptions = shuffleArray([
            entry.antonym,
            entry.synonym,
            'Similar',
            'Related'
        ]);
        questions.push({
            category: 'English',
            question: `Choose the antonym of "${entry.word}":`,
            options: antonymOptions,
            correct: antonymOptions.indexOf(entry.antonym),
            difficulty: 'mid',
            explanation: `"${entry.antonym}" is opposite in meaning to "${entry.word}".`
        });
    });
    prepositionPairs.forEach(item => {
        const optionPool = ['in', 'on', 'at', 'for', 'of', 'to', 'with', 'from', 'about', 'after'];
        const options = shuffleArray([item.correct, ...shuffleArray(optionPool.filter(opt => opt !== item.correct)).slice(0, 3)]);
        questions.push({
            category: 'English',
            question: `Fill in the blank: ${item.phrase}.`,
            options,
            correct: options.indexOf(item.correct),
            difficulty: 'mid',
            explanation: `The correct preposition is "${item.correct}".`
        });
    });
    return questions;
};

const buildComputerQuestions = () => {
    const questions = [];
    computerAbbreviations.forEach(entry => {
        const options = shuffleArray([
            entry.full,
            'Central Peripheral Unit',
            'Common Processing Utility',
            'Control Processing Union'
        ]);
        questions.push({
            category: 'Computer',
            question: `What does ${entry.abbr} stand for?`,
            options,
            correct: options.indexOf(entry.full),
            difficulty: 'low',
            explanation: `${entry.abbr} stands for ${entry.full}.`
        });
        const abbrOptions = shuffleArray([
            entry.abbr,
            'CPI',
            'CPR',
            'CRT'
        ]);
        questions.push({
            category: 'Computer',
            question: `Which abbreviation represents "${entry.full}"?`,
            options: abbrOptions,
            correct: abbrOptions.indexOf(entry.abbr),
            difficulty: 'mid',
            explanation: `${entry.full} is abbreviated as ${entry.abbr}.`
        });
    });

    for (let number = 1; number <= 100; number += 1) {
        const correctBinary = number.toString(2);
        const options = shuffleArray([
            correctBinary,
            (number + 1).toString(2),
            (number + 2).toString(2),
            (number + 3).toString(2)
        ]);
        questions.push({
            category: 'Computer',
            question: `What is the binary representation of ${number}?`,
            options,
            correct: options.indexOf(correctBinary),
            difficulty: number < 25 ? 'low' : 'mid',
            explanation: `${number} in binary is ${correctBinary}.`
        });
    }

    return questions;
};

const buildAnalyticalQuestions = () => {
    const questions = [];
    for (let i = 0; i < 100; i += 1) {
        const start = 2 + i;
        const diff = 2 + (i % 5);
        const series = [start, start + diff, start + diff * 2, start + diff * 3];
        const answer = start + diff * 4;
        const options = shuffleArray([answer, answer + diff, answer - diff, answer + diff * 2]);
        questions.push({
            category: 'Analytical',
            question: `Find the next number in the series: ${series.join(', ')}, ?`,
            options,
            correct: options.indexOf(answer),
            difficulty: 'low',
            explanation: `Add ${diff} each time.`,
            hiddenLogic: `Hidden Logic: Arithmetic progression with common difference ${diff}.`
        });
    }

    for (let i = 1; i <= 100; i += 1) {
        const number = i + 1;
        const series = [number ** 2, (number + 1) ** 2, (number + 2) ** 2, (number + 3) ** 2];
        const answer = (number + 4) ** 2;
        const options = shuffleArray([answer, answer + 4, answer + 9, answer - 4]);
        questions.push({
            category: 'Analytical',
            question: `Complete the squares series: ${series.join(', ')}, ?`,
            options,
            correct: options.indexOf(answer),
            difficulty: 'mid',
            explanation: 'Series follows perfect squares.',
            hiddenLogic: 'Hidden Logic: Consecutive squares.'
        });
    }

    for (let i = 0; i < 100; i += 1) {
        const base = 3 + i;
        const series = [base, base * 2, base * 4, base * 8];
        const answer = base * 16;
        const options = shuffleArray([answer, base * 12, base * 10, base * 14]);
        questions.push({
            category: 'Analytical',
            question: `Identify the next term: ${series.join(', ')}, ?`,
            options,
            correct: options.indexOf(answer),
            difficulty: 'mid',
            explanation: 'Each term is multiplied by 2.',
            hiddenLogic: 'Hidden Logic: Geometric progression with ratio 2.'
        });
    }

    const aptitudeQuestions = [
        {
            question: 'If 15% of a number is 45, what is the number?',
            options: ['150', '200', '300', '450'],
            correct: 2,
            difficulty: 'mid',
            explanation: '45 is 15% of 300.',
            hiddenLogic: 'Hidden Logic: Number = 45 / 0.15.'
        },
        {
            question: 'A train covers 120 km in 2 hours. What is its average speed?',
            options: ['40 km/h', '50 km/h', '60 km/h', '80 km/h'],
            correct: 2,
            difficulty: 'low',
            explanation: 'Speed = distance ÷ time = 120 ÷ 2 = 60 km/h.',
            hiddenLogic: 'Hidden Logic: Use speed formula.'
        },
        {
            question: 'Find the missing number: 2, 6, 12, 20, ?',
            options: ['24', '30', '32', '36'],
            correct: 1,
            difficulty: 'mid',
            explanation: 'The differences increase by 2: +4, +6, +8, +10.',
            hiddenLogic: 'Hidden Logic: Add consecutive even numbers.'
        },
        {
            question: 'Complete the series: 3, 9, 27, ?, 243',
            options: ['54', '81', '90', '108'],
            correct: 1,
            difficulty: 'low',
            explanation: 'Each term is multiplied by 3.',
            hiddenLogic: 'Hidden Logic: Geometric progression with ratio 3.'
        },
        {
            question: 'A shopkeeper buys an item for 500 and sells it for 600. What is the profit percentage?',
            options: ['10%', '15%', '20%', '25%'],
            correct: 2,
            difficulty: 'mid',
            explanation: 'Profit = 100; profit % = 100 ÷ 500 × 100 = 20%.',
            hiddenLogic: 'Hidden Logic: Profit percentage = (profit ÷ cost) × 100.'
        },
        {
            question: 'Which number comes next: 5, 11, 19, 29, ?',
            options: ['39', '41', '43', '45'],
            correct: 1,
            difficulty: 'mid',
            explanation: 'Differences are +6, +8, +10, +12.',
            hiddenLogic: 'Hidden Logic: Add consecutive even numbers.'
        }
    ];

    aptitudeQuestions.forEach(item => {
        questions.push({
            category: 'Analytical',
            question: item.question,
            options: item.options,
            correct: item.correct,
            difficulty: item.difficulty,
            explanation: item.explanation,
            hiddenLogic: item.hiddenLogic
        });
    });

    return questions;
};

const buildIslamicQuestions = () => {
    return islamicFacts.map((item) => {
        return {
            category: 'Islamic',
            question: item.question,
            options: item.options,
            correct: item.options.indexOf(item.answer),
            difficulty: item.difficulty,
            explanation: item.answer
        };
    });
};

const buildQuestionLibrary = () => {
    const gk = buildGKQuestions();
    const english = buildEnglishQuestions();
    const computer = buildComputerQuestions();
    const analytical = buildAnalyticalQuestions();
    const islamic = buildIslamicQuestions();

    return {
        GK: gk,
        English: english,
        Computer: computer,
        Analytical: analytical,
        Islamic: islamic
    };
};

const getStoredBank = () => {
    const raw = localStorage.getItem('modQuestionBank');
    if (!raw) {
        return { GK: [], English: [], Computer: [], Analytical: [], Islamic: [] };
    }
    try {
        return JSON.parse(raw);
    } catch (error) {
        return { GK: [], English: [], Computer: [], Analytical: [], Islamic: [] };
    }
};

const mergeQuestions = (existing, incoming) => {
    let duplicates = 0;
    const merged = { ...existing };
    Object.keys(incoming).forEach(category => {
        const seen = new Set(merged[category].map(q => q.question.trim().toLowerCase()));
        const toAdd = [];
        incoming[category].forEach(q => {
            const key = q.question.trim().toLowerCase();
            if (seen.has(key)) {
                duplicates += 1;
                return;
            }
            seen.add(key);
            toAdd.push(q);
        });
        merged[category] = [...merged[category], ...toAdd];
    });
    return { merged, duplicates };
};

const statusBox = document.getElementById('statusBox');
const previewTable = document.getElementById('previewTable');
const previewBody = previewTable ? previewTable.querySelector('tbody') : null;

const showStatus = (message) => {
    if (!statusBox) return;
    statusBox.textContent = message;
    statusBox.classList.add('show');
};

const updatePreview = () => {
    if (!previewTable || !previewBody) return;
    const library = buildQuestionLibrary();
    const sample = []
        .concat(library.GK.slice(0, 2))
        .concat(library.English.slice(0, 2))
        .concat(library.Computer.slice(0, 2))
        .concat(library.Analytical.slice(0, 2))
        .concat(library.Islamic.slice(0, 2));

    previewBody.innerHTML = '';
    sample.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${item.category}</td><td>${item.question}</td><td>${item.difficulty}</td>`;
        previewBody.appendChild(row);
    });
    previewTable.style.display = 'table';
};

const loadLibraryCore = () => {
    const library = buildQuestionLibrary();
    const stored = getStoredBank();
    const { merged, duplicates } = mergeQuestions(stored, library);
    localStorage.setItem('modQuestionBank', JSON.stringify(merged));
    const totalAdded = Object.values(library).reduce((sum, items) => sum + items.length, 0) - duplicates;
    return { totalAdded, duplicates };
};

const loadLibrary = () => {
    const result = loadLibraryCore();
    showStatus(`Library loaded. Added ${result.totalAdded} new questions. Duplicates skipped: ${result.duplicates}.`);
};

const loadLibraryBtn = document.getElementById('loadLibraryBtn');
const previewBtn = document.getElementById('previewBtn');

if (loadLibraryBtn) {
    loadLibraryBtn.addEventListener('click', loadLibrary);
}

if (previewBtn) {
    previewBtn.addEventListener('click', updatePreview);
}

window.questionLibrary = {
    buildQuestionLibrary,
    mergeQuestions,
    getStoredBank,
    loadLibraryCore
};
