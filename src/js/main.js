var Quiz = function(question, answer1, answer2, answer3, answer4, correct, info){
    this.question = question,
    this.answer1 = answer1,
    this.answer2 = answer2,
    this.answer3 = answer3,
    this.answer4 = answer4,
    this.correct = correct,
    this.info = info
};

var quiz1 = [
    //Question 1
    new Quiz(
        'By law, which TWO types of media have to give a balanced coverage of all political parties and equal time to rival viewpoints before an election?',
        'Television',
        'Radio',
        'Internet',
        'Newspapers',
        [1,1, 0, 0],
        'By law, radio and television coverage of the political parties must be balanced and so equal time has to be given to rival viewpoints.'
    ),
    //Question 2
    new Quiz(
        'Where is the official residence of the Prime Minister?',
        'London Tower',
        'Windsor Castle',
        'Buckingham Palace',
        '10 Downing Street',
        [0, 0, 0, 1],
        '10 Downing Street is the official office and home residence of the U.K. Prime Minister'
    ),
    //Question 3
    new Quiz(
        'Which industries were badly affected during the 1930\'s Great Depression?',
        'Vehicle Manufacturing',
        'Electrical Engineering',
        'Shipbuilding',
        'Agriculture',
        [0, 0, 1, 0],
        'One of the most affected industries during the 1930\'s Great Depression was shipbuilding'
    ),
    //Question 4
    new Quiz(
        'Cardiff is the capital city of:',
        'England',
        'Wales',
        'Ireland',
        'Scotland',
        [0, 1, 0, 0],
        'In 1905, Cardiff was made a city and proclaimed the Capital of Wales in 1955'
    ),
    //Question 5
    new Quiz(
        'The Crown Jewels are kept at',
        'Her Majesty’s Exchequer',
        'Buckingham Palace',
        'Tower of London',
        'Big Ben',
        [0, 0, 1, 0],
        'The Crown Jewels are kept at the Tower of London'
    ),
    //Question 6
    new Quiz(
        'The last successful foreign invasion of Britain that took place in 1066 was:',
        'Spanish Armada',
        'Caesar\'s invasion',
        'The Norman Conquest',
        'The Anglo-Saxon invasion',
        [0, 0, 1, 0],
        'The Norman conquest of England under William the Conqueror at the Battle of Hastings'
    ),
    //Question 7
    new Quiz(
        'Which of the following is a public holiday in Northern Ireland',
        'St George\'s day',
        'St Patrick\'s day',
        'St David\'s day',
        'St Andrew\'s day',
        [0, 1, 0, 0],
        'Only Scotland and Northern Ireland have their patron saint’s day as an official holiday (although in Scotland not all businesses and offices will close)'
    ),
    //Question 8
    new Quiz(
        'What is a bank holiday?',
        'A public holiday when banks and many other businesses are closed for the day',
        'A holiday when only banks are closed',
        'A holiday for public sector workers',
        'A holiday which everyone living in the U.K. must have',
        [1, 0, 0, 0],
        'In the United Kingdom and Ireland a bank holiday is a public holiday, when banks and many other businesses are closed for the day'
    ),
    //Question 9
    new Quiz(
        'How is a jury selected?',
        'From the electoral register in alphabetical order',
        'Randomly from the telephone directory',
        'From the postcode lottery',
        'Randomly from the electoral register',
        [0, 0, 0, 1],
        'The jurors’ names are selected from the electoral register. This is an automatic process, randomly done by a computer at a central office'
    ),
    //Question 10
    new Quiz(
        'William Shakespeare was the author of which play?',
        'The Clandestine Marriage',
        'A Midsummer Night’s dream',
        'The Daughter-in-Law',
        'The Wonder of Women',
        [0, 1, 0, 0],
        'A Midsummer Night\'s Dream is a comedy written by William Shakespeare in 1595/96'
    ),
    //Question 11
    new Quiz(
        'Northern Ireland has its own banknotes, where are they valid?',
        'Only in Northern Ireland',
        'Only in Northern Ireland and England',
        'Only in Northern Ireland and Scotland',
        'Everywhere in the UK',
        [0, 0, 0, 1],
        'Northern Ireland and Scotland have their own banknotes, which are valid everywhere in the UK'
    ),
    //Question 12
    new Quiz(
        'Who is the author of Sherlock Holmes?',
        'Sir Arthur Conan Doyle',
        'Charles Dickens',
        'J. R. R. Tolkien',
        'George Orwell',
        [1, 0, 0, 0],
        'Sherlock Holmes is a fictional private detective created by British author Sir Arthur Conan Doyle'
    ),
    //Question 13
    new Quiz(
        'In which country is Snowdonia located?',
        'Scotland',
        'England',
        'Wales',
        'Northern Ireland',
        [0, 0, 1, 0],
        'Snowdonia is a region in northwest Wales concentrated around the mountains and glacial landforms of massive Snowdonia National Park'
    ),
    //Question 14
    new Quiz(
        'Which two houses form the UK Parliament?',
        'House of Lords',
        'House of the Royal Society',
        'House of Commons',
        'House of Cards',
        [1, 0, 1, 0],
        'The UK Parliament is composed of two houses; the House of Commons and the House of Lords.'
    ),
    //Question 15
    new Quiz(
        'Who was voted the Greatest Briton in 2002?',
        'Isambard Kingdom Brunel',
        'Winston Churchill',
        'Diana, Princess of Wales',
        'Charles Darwin',
        [0, 1, 0, 0],
        'A poll conducted by BBC in 2002 resulted in Winston Churchill being voted as the Greatest Briton'
    ),
    //Question 16
    new Quiz(
        'The National Citizen Service programme is: ',
        'Compulsory for 16 and 17-year-olds to join',
        'Optional for 16 and 17-year-olds to join',
        'An opportunity to enjoy outdoor activities, develop skills and take part in a community project',
        'Available for any age group',
        [0, 1, 1, 0],
        'The National Citizen Service programme, which gives 16- and 17-year-olds the opportunity to enjoy outdoor activities, develop their skills and take part in a community project. Therefore, it is optional.'
    ),
    //Question 17
    new Quiz(
        'If you think someone is trying to persuade you to join an extremist or terrorist activity, who should you contact?',
        'Your local police force',
        'National Counter Terrorism Security Office',
        'Council Office',
        'The Home Office',
        [1, 0, 0, 0],
        'If you think someone is trying to persuade you to join an extremist or terrorist cause, you should notify your local police force.'
    ),
    //Question 18
    new Quiz(
        'In what year did Ireland become a republic?',
        '1925',
        '1939',
        '1949',
        '1927',
        [0, 0, 1, 0],
        'Ireland became a republic in 1949.'
    ),
    //Question 19
    new Quiz(
        'Women over the age of 30 were given the right to vote as a result of their contribution towards the war effort. Which war was that?',
        'The First World War',
        'The Second World War',
        'The Irish War of Independence',
        'The Great Northern War',
        [1, 0, 0, 0],
        'In 1918, women over the age of 30 were given voting rights and the right to stand for Parliament, partly in recognition of the contribution women made to the war effort during the First World War.'
    ),
    //Question 20
    new Quiz(
        'Where is the United Kingdom geographically located?',
        'North-West of Europe',
        'South-West of Europe',
        'North-East of Europe',
        'South-East of Europe',
        [1, 0, 0, 0],
        'The United Kingdom is a sovereign state located off the North-Western coast of continental Europe.'
    ),
    //Question 21
    new Quiz(
        'When were men and women given the right to vote at the age of 21?',
        '1918',
        '1926',
        '1928',
        '1930',
        [0, 0, 1, 0],
        'The 1928 \'Representation of the People\' Act widened suffrage by giving women electoral equality with men. It gave the vote to all women over 21 years old, regardless of property ownership'
    ),
    //Question 22
    new Quiz(
        'Which of the following is TRUE regarding St Helena:',
        'is an independent state',
        'is part of the EU',
        'is part of the UK',
        'is a British overseas territory',
        [0, 0, 0, 1],
        'St Helena is a British overseas territory and is not part of the UK'
    ),
    //Question 23
    new Quiz(
        'What is the Home Secretary responsible for?',
        'Law',
        'Finance',
        'Education',
        'Policing',
        [0, 0, 0, 1],
        'The Home Secretary is responsible for crime, policing and immigration'
    ),
    //Question 24
    new Quiz(
        'Which of the following is a fundamental British value:',
        'Individual liberty',
        'Traditional Culture',
        'Harmony',
        'Self Development',
        [1, 0, 0, 0],
        'The Fundamental British Values are Democracy, Rule of Law, Respect and Tolerance, Individual Liberty.'
    ),
];

var quiz2 = [
    //Question 1
    new Quiz(
        'What did Queen Elizabeth II celebrate in 2012?',
        'Diamond Jubilee',
        'Platinum Jubilee',
        'Golden Jubilee',
        'Silver Jubilee',
        [1, 0, 0, 0],
        'The Diamond Jubilee of Elizabeth II was a multinational celebration throughout 2012, that marked the 60th anniversary of the accession of Queen Elizabeth II on 6 February 1952'
    ),
    //Question 2
    new Quiz(
        'Who was the first man in the world to run 1 mile in under 4 minutes?',
        'Usain Bolt',
        'Mo Farah',
        'Steve Ovett',
        'Sir Roger Bannister',
        [0, 0, 0, 1],
        'Sir Roger Gilbert Bannister (23 March 1929 – 3 March 2018) was a British middle-distance athlete and neurologist who ran the first sub-4-minute mile'
    ),
    //Question 3
    new Quiz(
        'Which conservation charity works to preserve important buildings, coastline and countryside in the UK?',
        'Oxfam',
        'Wellcome Trust',
        'The National Trust',
        'The Salvation Army',
        [0, 0, 1, 0],
        'The National Trust is a charity that works to preserve and protect historic places and spaces for ever, for everyone'
    ),
    //Question 4
    new Quiz(
        'Scotland has its own banknotes and:',
        'Are only valid in Scotland',
        'Are valid everywhere in the UK',
        'Are only valid in Scotland and England',
        'Are only valid in Scotland, England and Wales',
        [0, 1, 0, 0],
        'Scotland has its own banknotes, which are valid everywhere in the UK'
    ),
    //Question 5
    new Quiz(
        'Who introduced the printing press into England and first used it to print books',
        'William Caxton',
        'Gilbert Kymer',
        'Robert Bale',
        'William Cornysh',
        [1, 0, 0, 0],
        'William Caxton was an English merchant, diplomat, writer and is thought to be the first person to introduce a printing press into England, in 1476, and as a printer was the first English retailer of printed books'
    ),
    //Question 6
    new Quiz(
        'Which sport originated from Scotland in the 15th century',
        'Football',
        'Rugby',
        'Golf',
        'Tennis',
        [0, 0, 1, 0],
        'Golf as we know it today originated from a game played on the eastern coast of Scotland in the Kingdom of Fife during the 15th century'
    ),
    //Question 7
    new Quiz(
        'Solicitors\' charges are usually based on:',
        'The nature of a case',
        'Time spent on a case',
        'The importance and complexity of a case',
        'The number of meetings they had with the client',
        [0, 1, 0, 0],
        'Solicitors’ charges are usually based on how much time they spend on a case.'
    ),
    //Question 8
    new Quiz(
        'What will you be given to vote before an election takes place?',
        'A letter from the Council',
        'A voting number',
        'A reference number',
        'A poll card',
        [0, 0, 0, 1],
        'The local Electoral Registration Office will send a poll card just before an election telling where and when to vote'
    ),
    //Question 9
    new Quiz(
        'What is Good Friday?',
        'The day Jesus Christ was born',
        'The day Jesus Christ was Crucified',
        'The first Friday after Easter',
        'The first Friday before Christmas',
        [0, 1, 0, 0],
        'The Friday before Easter Sunday, on which the Crucifixion of Christ is commemorated in the Christian Church. It is traditionally a day of fasting and penance'
    ),
    //Question 10
    new Quiz(
        'Which religious communities celebrate Diwali?',
        'Buddhists',
        'Hindus',
        'Jews',
        'Sikhs',
        [0, 1, 0, 1],
        'Diwali, the Hindu festival of lights, is the most popular of all the festivals. It is also an occasion for celebration by Sikhs'
    ),
    //Question 11
    new Quiz(
        'How many members does a jury have in England, Wales and Northern Ireland?',
        '7',
        '12',
        '16',
        '10',
        [0, 1, 0, 0],
        'In England, Wales and Northern Ireland a jury has 12 members, and in Scotland a jury has 15 members'
    ),
    //Question 12
    new Quiz(
        'Who is the patron Saint of Wales?',
        'St George',
        'St Patrick',
        'St David',
        'St Andrew',
        [0, 0, 1, 0],
        'Saint David was a Welsh bishop of Mynyw (now St Davids) during the 6th century; he was later regarded as a saint. He is the patron saint of Wales.'
    ),
    //Question 13
    new Quiz(
        'Which country was invaded by Germany in 1939?',
        'Poland',
        'Hungary',
        'France',
        'Britain',
        [1, 0, 0, 0],
        'In August of 1939, Nazi Germany and the Soviet Union signed a non-aggression treaty. One week later, Germany invaded Poland and World War II began'
    ),
    //Question 14
    new Quiz(
        'Who is the head of the Church of England?',
        'The Archbishop of Canterbury',
        'The Pope',
        'The Prime minister',
        'The Monarch',
        [0, 0, 0, 1],
        'The Archbishop of Canterbury is the most senior cleric, although the monarch is the supreme governor'
    ),
    //Question 15
    new Quiz(
        'When did women get the right to vote at the same age as men?',
        '1936',
        '1928',
        '1945',
        '1916',
        [0, 1, 0, 0],
        'It was not until the Equal Franchise Act of 1928 that women over 21 were able to vote and women finally achieved the same voting rights as men'
    ),
    //Question 16
    new Quiz(
        'Which two countries developed the Concorde, the world’s only supersonic commercial airliner?',
        'Britain',
        'Germany',
        'Spain',
        'France',
        [1, 0, 0, 1],
        'The Concorde is a British-French turbojet-powered supersonic passenger airliner that was operated from 1976 until 2003. It had a maximum speed over twice the speed of sound at Mach 2.04'
    ),
    //Question 17
    new Quiz(
        'What are the tour guides called that tell visitors stories about the Tower of London?',
        'The Queen\'s Guard',
        'Storytellers',
        'Beefeaters',
        'Blue Badge Tourist Guides',
        [0, 0, 1, 0],
        'The guards at the Tower of London are called Yeoman Warders. In principle they are responsible for looking after any prisoners at the Tower and safeguarding the British crown jewels, but in practice they act as tour guides and are a tourist attraction in their own right'
    ),
    //Question 18
    new Quiz(
        'When is The National Anthem ‘God save the queen’  played?',
        'In the presence of the Queen',
        'At important national occasions',
        'At events attended by the Queen or the Royal Family',
        'During holiday period',
        [0, 1, 1, 0],
        'The National Anthem is played at important national occasions and at events attended by the Queen or the Royal Family.'
    ),
    //Question 19
    new Quiz(
        'Where did the first farmers come from?',
        'North-East Europe',
        'South-East Europe',
        'North-West Europe',
        'South-West Europe',
        [0, 1, 0, 0],
        'The first farmers arrived in Britain 6,000 years ago. The ancestors of these first farmers probably came from South-East Europe'
    ),
    //Question 20
    new Quiz(
        'Who fought in the War of the Roses?',
        'The House of York',
        'The House of Fraser',
        'The House of Lancaster',
        'The House of Birmingham',
        [1, 0, 1, 0],
        'The Wars of the Roses were a series of battles fought in medieval England from 1455 to 1485 between the House of Lancaster and the House of York'
    ),
    //Question 21
    new Quiz(
        'What did The Bill of Rights of 1689 confirm?',
        'The rights of Parliament and the limits of the king’s power',
        'The right to vote for men and women',
        'Freedom of Religion',
        'The Right to Bear Arms',
        [1, 0, 0, 0],
        'The Bill of Rights, 1689, confirmed the rights of Parliament and the limits of the king’s power.'
    ),
    //Question 22
    new Quiz(
        'Great Britain refers only to: ',
        'England and Scotland',
        'England, Wales and Scotland',
        'England and Wales',
        'England, Wales, Scotland and Northern Ireland',
        [0, 1, 0, 0],
        'Great Britain refers only to England, Wales and Scotland'
    ),
    //Question 23
    new Quiz(
        'Who was supported by clansmen from the Scottish highlands and raised and army in 1745?',
        'Robert the Bruce',
        'Oliver Cromwell',
        'Redcoats',
        'Bonnie Prince Charlie',
        [0, 0, 0, 1],
        'In 1745 there was another attempt to put a Stuart king back on the throne in place of George I’s son, George II. Charles Edward Stuart (Bonnie Prince Charlie), the grandson of James II, landed in Scotland. He was supported by clansmen from the Scottish highlands and raised and army'
    ),
    //Question 24
    new Quiz(
        'What is the long war called that English kings fought with France in the middle ages?',
        'First Barons\' War',
        'Seven Year\'s war',
        'The Battle of Hastings',
        'The Hundred Years War',
        [0, 0, 0, 1],
        'The Hundred Years\' War was a series of conflicts waged from 1337 to 1453 by the House of Plantagenet, rulers of the Kingdom of England, against the French House of Valois, over the right to rule the Kingdom of France'
    )
];

var quiz3 = [
    //Question 1
    new Quiz(
        'Who developed the radar?',
        'Alexander Fleming',
        'Sir Robert Watson-Watt',
        'G. H. Hardy',
        'Ada Lovelace',
        [0, 1, 0, 0],
        'Sir Robert Watson‐Watt, was the developer of the world\'s first practical radar system, which aided the repulsion of Germany in the Battle of Britain in 1940'
    ),
    //Question 2
    new Quiz(
        'What is the minimum age requirement to stand as an MP in the UK?',
        '18',
        '16',
        '21',
        '25',
        [1, 0, 0, 0],
        'People wishing to stand as an MP must be over 18 years of age, be a British citizen or citizen of a Commonwealth country or the Republic of Ireland.'
    ),
    //Question 3
    new Quiz(
        'Who was the leader of the suffragettes, the group that campaigned for women’s rights to vote?',
        'Charlotte Bronte',
        'Catherine Booth',
        'Elizabeth Fry',
        'Emmeline Pankhurst',
        [0, 0, 0, 1],
        'Emmeline Pankhurst (15 July 1858 – 14 June 1928) was a British political activist and leader of the British suffragette movement who helped women win the right to vote'
    ),
    //Question 4
    new Quiz(
        'When did the Black Death occur is Britain?',
        'In the Middle Ages',
        'In the Classical Age',
        'In the Age of Enlightenment',
        'In the Iron Age',
        [1, 0, 0, 0],
        'In the Middle Ages, 1348, a disease, probably a form of plague, came to Britain. This was known as the Black Death. One third of the population of England died and a similar proportion in Scotland and Wales'
    ),
    //Question 5
    new Quiz(
        'Why did the American colonies want independence from Britain',
        'Political instability',
        'Abuse against the Native Americans',
        'The British Government wanted to tax them',
        'Increased tension between Britain and France',
        [0, 0, 1, 0],
        'The King and Parliament believed they had the right to tax the colonies. They decided to require several kinds of taxes from the colonists to help pay for the French and Indian War'
    ),
    //Question 6
    new Quiz(
        'Select two of the three key roles that a school governor has?',
        'To put an end to difficult behavior',
        'Setting the strategic direction of the school',
        'Handing out awards for best students',
        'Monitoring and evaluating school performance',
        [0, 1, 0, 1],
        'The three key roles of a school governor are setting the strategic direction of the school, ensuring accountability and monitoring and evaluating school performance'
    ),
    //Question 7
    new Quiz(
        'Who were the supporters of King Charles I during the Civil War?',
        'Redcoats',
        'Jacobites',
        'Roundheads',
        'Cavaliers',
        [0, 0, 0, 1],
        'During the civil war between the king and Parliament the country split into those who supported the king (the Cavaliers) and those who supported Parliament (the Roundheads).'
    ),
    //Question 8
    new Quiz(
        'When is Christmas Day celebrated?',
        '23th of December',
        '25th of December',
        '24th of December',
        '26th of December',
        [0, 1, 0, 0],
        'Christmas Day is celebrated on the 25th of December.'
    ),
    //Question 9
    new Quiz(
        'What type of literature are the Canterbury Tales?',
        'Poetry',
        'Prose',
        'Drama',
        'Folk tales',
        [1, 0, 0, 0],
        'Geoffrey Chaucer wrote a series of poems in English about a group of people going to Canterbury on a pilgrimage. This collection of poems is called The Canterbury Tales.'
    ),
    //Question 10
    new Quiz(
        'Who can make a complaint about the police by writing to the Chief Constable?',
        'MP\'s only',
        'Anyone',
        'Over 18 adults only',
        'Nobody',
        [0, 1, 0, 0],
        'Anyone can make a complaint about the police by writing to the Chief Constable of the police force involved'
    ),
    //Question 11
    new Quiz(
        'When did the English defeat the Spanish Armada?',
        '1584',
        '1586',
        '1588',
        '1589',
        [0, 0, 1, 0],
        'The defeat of the Spanish Armada in 1588 has long been held as one of England\'s greatest military achievements, and a sign of the strength and spirit imparted to the country by the reign of Queen Elizabeth I'
    ),
    //Question 12
    new Quiz(
        'Who was the captain of the English football team that won the World Cup in 1966?',
        'Bobby Charlton',
        'Michael Owen',
        'Wayne Rooney',
        'Bobby Moore',
        [0, 0, 0, 1],
        'Bobby Moore was captain of England\'s World Cup-winning team in 1966 and widely regarded as one of the greatest defenders of all time'
    ),
    //Question 13
    new Quiz(
        'What is the title of the Queen’s eldest son, Prince Charles?',
        'Prince of Wales',
        'Duke of York',
        'Prince of Great Britain',
        'Prince of Essex',
        [1, 0, 0, 0],
        'Charles, Prince of Wales is the heir apparent to the British throne as the eldest child of Queen Elizabeth II. He has been Duke of Cornwall and Duke of Rothesay since 1952, and is the oldest and longest-serving heir apparent in British history'
    ),
    //Question 14
    new Quiz(
        'Who became Prime Minister and was an inspirational leader to the British people during WWII?',
        'Sir John Major',
        'Baroness Margaret Thatcher',
        'Clement Attlee',
        'Winston Churchill',
        [0, 0, 0, 1],
        'Winston Churchill was Britain\'s prime minister for most of World War II. He was famous for his speeches, and for his refusal to give in, even when things were going badly. For a time he was the most famous person in Britain. People all over the world know the name Winston Churchill'
    ),
    //Question 15
    new Quiz(
        'What is the Cenotaph?',
        'A chapel',
        'A church',
        'A war memorial',
        'A cemetery',
        [0, 0, 1, 0],
        'The Cenotaph is a war memorial on Whitehall in London, England'
    ),
    //Question 16
    new Quiz(
        'Why did Henry VIII establish the church of England?',
        'To regain control from the Pope',
        'To divorce his first wife, Catherine of Aragon',
        'To establish a better religion in England',
        'To celebrate his wedding with Anne of Cleves',
        [0, 1, 0, 0],
        'To divorce his first wife, Henry needed the approval of the Pope. When the Pope refused, Henry established the church of England.'
    ),
    //Question 17
    new Quiz(
        'During the reign of Charles II parts of London were destroyed, what was the cause of this destruction?',
        'A fire',
        'A storm',
        'A flood',
        'Bombing',
        [1, 0, 0, 0],
        'During Charles II’s reign, a great fire destroyed much of the city, including many churches and St Paul’s Cathedral.'
    ),
    //Question 18
    new Quiz(
        'Which is the national flower of Wales?',
        'Daffodil',
        'Rose',
        'Thistle',
        'Flax',
        [1, 0, 0, 0],
        'The national flower of Wales is the daffodil, which is traditionally worn on St. David\'s Day'
    ),
    //Question 19
    new Quiz(
        'What are two responsibilities that you will have as a British citizen or permanent resident of the UK?',
        'To look after the area in which you live and the environment',
        'To look after yourself and your family',
        'To offer as a volunteer for various causes',
        'To work',
        [1, 1, 0, 0],
        'If you wish to be a permanent resident or citizen of the UK, you should: look after yourself and your family, look after the area in which you live and the environment, respect and obey the law, respect the rights of others, including their right to their own opinions and treat others with fairness.'
    ),
    //Question 20
    new Quiz(
        'Where is the Big Ben located?',
        'The Shard',
        'The houses of Parliament',
        'Kensington Palace',
        'Trafalgar Square',
        [0, 1, 0, 0],
        'Big Ben is the nickname for the Great Bell of the clock at the north end of the Palace of Westminster(The Houses of Parliament) in London and is usually extended to refer to both the clock and the clock tower'
    ),
    //Question 21
    new Quiz(
        'When walking your dog in a public place, you must ensure:',
        'To wear a dog muzzle',
        'To be on a leash',
        'That your dog wears a collar showing the dogs name',
        'That your dog wears a collar showing the name and address of the owner',
        [0, 0, 0, 1],
        'All dogs in public places must wear a collar showing the name and address of the owner'
    ),
    //Question 22
    new Quiz(
        'Which statements are true',
        'Northern Ireland has its own established church',
        'Northern Ireland has no established church',
        'Wales has its own established church',
        'Wales has no established church',
        [0, 1, 0, 1],
        'There is no established Church in Wales or Northern Ireland.'
    ),
    //Question 23
    new Quiz(
        'How is New Year’s Eve called in Scotland?',
        'Hogmanay',
        'Diwali',
        'Eid',
        'Spring Festival',
        [1, 0, 0, 0],
        'In Scotland, the 31st of December (New Year’s Eve) is called Hogmanay.'
    ),
    //Question 24
    new Quiz(
        'How often are general elections held in the UK?',
        'Every 2 years',
        'Every 5 years',
        'Every 6 years',
        'Every 4 years',
        [0, 1, 0, 0],
        'The Fixed-term Parliaments Act 2011 provides for general elections to be held on the first Thursday in May every Five Years'
    )
];

var quiz4 = [
    //Question 1
    new Quiz(
        'Who is the patron Saint of Scotland?',
        'St Patrick',
        'St Andrew',
        'St David',
        'St George',
        [0, 1, 0, 0],
        'The patron Saint of Scotland is St Andrew'
    ),
    //Question 2
    new Quiz(
        'Who was the first female Prime Minister of the UK?',
        'Theresa May',
        'Harriet Harman',
        'Jess Philips',
        'Margaret Thatcher',
        [0, 0, 0, 1],
        'Margaret Thatcher (1925-2013) was Britain’s first female prime minister (1979-90). She was known for her tough uncompromising, conservative political views, and became dubbed as ‘The Iron Lady’'
    ),
    //Question 3
    new Quiz(
        'Who chairs the debates at the House of Commons?',
        'The Prime Minister',
        'The Queen',
        'The Speaker',
        'Leader of the House of Commons ',
        [0, 0, 1, 0],
        'The Speaker of the House of Commons chairs debates in the Commons chamber. The holder of this office is an MP who has been elected to be Speaker by other Members of Parliament. During debates they keep order and call MPs to speak'
    ),
    //Question 4
    new Quiz(
        'What is the minimum age required to serve on a jury?',
        '16',
        '18',
        '21',
        '25',
        [0, 1, 0, 0],
        'Anyone who is on the electoral register and is aged 18 to 70 can be asked to serve on a jury'
    ),
    //Question 5
    new Quiz(
        'By law, which TWO types of media have to give a balanced coverage of all political parties and equal time to rival viewpoints before an election?',
        'Television',
        'Post',
        'Newspapers',
        'Radio',
        [1, 0, 0, 1],
        'By law, radio and television coverage of the political parties must be balanced and so equal time has to be given to rival viewpoints'
    ),
    //Question 6
    new Quiz(
        'Which of the following territories is a Crown dependency but is NOT part of the UK?',
        'Isle of Wight',
        'Bermuda',
        'Ireland',
        'The Channel Islands',
        [0, 0, 0, 1],
        'Channel Islands is a British overseas territory linked to the UK, but it is not part of it.'
    ),
    //Question 7
    new Quiz(
        'What did Sir Frank Whittle invent in the 1930s?',
        'Jet Engine',
        'Television',
        'Radio',
        'Tarmac',
        [1, 0, 0, 0],
        'Air Commodore Sir Frank Whittle was a British Royal Air Force air officer. He is credited with single-handedly inventing the turbojet engine'
    ),
    //Question 8
    new Quiz(
        'Who is the author of \'The Daffodils\'?',
        'Thomas Hardy',
        'William Wordsworth',
        'William Blake',
        'John Milton',
        [0, 1, 0, 0],
        'Inspired by nature, William Wordsworth wrote ‘The Daffodils’'
    ),
    //Question 9
    new Quiz(
        'Who was given the title of Lord Protector?',
        'Winston Churchill',
        'Queen Victoria',
        'King George II',
        'Oliver Cromwell',
        [0, 0, 0, 1],
        'Oliver Cromwell (25 April 1599 – 3 September 1658) was an English military and political leader. He served as Lord Protector of the Commonwealth of England, Scotland, and Ireland from 1653 until his death, acting simultaneously as head of state and head of government of the new republic'
    ),
    //Question 10
    new Quiz(
        'What are the 40 days before Easter called?',
        'Epiphany',
        'Pentecost',
        'Lent',
        'Advent',
        [0, 0, 1, 0],
        'Lent is a solemn religious observance in the Christian liturgical calendar that begins on Ash Wednesday and ends approximately six weeks later, before Easter Sunday'
    ),
    //Question 11
    new Quiz(
        'Are Church of England bishops allowed to sit in the House of Lords?',
        'Only the Archbishop of Canterbury ',
        'No  Church of England bishops are allowed ',
        'Several Church of England bishops are allowed ',
        'All Church of England members are allowed',
        [0, 0, 1, 0],
        'Some bishops are entitled to sit in the House of Lords. The Archbishop of Canterbury, the Archbishop of York, the Bishops of London, Durham and Winchester and 21 other bishops in order of seniority together form the Lords Spiritual'
    ),
    //Question 12
    new Quiz(
        'Who united the Anglo-Saxon kingdoms in England to defeat the Vikings?',
        'King Alfred the Great',
        'Edward the Elder',
        'Athelstan',
        'Edgar the Peaceful',
        [1, 0, 0, 0],
        'The Anglo-Saxon kingdoms in England united under King Alfred the Great, who defeated the Vikings.'
    ),
    //Question 13
    new Quiz(
        'Magna Carta was written in what year?',
        '1214',
        '1215',
        '1216',
        '1212',
        [0, 1, 0, 0],
        'On the 19 June 1215 at Runnymede King John signed the Magna Carta(Great Charter). It was the first formal document stating that a King had to follow the laws of the land and it guaranteed the rights of individuals against the wishes of the King'
    ),
    //Question 14
    new Quiz(
        'Which court deals with minor criminal cases in England, Wales and Northern Ireland?',
        'Court of Appeal',
        'Coroners\' court',
        'Magistrates’ Court',
        'County Court',
        [0, 0, 1, 0],
        'In England and Wales, a magistrates\' court is a lower court which holds trials for summary offences and preliminary hearings for more serious ones. Some civil matters are also decided here, notably family proceedings'
    ),
    //Question 15
    new Quiz(
        'John Logie Baird developed the:',
        'ARPANET',
        'Radar',
        'Radio',
        'Television',
        [0, 0, 0, 1],
        'John Logie Baird (August 1888 – 14 June 1946) was a Scottish engineer, innovator, one of the inventors of the mechanical television, demonstrating the first working television system on 26 January 1926, and inventor of both the first publicly demonstrated colour television system, and the first purely electronic colour television picture tube'
    ),
    //Question 16
    new Quiz(
        'Which is the largest national park in England',
        'Northhumberland National Park',
        'Lake District National Park',
        'Peak district',
        'North York Moors',
        [0, 1, 0, 0],
        'The Lake District National Park at 2,292 square kilometres (885 sq mi) is the largest National Park in England and second largest in the United Kingdom after Scotland\'s Cairngorms National Park'
    ),
    //Question 17
    new Quiz(
        'In which London area are famous theatres located?',
        'Theatreland',
        'Baker Street',
        'Docklands',
        'Downing Street',
        [1, 0, 0, 0],
        'London Theatreland or also known as the West End, is the area of central London containing many of London\'s commercial Theatres'
    ),
    //Question 18
    new Quiz(
        'The last battle between Great Britain and France was called ...',
        'Battle of Taillebourg',
        'Battle of Bouvines',
        'Battle of Agincourt',
        'The Battle of Waterloo',
        [0, 0, 0, 1],
        'The Battle of Waterloo was fought on Sunday, 18 June 1815, near Waterloo in present-day Belgium, then part of the United Kingdom of the Netherlands. A French army under the command of Emperor Napoleon Bonaparte was defeated by two of the armies of the Seventh Coalition: a British-led Allied army under the command of the Duke of Wellington, and a Prussian army under the command of Gebhard Leberecht von Blücher, Prince of Wahlstatt. The battle marked the end of the Napoleonic Wars'
    ),
    //Question 19
    new Quiz(
        'Who was the leader of the Iceni tribe that fought against the Romans',
        'Boudica of the British Iceni',
        'Caratacus of the British Catuvellauni',
        'Brennus of the Gaulish Senones',
        'Vercingetorix of the Gaulish Arverni',
        [1, 0, 0, 0],
        'Boudica was a queen of the British Celtic Iceni tribe who led an uprising against the occupying forces of the Roman Empire in AD 60 or 61, and died shortly after its failure, having supposedly poisoned herself'
    ),
    //Question 20
    new Quiz(
        'What sporting event is the Grand National',
        'Cricket',
        'Horse Racing',
        'Formula One',
        'Rugby',
        [0, 1, 0, 0],
        'The Grand National is a National Hunt horse race held annually at Aintree Racecourse in Liverpool, England'
    ),
    //Question 21
    new Quiz(
        'Which battle is commemorated in the Bayeux Tapestry?',
        'The Battle of Sandwich',
        'The Battle of Bremule',
        'The Battle of Hastings',
        'The Battle of Lincoln',
        [0, 0, 1, 0],
        'The Bayeux Tapestry is an embroidered cloth nearly 70 metres (230 ft) long and 50 centimetres (20 in) tall, which depicts the events leading up to the Norman conquest of England concerning William, Duke of Normandy, and Harold, Earl of Wessex, later King of England, and culminating in the Battle of Hastings. It is thought to date to the 11th century, within a few years after the battle. It tells the story from the point of view of the conquering Normans'
    ),
    //Question 22
    new Quiz(
        'Where was Anne Boleyn, wife of King Henry VIII, executed?',
        'St Paul\'s Churchyard',
        'Tyburn',
        'Execution Dock',
        'Tower of London',
        [0, 0, 0, 1],
        'Anne Boleyn was not popular in the country and was accused of adultery. She was executed at the Tower of London'
    ),
    //Question 23
    new Quiz(
        'Racial crime and smoking in public places are examples of:',
        'Civil offences',
        'Indicent assault',
        'Criminal offences',
        'Summary offences',
        [0, 0, 1, 0],
        'Criminal offence is an act harmful not only to some individual but also to a community, society or the state. Such acts are forbidden and punishable by law. Racial crime and smoking in public places are examples of criminal offences'
    ),
    //Question 24
    new Quiz(
        'What type of character was Charlie Chaplin best known for?',
        'A Tramp',
        'A Factory Worker',
        'An Old Steward',
        'Station Porter',
        [1, 0, 0, 0],
        'The Tramp, also known as The Little Tramp, was British actor Charlie Chaplin\'s most memorable on-screen character and an icon in world cinema during the era of silent film. The Tramp is also the title of a silent film starring Chaplin, which Chaplin wrote and directed in 1915'
    )
];

var quiz5 = [
    //Question 1
    new Quiz(
        'Who can be prosecuted for violence against their partner, whether they are married or living together?',
        'Men only',
        'Women only',
        'Violence against one\'s partner is not a crime',
        'Both men and women',
        [0, 0, 0, 1],
        'In the UK, brutality and violence in the home is a serious crime. Anyone who is violent towards their partner, whether they are a man or a woman, married or living together, can be prosecuted.'
    ),
    //Question 2
    new Quiz(
        'The genre of Wallace & Gromit created by Nick Park is',
        'Comedy',
        'Animated film',
        'Musical',
        'Romance film',
        [0, 1, 0, 0],
        'Wallace and Gromit is a British clay animation comedy series created by Nick Park of Aardman Animations'
    ),
    //Question 3
    new Quiz(
        'Who is responsible for crime, policing and immigration?',
        'Ministry of Defence',
        'Ministry of Justice',
        'The Home Secretary',
        'Attorney General\'s Office',
        [0, 0, 1, 0],
        'The Home Office is a ministerial department of Her Majesty\'s Government of the United Kingdom, responsible for immigration, security and law and order'
    ),
    //Question 4
    new Quiz(
        'When was the Emancipation act passed, giving all slaves in the British Empire their freedom?',
        '1833',
        '1832',
        '1831',
        '1834',
        [1, 0, 0, 0],
        'In August 1833, the Slave Emancipation Act was passed, giving all slaves in the British empire their freedom, albeit after a set period of years. Plantation owners received compensation for the \'loss of their slaves\' in the form of a government grant set at £20,000,000'
    ),
    //Question 5
    new Quiz(
        'How are members of the House of Lords, known as peers,  appointed?',
        'By public vote',
        'By parliamentary vote',
        'Through hereditary titles',
        'By the Queen on the advice of the prime minister',
        [0, 0, 0, 1],
        'Members of the House of Lords are appointed by the Queen on the advice of the prime minister. Some non-party-political members are recommended by an independent body, the House of Lords Appointments Commission'
    ),
    //Question 6
    new Quiz(
        'What is the minimum age required to drive a motorcycle?',
        '16',
        '17',
        '18',
        '21',
        [1, 0, 0, 0],
        'In the UK, you must be at least 17 years to drive a car or motorcycle and you must have a driving licence to drive on public roads'
    ),
    //Question 7
    new Quiz(
        'Select two British pop music groups that were famous during the Swinging Sixties',
        'Bee Gees',
        'The Beatles',
        'The Rolling Stones',
        'Abba',
        [0, 1, 1, 0],
        'The decade of the 1960s was a period of significant social change. It was known as the ‘swinging sixties’. There was growth in British fashion, cinema and popular music. Two well-known pop music groups at the time were The Beatles and The Rolling Stones'
    ),
    //Question 8
    new Quiz(
        'What were the Irish people called that favoured complete independence from the UK? ',
        'Invincibles',
        'The Blueshirts',
        'Fenians',
        '32CSM',
        [0, 0, 1, 0],
        'Fenian was an umbrella term for the Fenian Brotherhood and Irish Republican Brotherhood, fraternal organisations dedicated to the establishment of an independent Irish Republic in the 19th and early 20th centuries'
    ),
    //Question 9
    new Quiz(
        'What religion did the Puritans follow?',
        'Protestant',
        'Orthodox',
        'Catholic',
        'Jewish',
        [1, 0, 0, 0],
        'The Puritans were English Reformed Protestants in the 16th and 17th centuries who sought to "purify" the Church of England from its "Catholic" practices, maintaining that the Church of England was only partially reformed'
    ),
    //Question 10
    new Quiz(
        'Select the forts that were part of Hadrian\'s wall',
        'Vindolanda',
        'Fort Burgoyne',
        'Vaison-la-Romaine',
        'Housesteads',
        [1, 0, 0, 1],
        'Hadrian\'s Wall was a defensive fortification in the Roman province of Britannia, begun in AD 122 in the reign of the emperor Hadrian. It ran from the banks of the River Tyne near the North Sea to the Solway Firth on the Irish Sea, and was the northern limit of the Roman Empire, immediately north of which were the lands of the northern Ancient Britons, including the Picts'
    ),
    //Question 11
    new Quiz(
        'The English Civil war of 1642 was fought between which two group of supporters?',
        'The Redcoats and Jacobites',
        'The Cavaliers and the Roundheads',
        'The House of York and the House of Lancaster',
        'Normans and Anglo-Saxons',
        [0, 1, 0, 0],
        'The English Civil Wars (1642-1651) stemmed from conflict between Charles I(Cavaliers) and Parliament(Roundheads). The first war was settled with Oliver Cromwell\'s victory for Parliamentary forces at the 1645 Battle of Naseby'
    ),
    //Question 12
    new Quiz(
        'What song is sung by people in the UK and other countries when they are celebrating the New Year?',
        'Ar Lan y Mor',
        'The Ash Grove',
        'Georgie',
        'Auld Lang Syne',
        [0, 0, 0, 1],
        'The song Auld Lang Syne, which is sung by people in the UK and other countries when they are celebrating the New Year (or Hogmanay as it is called in Scotland).'
    ),
    //Question 13
    new Quiz(
        'Who conducted a research that led to the first "splitting" of the atom?',
        'Ernest Lawrence',
        'Leo Szilard',
        'J. Robert Oppenheimer',
        'Ernest Rutherford',
        [0, 0, 0, 1],
        'Scientists led by Ernest Rutherford, working at Manchester and then Cambridge University, were the first to ‘split the atom’ and took part in the Manhattan Project in the United States, which developed the atomic bomb'
    ),
    //Question 14
    new Quiz(
        'What book depicts the society in England just after the Norman Conquest ',
        'Domesday Book',
        'Canterbury Tales',
        'Magna Carta',
        'Anglo-Saxon Chronicle',
        [1, 0, 0, 0],
        'William sent people all over England to draw up lists of all the towns and villages. The people who lived there, who owned the land and what animals they owned were also listed. This was called the Domesday Book. It still exists today and gives a picture of society in England just after the Norman Conquest'
    ),
    //Question 15
    new Quiz(
        'What did Alan Turing invent during the 1930\'s',
        'Vacuum cleaner',
        'Electrocardiogram',
        'Electric washing machine',
        'The Turing machine',
        [0, 0, 0, 1],
        'Alan Turing (1912-1954) invented the Turing machine as a theoretical model for exploring the limits of rules-based mathematics. This purely theoretical device became a powerful tool in the minds of mathematicians, and modern computers still follow many of its principles'
    ),
    //Question 16
    new Quiz(
        'Who deals with the Youth Court cases in England, Wales and Northern Ireland?',
        'A District Judge',
        'A specially trained magistrate',
        'Up to 3 specially trained magistrates',
        'A special lawyer',
        [1, 0, 1, 0],
        'The Youth Court is a type of magistrates\' court which deals with young people. Cases in the Youth Court are either dealt with by three magistrates or a single district judge, sitting alone. '
    ),
    //Question 17
    new Quiz(
        'In the 1972 Olympics, Mary Peters won a ...',
        'Bronze medal',
        'Silver medal',
        'Gold medal',
        'Cash prize',
        [0, 0, 1, 0],
        'Britain\'s Mary Peters wins pentathlon gold medal at the 1972 Munich Olympics'
    ),
    //Question 18
    new Quiz(
        'How can forced marriage be legally prevented?',
        'By obtaining a court order',
        'By speaking to the family involved',
        'There is no legal framework to prevent forced marriage',
        'By not consenting',
        [1, 0, 0, 0],
        'Court orders can be obtained to protect a person from being forced into a marriage, or to protect a person in a forced marriage.'
    ),
    //Question 19
    new Quiz(
        'When did the First World War officially end',
        'November 11, 1918, 12 a.m.',
        'November 11, 1917, 11 a.m.',
        'November 11, 1918, 11 a.m.',
        'November 11, 1918, 11 p.m.',
        [0, 0, 1, 0],
        'Also known as the Armistice of Compiègne from the place where it was signed, it came into force at 11 a.m. Paris time on 11 November 1918 ("the eleventh hour of the eleventh day of the eleventh month") and marked a victory for the Allies and a complete defeat for Germany'
    ),
    //Question 20
    new Quiz(
        'When did the first farmers arrive in Britain',
        '6000 years ago',
        '7000 years ago',
        '2000 years ago',
        'Before the Ice Age',
        [1, 0, 0, 0],
        'The first farmers arrived in Britain 6,000 years ago. The ancestors of these first farmers probably came from south-east Europe. These people built houses, tombs and monuments on the land'
    ),
    //Question 21
    new Quiz(
        'Which high-grossing, successful film franchise was produced in Britain?',
        'X-Men',
        'Justice League',
        'Harry Potter',
        'The Hobbit',
        [0, 0, 1, 0],
        'Some of the most commercially successful films of all time, including the two highest-grossing film franchises (Harry Potter and James Bond), have been produced in the UK.'
    ),
    //Question 22
    new Quiz(
        'On what occasion did England become a republic',
        'When Charles I was executed',
        'Just after the Norman Conquest',
        'When Henry VIII broke away from the Catholic Church',
        'When the 1534 Act of Supremacy was signed',
        [1, 0, 0, 0],
        'The king\'s army led by Charles I was defeated at the Battles of Marston Moor and Naseby. In 1649 Charles I was executed and England declared itself a republic, called the Commonwealth and it no longer had a monarch'
    ),
    //Question 23
    new Quiz(
        'In 1776, which British colonies declared their independence based on the principle that there should be no taxation without representation in the British Parliament?',
        'South African Colonies',
        'European Colonies',
        'Central America and the Caribbean',
        'North American Colonies',
        [0, 0, 0, 1],
        'In 1776, 13 American Colonies declared their independence, stating that people had a right to establish their own governments. The colonists eventually defeated the British Army and Britain recognised the colonies\' independence in 1783 '
    ),
    //Question 24
    new Quiz(
        'What languages were used across England during the Middle Ages?',
        'Gaelic',
        'Anglo-Saxon',
        'Norman French',
        'Pictish',
        [0, 1, 1, 0],
        'The Middle Ages saw the development of a national culture and identity. After the Norman Conquest, the king and his noblemen had spoken Norman French and the peasants had continued to speak Anglo-Saxon'
    )
];

var quiz6 = [
    //Question 1
    new Quiz(
        'How often are European parliamentary elections held?',
        'Every two years',
        'Every three years',
        'Every four years',
        'Every five years',
        [0, 0, 0, 1],
        'Elections to the European Parliament take place every five years by universal adult suffrage. 751 MEPs are elected to the European Parliament, which has been directly elected since 1979'
    ),
    //Question 2
    new Quiz(
        'Which of the following castles is located in Scotland?',
        'Harlech Castle',
        'Bodiam Castle',
        'Crathes Castle',
        'Alnwick Castle',
        [0, 0, 1, 0],
        'Crathes Castle is a 16th-century castle near Banchory in the Aberdeenshire region of Scotland set within a beautiful twentieth century Arts and Crafts garden'
    ),
    //Question 3
    new Quiz(
        'Where is the National Horseracing Museum located?',
        'Newmarket, Suffolk',
        'Ayr, Scotland',
        'Newcastle upon Tyne, North East England',
        'Colchester, Essex',
        [1, 0, 0, 0],
        'Palace House is the home of Great Britain’s National Heritage Centre of Horseracing and Sporting Art in the remaining part of Charles II\'s racing palace in Newmarket, Suffolk, England. It is home to the National Horseracing Museum, the British Sporting Art Trust and Retraining of Racehorses'
    ),
    //Question 4
    new Quiz(
        'Which country tried to conquer England sending a large fleet of ships in 1588?',
        'France',
        'The Netherlands',
        'Spain',
        'Portugal',
        [0, 0, 1, 0],
        'The Spanish Armada was a Spanish fleet of 130 ships that sailed from A Coruña in late May 1588, with the purpose of invading England, overthrowing Queen Elizabeth I and restoring Catholicism. The defeat of the Spanish Armada is considered one of England\'s greatest military achievements, and one that served to boost the monarch\'s popularity'
    ),
    //Question 5
    new Quiz(
        'Select the correct statement from the following:',
        'All shops in the UK close on Bank holidays',
        'All shops in the UK close on Sundays',
        'Most shops in the UK open seven days a week',
        'Overtime is not allowed on Sundays',
        [0, 0, 1, 0],
        'Most shops in the UK are open seven days a week, although trading hours on Sundays and public holidays are generally reduced'
    ),
    //Question 6
    new Quiz(
        'Over which country did James I reign before becoming King of Great Britain?',
        'Ireland',
        'England',
        'Wales',
        'Scotland',
        [0, 0, 0, 1],
        'James I, King of Great Britain (1566-1625) [James VI of Scotland and I of England] James I was the only child of Mary, Queen of Scots and Lord Darnley, both of whom were great-grandchildren of Henry VII. On the death of Elizabeth I in 1603, he moved south and became the first monarch of the Stuart dynasty in England'
    ),
    //Question 7
    new Quiz(
        'Who is the spiritual leader of the Church of England?',
        'The Archbishop of Canterbury',
        'The Monarch',
        'The prime minister',
        'The Archbishop of York',
        [1, 0, 0, 0],
        'The Archbishop of Canterbury is the senior bishop and principal leader of the Church of England, the symbolic head of the worldwide Anglican Communion and the diocesan bishop of the Diocese of Canterbury'
    ),
    //Question 8
    new Quiz(
        'Who was William Wilberforce?',
        'A sculptor',
        'An inventor',
        'A politician',
        'A writer',
        [0, 0, 1, 0],
        'William Wilberforce was an English politician known as a leader of the movement to stop the slave trade. A native of Kingston upon Hull, Yorkshire, he began his political career in 1780, eventually becoming a Member of Parliament for Yorkshire'
    ),
    //Question 9
    new Quiz(
        'At the Battle of Waterloo, Britain fought against ...',
        'France',
        'Belgium',
        'Prussia',
        'Spain',
        [1, 0, 0, 0],
        'In 1815, the French Wars ended with the defeat of the Emperor Napoleon by the Duke of Wellington at the Battle of Waterloo'
    ),
    //Question 10
    new Quiz(
        'Which of the following poets was inspired by nature?',
        'William Shakespeare',
        'Geoffrey Chaucer',
        'William Wordsworth',
        'Alexander Pope',
        [0, 0, 1, 0],
        'British poets, including William Wordsworth, were inspired by nature.'
    ),
    //Question 11
    new Quiz(
        'In the UK what is the minimum age for being able to vote in a general election?',
        '18',
        '16',
        '21',
        '20',
        [1, 0, 0, 0],
        'The present voting age of 18 was set in 1969 and (with a few exceptions) all UK-born and naturalised adult citizens have the right to vote'
    ),
    //Question 12
    new Quiz(
        'Which of the British Armed forces was used in the Battle of Britain?',
        'Special Forces',
        'Royal Air Force',
        'Royal Marines',
        'Royal Armoured Corps and Infantry',
        [0, 1, 0, 0],
        'The Battle of Britain was a military campaign of the Second World War, in which the Royal Air Force (RAF) defended the United Kingdom against large-scale attacks by Nazi Germany\'s air force, the Luftwaffe. It has been described as the first major military campaign fought entirely by air forces'
    ),
    //Question 13
    new Quiz(
        'Who became famous for his tramp character in silent movies?',
        'Gordon Hopkirk',
        'Evan Thomas',
        'Charlie Chaplin',
        'Henry Stuart',
        [0, 0, 1, 0],
        'The Tramp, also known as The Little Tramp, was British actor Charlie Chaplin\'s most memorable on-screen character and an icon in world cinema during the era of silent film. The Tramp is also the title of a silent film starring Chaplin, which Chaplin wrote and directed in 1915'
    ),
    //Question 14
    new Quiz(
        'Elizabeth I was a ...',
        'Catholic',
        'Protestant',
        'Puritan',
        'Nestorian',
        [0, 1, 0, 0],
        'One of her first actions as queen was the establishment of an English Protestant church, of which she became the Supreme Governor. This Elizabethan Religious Settlement was to evolve into the Church of England'
    ),
    //Question 15
    new Quiz(
        'Clansmen of which region in Scotland supported Bonnie Prince Charlie during the rebellion of the clans?',
        'Highlands',
        'Trossachs',
        'Lothian',
        'Fife',
        [1, 0, 0, 0],
        'Bonnie Prince Charlie raised support for his rising amongst the Highland clans which were devoted to the Jacobites'
    ),
    //Question 16
    new Quiz(
        'Where do Beefeaters serve as tour guides?',
        'The zoo',
        'Buckingham Palace',
        'British Museum',
        'The Tower of London',
        [0, 0, 0, 1],
        'The guards at the Tower of London are called Yeoman Warders(nicknamed Beefeaters). In principle they are responsible for looking after any prisoners at the Tower and safeguarding the British crown jewels, but in practice they act as tour guides and are a tourist attraction in their own right. There are twelve Yeomen Warders.'
    ),
    //Question 17
    new Quiz(
        'William Caxton was ...',
        'The designer of the Great Western Railway',
        'The author of \'On the Origin of Species\' ',
        'The first person in England to print books using a printing press',
        'The originator of universal gravitation and laws of classical mechanics and laws of motion',
        [0, 0, 1, 0],
        'William Caxton was an English merchant, diplomat, and writer. He is thought to be the first person to introduce a printing press into England, in 1476, and as a printer was the first English retailer of printed books'
    ),
    //Question 18
    new Quiz(
        'Who united the English kingdoms and defeated the Vikings?',
        'King Alfred the Great',
        'King Ecgberht',
        'King Harold',
        'King Edward the Confessor',
        [1, 0, 0, 0],
        'The Anglo-Saxon kingdoms in England united under King Alfred the Great, who defeated the Vikings'
    ),
    //Question 19
    new Quiz(
        'How did Charles II manage to escape to Europe after his defeat in the Civil War?',
        'Hiding in the bushes',
        'Hiding in an oak tree',
        'Hiding in a cave',
        'He never escaped',
        [0, 1, 0, 0],
        'Charles II escaped from Worcester, famously hiding in an oak tree on one occasion, and eventually fled to Europe'
    ),
    //Question 20
    new Quiz(
        'How are some public holidays called?',
        'National Holidays',
        'Religious Holidays',
        'Public Holidays',
        'Bank Holidays',
        [0, 0, 0, 1],
        'There are public holidays each year called bank holidays, when banks and many other businesses are closed for the day'
    ),
    //Question 21
    new Quiz(
        'Which of the following poems is about a group of people going on a pilgrimage?',
        'Piers Plowman',
        'The Canterbury Tales',
        'Book of the Civilized Man',
        'Sir Gawain and the Green Knight',
        [0, 1, 0, 0],
        'Geoffrey Chaucer wrote a series of poems in English about a group of people going to Canterbury on a pilgrimage. The people decided to tell each other stories on the journey, and the poems describe the travellers and some of the stories they told. This collection of poems is called The Canterbury Tales'
    ),
    //Question 22
    new Quiz(
        'Who did Boudica fight against as the leader of the Iceni tribe?',
        'Normands',
        'Anglo-Saxons',
        'Romans',
        'Picts',
        [0, 0, 1, 0],
        'Boudica was a queen of the British Celtic Iceni tribe who led an uprising against the occupying forces of the Roman Empire in AD 60 or 61, and died shortly after its failure, having supposedly poisoned herself'
    ),
    //Question 23
    new Quiz(
        'Which is the largest National Park in England?',
        'The Lake District',
        'Loch Lomond and the Trossachs National Park',
        'Dartmoor',
        'Yorkshire Dales',
        [1, 0, 0, 0],
        'The Lake District is a region and national park in Cumbria in northwest England. A popular vacation destination, it’s known for its glacial ribbon lakes, rugged fell mountains and historic literary associations'
    ),
    //Question 24
    new Quiz(
        'When is St George’s day celebrated?',
        '22nd April',
        '23rd April',
        '23rd May',
        '22nd May',
        [0, 1, 0, 0],
        'St George’s day, patron of England is celebrated on the 23rd of April.'
    )
];

var quiz7 = [
    //Question 1
    new Quiz(
        'In which year did Germany invade Poland?',
        '1945',
        '1918',
        '1939',
        '1940',
        [0, 0, 1, 0],
        'In August of 1939, Nazi Germany and the Soviet Union signed a non-aggression treaty. One week later, Germany invaded Poland and World War II began'
    ),
    //Question 2
    new Quiz(
        'Select the novel written by J.R.R. Tolkien that was voted the country\'s best loved novel in 2003',
        'Harry Potter',
        'The Lord of the Rings',
        'The Great Gatsby',
        'Catch-22',
        [0, 1, 0, 0],
        'The Lord of the Rings is an epic high fantasy novel written by English author and scholar J. R. R. Tolkien. The story began as a sequel to Tolkien\'s 1937 fantasy novel The Hobbit, but eventually developed into a much larger work. Written in stages between 1937 and 1949, The Lord of the Rings is one of the best-selling novels ever written, with over 150 million copies sold'
    ),
    //Question 3
    new Quiz(
        'How would you best describe \'canvassing\'?',
        'Persuading people to vote for a political party',
        'Is a graphic-design tool website',
        'Outdoor painting',
        'It is related to art and design',
        [1, 0, 0, 0],
        'Members of political parties persuade people to vote for their candidates – for instance, by handing out leaflets in the street or by knocking on people’s doors and asking for their support. This is called ‘canvassing’.'
    ),
    //Question 4
    new Quiz(
        'Where in the British Empire did the Boer War(1899-1902) take place?',
        'New Zealand',
        'Tasmania',
        'North America',
        'South Africa',
        [0, 0, 0, 1],
        'The Boer War was fought between the British Empire and two Boer states, the South African Republic and the Orange Free State, over the Empire\'s influence in South Africa'
    ),
    //Question 5
    new Quiz(
        'Can a man be charged with rape by forcing his wife to have sex?',
        'No, there is no need for consent on both sides',
        'Only if there are physical traces of abuse',
        'Forcing a woman to have sex is considered rape, including in marriage',
        'Only if repetitive emotional abuse can be proven',
        [0, 0, 1, 0],
        'Any man who forces a woman to have sex, including a woman\'s husband, can be charged with rape. It is important for anyone facing domestic violence to get help as soon as possible. A solicitor or the Citizens Advice Bureau can explain the available options'
    ),
    //Question 6
    new Quiz(
        '\'Friends of the Earth\' is a charity for which cause?',
        'For young orphaned children',
        'For the environment',
        'For older people',
        'For animal welfare',
        [0, 1, 0, 0],
        'Friends of the Earth is an environmental campaigning community dedicated to the wellbeing and protection of the natural world and everyone in it'
    ),
    //Question 7
    new Quiz(
        'William of Orange was asked by Protestants to invade England and proclaim himself king. But, when William reached England, there was no resistance and he took over the throne. This event was later Known as:',
        'The \'Glorious Revolution\'',
        'The \'Glorious Takeover\'',
        'The \'Silent Revolution\'',
        'The \'Glorious Restoration\'',
        [1, 0, 0, 0],
        'William of Orange was asked by Protestants to invade England and proclaim himself king. When William reached England, there was no resistance and he took over the throne. This event was later called the ‘Glorious Revolution’'
    ),
    //Question 8
    new Quiz(
        'In which battle did Admiral Nelson die?',
        'Battle of the Saintes',
        'The Battle of the Nile',
        'The Battle of Jutland',
        'The Battle of Trafalgar',
        [0, 0, 0, 1],
        'On 21 October 1805, the Franco-Spanish fleet came out of port, and Nelson\'s fleet engaged them at the Battle of Trafalgar. The battle was Britain\'s greatest naval victory, but during the action, Nelson, aboard HMS Victory, was fatally wounded by a French sharpshooter'
    ),
    //Question 9
    new Quiz(
        'Select one of the following that represents an example of civil law',
        'To carry a knife for self defence',
        'Racial abuse',
        'Discrimination in the workplace',
        'To sell illegal drugs',
        [0, 0, 1, 0],
        'Discrimination in the workplace is an example of civil law. Civil law is quite different from criminal law. It\'s concerned with the rights and property of individual people or organisations, which may not always be protected by criminal laws. Civil law settles disputes between individuals and organisations, and it often involves compensation being awarded'
    ),
    //Question 10
    new Quiz(
        'Which of the following statements is TRUE:',
        'Mary Stuart (‘Mary, Queen of Scots’) was a Protestant',
        'Mary Stuart (‘Mary, Queen of Scots’) was a Catholic',
        'Mary Stuart (‘Mary, Queen of Scots’) was a Puritan',
        'Mary Stuart (‘Mary, Queen of Scots’) was an Atheist',
        [0, 1, 0, 0],
        'Mary had been brought up as a strict Catholic which put her at odds with the Protestant Elizabeth. Mary\'s father, James V of Scotland, died when she was one'
    ),
    //Question 11
    new Quiz(
        'What is the name of the period when new ideas about politics, philosophy and science were developed?',
        'The Enlightenment',
        'Roaring Twenties',
        'The Renaissance',
        'Reconstruction era',
        [1, 0, 0, 0],
        'During the 18th century, new ideas about politics, philosophy and science were developed. This is often called ‘the Enlightenment’'
    ),
    //Question 12
    new Quiz(
        'Select the patron Saint of Northern Ireland?',
        'St Patrick',
        'St David',
        'St Andrew',
        'St Augustine',
        [1, 0, 0, 0],
        'Saint Patrick is the patron saint of Ireland. He was a Christian missionary given credited with converting Ireland to Christianity in the AD 400s'
    ),
    //Question 13
    new Quiz(
        'By which methods can complaints be made against the police?',
        'Going to the police station',
        'Writing to your MP',
        'Writing to the Chief Constable',
        'Post on social media about your incident',
        [1, 0, 1, 0],
        'Anyone can make a complaint about the police by going to a police station or by writing to the Chief Constable of the police force involved. Complaints can also be made to an independent body: the Independent Police Complaints Commission in England and Wales, the Police Complaints Commissioner for Scotland or the Police Ombudsman for Northern Ireland'
    ),
    //Question 14
    new Quiz(
        'Who was the father of Queen Elizabeth I?',
        'James VI and I',
        'Edward V',
        'Henry VIII',
        'James II',
        [0, 0, 1, 0],
        'Elizabeth was the daughter of Henry VIII and Anne Boleyn, his second wife, who was executed two-and-a-half years after Elizabeth\'s birth'
    ),
    //Question 15
    new Quiz(
        'Who was defeated by Oliver Cromwell during the Civil War and hid in an oak tree before escaping to Europe?',
        'Charles II',
        'Charles I',
        'Charles III',
        'Charles IV',
        [1, 0, 0, 0],
        'The Royal Oak is the English oak tree within which the future King Charles II of England hid to escape the Roundheads following the Battle of Worcester in 1651'
    ),
    //Question 16
    new Quiz(
        'On what occasion does the television and radio often play jokes until midday?',
        'Halloween',
        'April Fool’s Day',
        'Bonfire Night',
        'Shrove Tuesday or ‘Pancake Day’',
        [0, 1, 0, 0],
        'April Fool’s Day, 1 April, is a day when people play jokes on each other until midday. The television and newspapers often have stories that are April Fool jokes'
    ),
    //Question 17
    new Quiz(
        'Golf originates from which country?',
        'South Africa',
        'England',
        'India',
        'Scotland',
        [0, 0, 0, 1],
        'Golf originated from a game played on the eastern coast of Scotland, in an area close to the royal capital of Edinburgh. In those early days players would attempt to hit a pebble over sand dunes and around tracks using a bent stick or club'
    ),
    //Question 18
    new Quiz(
        'What type of church is the Church of Scotland?',
        'Presbyterian Church',
        'Roman Catholic Church',
        'Church of England',
        'Coptic Orthodox Church',
        [1, 0, 0, 0],
        'In Scotland, the national Church is the Church of Scotland, which is a Presbyterian Church. It is governed by ministers and elders. The chairperson of the General Assembly of the Church of Scotland is the Moderator'
    ),
    //Question 19
    new Quiz(
        'Where should you register if you want to become part of a jury?',
        'Council office',
        'The electoral register',
        'Post office',
        'Magistrates Courts',
        [0, 1, 0, 0],
        'People on the electoral register are randomly selected to serve on a jury. If you wish to be considered to be part of a jury you have to be on the electoral register and be between 18 to 70 years old.'
    ),
    //Question 20
    new Quiz(
        'Select the following locations that are NOT part of the UK',
        'St Helena',
        'Falkland Islands',
        'Isle of Wight',
        'Isle of Skye',
        [1, 1, 0, 0],
        'St Helena and the Falkland Islands are British overseas territories, they are linked to the UK but are not part of it'
    ),
    //Question 21
    new Quiz(
        'Select two of the following that are part of the fundamental principles of British life',
        'Personal financial gain',
        'Renunciation',
        'Democracy',
        'The rule of law',
        [0, 0, 1, 1],
        'The fundamental principles of British life include: democracy, the rule of law, individual liberty, tolerance of those with different faiths and beliefs and participation in community life'
    ),
    //Question 22
    new Quiz(
        'The Eden Project is located in:',
        'Cornwall',
        'Kent',
        'Hampshire',
        'Oxford',
        [1, 0, 0, 0],
        'The Eden Project is a popular visitor attraction in Cornwall, South West England, UK. Inside the two biomes are plants that are collected from many diverse climates and environments'
    ),
    //Question 23
    new Quiz(
        'Select the valid coins that are in circulation in the UK',
        '10p',
        '25p',
        '15p',
        '50p',
        [1, 0, 0, 1],
        'There are no 25p and 15p coins in the UK currency'
    ),
    //Question 24
    new Quiz(
        'When is Easter celebrated?',
        'From November to December',
        'August',
        'March or April',
        'June or July',
        [0, 0, 1, 0],
        'In Western Christianity, using the Gregorian calendar, Easter always falls on a Sunday between 22 March and 25 April inclusive, within about seven days after the astronomical full moon. The following day, Easter Monday, is a legal holiday in many countries with predominantly Christian traditions'
    )
];

var quiz8 = [
    //Question 1
    new Quiz(
        'Who was the leader of the Iceni tribe that fought against the Romans',
        'Boudica of the British Iceni',
        'Caratacus of the British Catuvellauni',
        'Brennus of the Gaulish Senones',
        'Vercingetorix of the Gaulish Arverni',
        [1, 0, 0, 0],
        'Boudica was a queen of the British Celtic Iceni tribe who led an uprising against the occupying forces of the Roman Empire in AD 60 or 61, and died shortly after its failure, having supposedly poisoned herself'
    ),
    //Question 2
    new Quiz(
        'Which invention powered Britain to prominence as the first industrial country in the world?',
        'Steam Power',
        'Automobiles',
        'Telephone',
        'Electrical Telegraph',
        [1, 0, 0, 0],
        'Steam engine: 1712 Innovative steam engines produced by Thomas Newcomen and developed by James Watt powered Britain to prominence as the first industrial country in the world. For almost 200 years(18th and 19th Century) it was the outstanding source of power for industry and transport systems in the West'
    ),
    //Question 3
    new Quiz(
        'Which of the following countries helped Britain to develop the Concorde?',
        'U.S.A',
        'France',
        'Spain',
        'Sweden',
        [0, 1, 0, 0],
        'The Aérospatiale/BAC Concorde is a British-French turbojet-powered supersonic passenger airliner that was operated from 1976 until 2003. It had a maximum speed over twice the speed of sound at Mach 2.04, with seating for 92 to 128 passengers'
    ),
    //Question 4
    new Quiz(
        'Who are civil servants accountable to?',
        'National Health Service (NHS)',
        'British Armed Forces',
        'Members of the Royal Household',
        'Ministers',
        [0, 0, 0, 1],
        'Civil servants support the government in developing and implementing its policies. They also deliver public services. Civil servants are accountable to ministers. They are chosen on merit and are politically neutral - they are not political appointees. Their core values are integrity, honesty, objectivity and impartiality(including being politically neutral)'
    ),
    //Question 5
    new Quiz(
        'Why were canals built during the Industrial Revolution?',
        'To increase tourism',
        'So big ships can get into the English mainland',
        'To link the factories to towns and cities and to the ports',
        'It was part of the sewage system development',
        [0, 0, 1, 0],
        'Better transport links were needed to transport raw materials and manufactured goods. Canals were built to link the factories to towns and cities and to the ports, particularly in the new industrial areas in the middle and north of England'
    ),
    //Question 6
    new Quiz(
        'On how many occasions did the U.K. host the Olympic Games?',
        '1',
        '2',
        '3',
        '7',
        [0, 0, 1, 0],
        'The U.K. has hosted the Olympic Games on three occasions: 1908, 1948 and 2012. The main Olympic site for the 2012 Games was in Stratford, East London'
    ),
    //Question 7
    new Quiz(
        'Who became British Prime Minister in 1945?',
        'Winston Churchill',
        'Clement Attlee',
        'Neville Chamberlain',
        'Sir Anthony Eden',
        [0, 1, 0, 0],
        'In 1945 the British people elected a Labour government. The new Prime Minister was Clement Attlee, who promised to introduce the welfare state outlined in the Beveridge Report. Under his political leadership of the Government, the NHS was created which guaranteed a minimum standard of health care for all, free at the point of use'
    ),
    //Question 8
    new Quiz(
        'What is the traditional food of Northern Ireland?',
        'Scotch eggs',
        'White pudding',
        'Pork pie',
        'Ulster Fry',
        [0, 0, 0, 1],
        'The traditional food for Northern Ireland is Ulster fry - a fried meal with bacon. eggs, sausage, black pudding, white pudding, tomatoes, mushrooms, soda bread and potato bread'
    ),
    //Question 9
    new Quiz(
        'What is the system of government in the U.K.?',
        'Parliamentary Democracy',
        'Republic',
        'Absolute monarchy',
        'Presidential system',
        [1, 0, 0, 0],
        'The United Kingdom is a unitary state with devolution that is governed within the framework of a parliamentary democracy under a constitutional monarchy in which the monarch, is the head of state while the Prime Minister of the United Kingdom, is the head of government'
    ),
    //Question 10
    new Quiz(
        'What is the minimum age requirement in the U.K. to be able to go into betting shops and gambling clubs?',
        '16',
        '18',
        '21',
        '25',
        [0, 1, 0, 0],
        'You have to be 18 or over to go into betting shops or gambling clubs'
    ),
    //Question 11
    new Quiz(
        'Who was the first Archbishop of Canterbury?',
        'Laurence of Canterbury',
        'Saint Alban',
        'Mellitus of Canterbury',
        'Saint Augustine',
        [0, 0, 0, 1],
        'Augustine of Canterbury was a Catholic Benedictine monk who became the first Archbishop of Canterbury in the year 597'
    ),
    //Question 12
    new Quiz(
        'What monuments are found in Wiltshire?',
        'Westminster Abbey',
        'Roman Baths',
        'Stonehenge',
        'Hadrian\'s Wall',
        [0, 0, 1, 0],
        'Stonehenge is a prehistoric monument in Wiltshire, England, 2 miles west of Amesbury. It consists of a ring of standing stones, with each standing stone around 13 feet high, 7 feet wide and weighing around 25 tons'
    ),
    //Question 13
    new Quiz(
        'Which war was first to be extensively covered by the media?',
        'The Crimean War',
        'First World War',
        'Napoleonic Wars',
        'The Troubles',
        [1, 0, 0, 0],
        'The Crimean War was the first war to be extensively covered by the media through news stories and photographs'
    ),
    //Question 14
    new Quiz(
        'Who mapped the coast of Australia?',
        'James Cook',
        'Christopher Columbus',
        'Francis Drake',
        'Vasco da Gama',
        [1, 0, 0, 0],
        'Captain James Cook (7 November 1728 – 14 February 1779) was a British explorer, navigator, cartographer, and captain in the Royal Navy. He mapped the coast of Australia and a few colonies were established there',
    ),
    //Question 15
    new Quiz(
        'Who appoints life peers in the House of Lords?',
        'The Prime Minister',
        'The monarch',
        'Local Council',
        'The Archbishop of Canterbury',
        [0, 1, 0, 0],
        'Life peers are appointed by the monarch on the advice of the Prime Minister'
    ),
    //Question 16
    new Quiz(
        'Which of the following is a rugby competition?',
        'EFL Championship',
        'The British Grand Prix',
        'The Ashes',
        'The Six Nations Championship',
        [0, 0, 0, 1],
        'The Six Nations Championship is an annual international rugby union competition between the teams of England, France, Ireland, Italy, Scotland and Wales'
    ),
    //Question 17
    new Quiz(
        'Through which official reports can the public get information about proceedings in the Parliament?',
        'England Law Reports',
        'Treasury minutes',
        'Hansard',
        'Fiscal sustainability report',
        [0, 0, 1, 0],
        'Hansard (the Official Report) is the edited verbatim report of proceedings of both the House of Commons and the House of Lords. These proceedings in the Parliament are also broadcast on television'
    ),
    //Question 18
    new Quiz(
        'When is Hogmanay celebrated?',
        '31st of December',
        'January 1',
        '25th of December',
        'April 1',
        [1, 0, 0, 0],
        'Hogmanay is the Scots word for the last day of the year(31st of December) and is synonymous with the celebration of the New Year in the Scottish manner'
    ),
    //Question 19
    new Quiz(
        'Which best known British Admiral died at the battle of Trafalgar?',
        'Admiral Edward Hawke',
        'Admiral Robert Blake',
        'Admiral Nelson',
        'Admiral George Rodney',
        [0, 0, 1, 0],
        'Admiral Nelson (29 September 1758 – 21 October 1805) was a British flag officer in the Royal Navy. He was noted for his inspirational leadership, grasp of strategy, and unconventional tactics, which together resulted in a number of decisive British naval victories, particularly during the Napoleonic Wars. He was shot and killed during his final victory at the Battle of Trafalgar near the port city of Cádiz in 1805'
    ),
    //Question 20
    new Quiz(
        'What ideas did Adam Smith develop about during the Enlightenment Age?',
        'Economics',
        'Science',
        'Engineering',
        'Philosophy',
        [1, 0, 0, 0],
        'Compared to other major Enlightenment thinkers Adam Smith (1723—1790) devoted most of his time towards the economic ideas of the Enlightenment Era, such as the idea of laissez-faire and the law of supply which created the basic concepts of modern economics'
    ),
    //Question 21
    new Quiz(
        'Which of the following actresses has NOT won an Oscar?',
        'Dame Judi Dench',
        'Sir Antony Hopkins',
        'Colin Firth',
        'Emily Watson',
        [0, 0, 0, 1],
        'British actors to have won Oscars include Colin Firth, Sir Antony Hopkins, Dame Judi Dench, Kate Winslet and Tilda Swinton. Emily Watson has not won an Oscar yet'
    ),
    //Question 22
    new Quiz(
        'Who was the first British Prime Minister?',
        'Spencer Perceval',
        'Sir Robert Walpole',
        'Robert Banks Jenkinson ',
        'Oliver Cromwell',
        [0, 1, 0, 0],
        'The most important minister in Parliament became known as the Prime Minister. The first man to be called this was Sir Robert Walpole, who was Prime Minister from 1721 to 1742'
    ),
    //Question 23
    new Quiz(
        'How are members of the Northern Ireland Parliament elected?',
        'Majoritarian systems',
        'Indirect elections',
        'By a system of proportional representation',
        'Plurality systems',
        [0, 0, 1, 0],
        'Proportional representation is an electoral system in which the distribution of seats corresponds closely with the proportion of the total votes cast for each party. For example, if a party gained 40% of the total votes, a perfectly proportional system would allow them to gain 40% of the seats. The Northern Ireland Assembly has 108 elected members, known as MLAs (members of the Legislative Assembly)'
    ),
    //Question 24
    new Quiz(
        'When is St Patrick’s day celebrated?',
        '17th March',
        '1st March',
        '18th March',
        '16th March',
        [1, 0, 0, 0],
        'Saint Patrick\'s Day, or the Feast of Saint Patrick, is a cultural and religious celebration held on 17 March, the traditional death date of Saint Patrick, the foremost patron saint of Northern Ireland and Ireland'
    )
];

var quiz9 = [
    //Question 1
    new Quiz(
        'Which two documents do you need to apply for a National Insurance number?',
        'Documents that prove that you have permission to work in the UK',
        'Documents that prove your identity',
        'A contract of employment',
        'A document with your address on it, such as a utility bill',
        [1, 1, 0, 0],
        'To apply for a National Insurance number you need documents that prove your identity and that you have permission to work in the UK'
    ),
    //Question 2
    new Quiz(
        'Which of the following statements is true:',
        'Elizabeth I was a Protestant and she persecuted the Catholics',
        'Elizabeth I was a Catholic and she persecuted the Protestants',
        'Elizabeth I was a Protestant and she succeeded in finding a balance between the views of the Catholics and the more extreme Protestants.',
        'Elizabeth I was a Catholic and she succeeded in finding a balance between the views of the Catholics and the more extreme Protestants.',
        [0, 0, 1, 0],
        'Elizabeth I was brought up a Protestant. She realised that religion had caused a lot of problems for England. She tried to find a \'middle way\' that both Catholics and Protestants could accept'
    ),
    //Question 3
    new Quiz(
        'In 1913, the British government promised ‘Home Rule’ for Ireland, why were any changes in Ireland delayed until 1921?',
        'Due to the Irish Republican Nationalist Movement',
        'Due to the outbreak of the First World War',
        'Due to the outbreak of the Second World War',
        'Because of religious differences',
        [0, 1, 0, 0],
        'The outbreak of the First World War led the British government to postpone any changes in Ireland'
    ),
    //Question 4
    new Quiz(
        'Which two of the following records give us information about England during the reign of William I?',
        'The Domesday Book',
        'The Magna Carta',
        'The Canterbury Tales',
        'The Bayeux Tapestry',
        [1, 0, 0, 1],
        'The Bayeux Tapestry is an embroidered cloth nearly 70 metres long and 50 centimetres tall, which depicts the events leading up to the Norman conquest of England concerning William the Conqueror. The Domesday Book is a manuscript record of the "Great Survey" of much of England and parts of Wales completed in 1086 by order of King William the Conqueror'
    ),
    //Question 5
    new Quiz(
        'Which court deals with minor criminal offences in Scotland?',
        'Court of Appeal',
        'The Justice of the Peace Court',
        'Coroners\' court',
        'Magistrates\' and youth court',
        [0, 1, 0, 0],
        'A justice of the peace court is the least authoritative type of criminal court in Scotland. The court operates under summary procedure and deals primarily with less serious criminal offences'
    ),
    //Question 6
    new Quiz(
        'Haggis is a traditional food from which part of the U.K.?',
        'Scotland',
        'England',
        'Wales',
        'Northern Ireland',
        [1, 0, 0, 0],
        'Haggis is a traditional Scottish sausage made from a sheep\'s stomach stuffed with diced sheep\'s liver, lungs and heart, oatmeal, onion, suet and seasoning'
    ),
    //Question 7
    new Quiz(
        'In 1348, one third of the population in England, Wales and Scotland died as a result of which disease?',
        'Smallpox',
        'The Black Death',
        'Tuberculosis',
        'Whooping Cough',
        [0, 1, 0, 0],
        'The Black Death was a bubonic plague pandemic, which reached England in June 1348. One third of the population of England died and a similar proportion in Scotland and Wales'
    ),
    //Question 8
    new Quiz(
        'Who established the Church of England?',
        'William of Orange',
        'Henry VII',
        'Henry VIII',
        'Mary I of England',
        [0, 0, 1, 0],
        'Henry VIII started the process of creating the Church of England after his split with the Pope in the 1530s. Henry was anxious to ensure a male heir after his first wife, Catherine of Aragon, had borne him only a daughter. He wanted his marriage annulled in order to remarry'
    ),
    //Question 9
    new Quiz(
        'Which two political parties formed a coalition in 2010?',
        'The Liberal Democrats Party',
        'The Conservative Party',
        'The Labour Party',
        'UKIP',
        [1, 1, 0, 0],
        'n May 2010 the Conservative and Liberal Democrat parties formed a coalition and the leader of the Conservative Party, David Cameron, became Prime Minister'
    ),
    //Question 10
    new Quiz(
        'Where is Swansea located?',
        'Wales',
        'England',
        'Northern Ireland',
        'Scotland',
        [1, 0, 0, 0],
        'Swansea it is located in Wales'
    ),
    //Question 11
    new Quiz(
        'What type of battle was the ‘Battle of Britain’, fought between Germany and Britain in the summer of 1940?',
        'An aerial battle',
        'A naval battle',
        'A Land battle',
        'A passive battle',
        [1, 0, 0, 0],
        'The Battle of Britain was a military campaign of the Second World War, in which the Royal Air Force defended the United Kingdom against large-scale attacks by Nazi Germany\'s air force, the Luftwaffe'
    ),
    //Question 12
    new Quiz(
        'On which day is the birth of Jesus Christ celebrated?',
        'Easter Sunday',
        'Good Friday',
        'Christmas Day',
        'New Year\'s Eve',
        [0, 0, 1, 0],
        'Born on Christmas Day. Christians celebrate the birth of Jesus on 25 December'
    ),
    //Question 13
    new Quiz(
        'Who uses a system called ‘individual registration’?',
        'Scotland ',
        'Wales ',
        'England',
        'Northern Ireland',
        [0, 0, 0, 1],
        'Northern Ireland uses a system called ‘individual registration’ and all those entitled to vote must complete their own registration form'
    ),
    //Question 14
    new Quiz(
        'Who was reigning in Britain when English settlers first began to colonise the eastern coast of America?',
        'Elizabeth I',
        'Mary I of England',
        'Queen Victoria',
        'William of Orange',
        [1, 0, 0, 0],
        'In Elizabeth I’s time, English settlers first began to colonise the eastern coast of America'
    ),
    //Question 15
    new Quiz(
        'Which two of the following are famous British Paralympians?',
        'Thomas Murray',
        'Robin Welsh',
        'Ellie Simmonds',
        'Baroness Tanni Grey-Thompson',
        [0, 0, 1, 1],
        'Baroness Tanni Grey-Thompson and Ellie Simmonds are the correct answers'
    ),
    //Question 16
    new Quiz(
        'Where was William Shakespeare born?',
        'Stratford-upon-Avon',
        'Newcastle upon Tyne',
        'Oxford',
        'Warwick',
        [1, 0, 0, 0],
        'William Shakespeare was born in Stratford-upon-Avon, England, in April 1564'
    ),
    //Question 17
    new Quiz(
        'Which king was executed in 1649?',
        'Henry VIII',
        'James IV',
        'Charles II',
        'Charles I',
        [0, 0, 0, 1],
        'Charles I (19 November 1600 – 30 January 1649) was monarch of the three kingdoms of England, Scotland, and Ireland from 27 March 1625 until his execution in 1649'
    ),
    //Question 18
    new Quiz(
        'How often are ‘Prime Minister’s Questions’ held in the parliament?',
        'Every month',
        'Once a year',
        'Every week',
        'During Elections',
        [0, 0, 1, 0],
        'Prime Minister’s Questions takes place every week while Parliament is sitting'
    ),
    //Question 19
    new Quiz(
        'Which territories form Great Britain?',
        'England and Wales',
        'Northern Ireland',
        'Scotland',
        'The Channel Islands',
        [1, 0, 1, 0],
        '‘Great Britain’ refers only to England, Scotland and Wales, not to Northern Ireland'
    ),
    //Question 20
    new Quiz(
        'Which U.K. countries have their own established church?',
        'Northern Ireland',
        'Scotland',
        'England',
        'Wales',
        [0, 1, 1, 0],
        'There is no established church in Northern Ireland and Wales'
    ),
    //Question 21
    new Quiz(
        'There are 15 national parks in England, Wales and Scotland. What are national parks?',
        'A restricted area where you cannot go',
        'A strictly mountainous area',
        'Areas with farm animals',
        'Areas of protected countryside',
        [0, 0, 0, 1],
        'A National Park is an area of countryside, or occasionally sea or fresh water, protected by the state for the enjoyment of the general public or the preservation of wildlife'
    ),
    //Question 22
    new Quiz(
        'Who built the Tower of London?',
        'William the Conqueror',
        'Henry VIII',
        'King Harold',
        'King Alfred the Great',
        [1, 0, 0, 0],
        'The Tower of London was built in 1078 by William the conqueror'
    ),
    //Question 23
    new Quiz(
        'Who minted the first coins in Britain?',
        'The People of the Bronze Age',
        'The Romans',
        'The people of the Iron Age',
        'The Anglo-Saxons',
        [0, 0, 1, 0],
        'The Iron Age people had a sophisticated culture and economy. They made the first coins to be minted in Britain, some inscribed with the names of Iron Age kings. This marked the beginnings of British history'
    ),
    //Question 24
    new Quiz(
        'As a British citizen what are your responsibilities?',
        'Not going bankrupt',
        'To respect and obey the law',
        'To look after yourself and your family',
        'Spy on your neighbour',
        [0, 1, 1, 0],
        'If you wish to be a permanent resident or citizen of the UK, you should: respect and obey the law, look after yourself and your family, respect the rights of others, including their right to their own opinions, treat others with fairness and look after the area in which you live and the environment'
    )
];

var quiz10 = [
    //Question 1
    new Quiz(
        'When was the last successful foreign invasion of England?',
        '1948',
        '1066',
        '980',
        '1546',
        [0, 0, 1, 0],
        'The Norman Conquest was the last successful foreign invasion of England in 1066'
    ),
    //Question 2
    new Quiz(
        'What is known as Lent?',
        'The 40 days after Easter',
        'The 40 days before Christmas',
        'Same as Good Friday',
        'The 40 days before Easter',
        [0, 0, 0, 1],
        'Lent is a solemn religious observance in the Christian liturgical calendar that begins on Ash Wednesday and ends approximately six weeks later, before Easter Sunday'
    ),
    //Question 3
    new Quiz(
        'How many members form a jury in Scotland?',
        '12',
        '10',
        '7',
        '15',
        [0, 0, 0, 1],
        'In England, Wales and Northern Ireland a jury has 12 members, and in Scotland a jury has 15 members'
    ),
    //Question 4
    new Quiz(
        'Which of the following is a major horse-racing event in England?',
        'Royal Ascot',
        'Formula One Grands Prix',
        'British Drift Championship',
        'The Six Nations Championship',
        [1, 0, 0, 0],
        'Ascot Racecourse is a British racecourse, located in Ascot, Berkshire, England, which is used for thoroughbred horse racing. It is one of the leading racecourses in the United Kingdom, hosting 13 of Britain\'s 36 annual Group 1 horse races. Other major horse racing events are the Grand National at Aintree near Liverpool and the Scottish Grand National at Ayr'
    ),
    //Question 5
    new Quiz(
        'What do you need to do in order to apply for a National Insurance Number?',
        'Contact your local council',
        'Contact the Department for Work and Pensions (DWP)',
        'Ask your employer to sort it out for you',
        'Contact HM Revenue and Customs',
        [0, 1, 0, 0],
        'If you have permission to work in the UK, you will need to telephone the Department for Work and Pensions (DWP) to arrange to get a National Insurance number'
    ),
    //Question 6
    new Quiz(
        'What is the name of the movement that went against the Roman Catholic Church and the Pope during the reign of Henry VIII?',
        'Renaissance',
        'The Enlightenment',
        'The Great Liberation',
        'The Reformation',
        [0, 0, 0, 1],
        'King Henry VIII (1491-1547) ruled England for 36 years, presiding over sweeping changes that brought his nation into the Protestant Reformation. The English Protestant Reformation was a series of events in 16th century England by which the Church of England broke away from the authority of the Pope and the Roman Catholic Church'
    ),
    //Question 7
    new Quiz(
        'What were the first people that lived in Britain during the Stone Age?',
        'Farmers',
        'Sailors',
        'Warriors',
        'Hunter-gatherers',
        [0, 0, 0, 1],
        'The first people to live in Britain were hunter-gatherers, in what we call the Stone Age. For much of the Stone Age, Britain was connected by a land bridge. People came and went following the herds of deer and horses which they hunted'
    ),
    //Question 8
    new Quiz(
        'What UK landmark was voted as Britain’s favourite view in 2007?',
        'River Thames',
        'Lake District',
        'Hadrian\'s wall',
        'Stonehenge',
        [0, 1, 0, 0],
        'In 2007, television viewers voted Wastwater (Lake District) as Britain’s favourite view'
    ),
    //Question 9
    new Quiz(
        'What was the name of the activist group that was seeking the right to vote for women through organized protest?',
        'British Federation of Women Graduates',
        'Socialist Women\'s Network',
        'Suffragettes',
        'Women\'s Local Government Society',
        [0, 0, 1, 0],
        'Suffragettes were members of women\'s organisations in the late-19th and early-20th centuries who, under the banner "Votes for Women", fought for women\'s suffrage, the right to vote in public elections'
    ),
    //Question 10
    new Quiz(
        'Which two of the following are Civil War Battles?',
        'The Battle of Marston Moor',
        'The Battle of Hastings',
        'Battle of Maldon',
        'The Battle of Naseby',
        [1, 0, 0, 1],
        'The Battle of Marston Moor (July 2nd 1644), along with the battles fought at Edgehill and Naseby, was one of the major battles of the English Civil War'
    ),
    //Question 11
    new Quiz(
        'Select one of the following that is a British overseas territory but not part of the UK:',
        'Isle of Wight',
        'Falkland Islands',
        'Isles of Scilly',
        'Mersea Island',
        [0, 1, 0, 0],
        'The Falkland Islands are a self-governing British Overseas Territory that is linked to the U.K. but is not part of it.'
    ),
    //Question 12
    new Quiz(
        'What is the name of the process by which many Scottish landlords destroyed individual small farms (known as ‘crofts’) to make space for large flocks of sheep and cattle?',
        'The Reformation',
        'The Great Famine',
        'The Highland Potato Famine',
        'The Highland Clearances',
        [0, 0, 0, 1],
        'Highland Clearances, the forced eviction of inhabitants of the Highlands and western islands of Scotland, beginning in the mid-to-late 18th century and continuing intermittently into the mid-19th century. The removals cleared the land of people primarily to allow for the introduction of sheep pastoralism'
    ),
    //Question 13
    new Quiz(
        'What did the Emancipation Act of 1833 abolish throughout the British Empire?',
        'Slavery',
        'The powers of the monarchy',
        'The powers of the parliament',
        'Religious Freedom',
        [1, 0, 0, 0],
        'n August 1833, the Slave Emancipation Act was passed, giving all slaves in the British empire their freedom, albeit after a set period of years. Plantation owners received compensation for the \'loss of their slaves\' in the form of a government grant set at £20,000,000'
    ),
    //Question 14
    new Quiz(
        'What is the capital city of Scotland?',
        'Aberdeen',
        'Glasgow',
        'Edinburgh',
        'Dundee',
        [0, 0, 1, 0],
        'Edinburgh has been the capital of Scotland since 1437, when it replaced Scone. The Scottish Parliament resides in Edinburgh. However, in the past, Edinburgh Castle was often under English control. Before the 10th Century, Edinburgh was under the control of the Anglo-Saxons and Danelaw'
    ),
    //Question 15
    new Quiz(
        'The assassination of the Archduke Franz Ferdinand of Austria in 1914 led to which of the following wars?',
        'The Manchu Conquest of China',
        'The Napoleonic Wars',
        'The First World War',
        'The Second World War',
        [0, 0, 1, 0],
        'Franz Ferdinand (1863-1914) was born in Graz, Austria.  As the heir to the Austro-Hungarian empire his assassination on 28 June 1914 sparked the First World War'
    ),
    //Question 16
    new Quiz(
        'Which two issues can the devolved administrations pass laws on?',
        'Health',
        'Immigration',
        'Defence',
        'Education',
        [1, 0, 0, 1],
        'Policy and laws governing defence, foreign affairs, immigration, taxation and social security all remain under central UK government control. However, many other public services, such as health and education, are controlled by the devolved administrations.'
    ),
    //Question 17
    new Quiz(
        'Which Scottish clan was killed for not taking the oath?',
        'The MacDonell of Glengarry',
        'The MacDonalds of Glencoe',
        'The Macleod of the Lewes',
        'The Murray of Atholl',
        [0, 1, 0, 0],
        'The MacDonalds alliance to the Stuart cause made them more unpopular with the government for not formally accepting William as king and not taking the oath on time. This led to the Massacre of Glencoe in the early hours of the 13th of February 1692, where 38 unarmed MacDonalds were massacred'
    ),
    //Question 18
    new Quiz(
        'Which of the following is an example of criminal offence?',
        'Invasion of privacy',
        'Smoking in public places where it is not allowed',
        'Defamation',
        'Tax evasion',
        [0, 1, 0, 0],
        'It is against the law to smoke tobacco products in nearly every enclosed public place in the UK. There are signs displayed to tell you where you cannot smoke.'
    ),
    //Question 19
    new Quiz(
        'Did the Scottish led by Robert the Bruce in 1314 defeat the English at the battle of Bannockburn?',
        'The English were victorious and conquered Scotland',
        'The English were victorious but did not conquer Scotland',
        'The Scots were victorious and Scotland remained unconquered by the English',
        'The Scots were victorious but the English still managed to conquer most of Scotland',
        [0, 0, 1, 0],
        'In 1314 the Scottish, led by Robert the Bruce, defeated the English at the battle of Bannockburn, and Scotland remained unconquered by the English'
    ),
    //Question 20
    new Quiz(
        'Which 18th century industry was employing the most people in Britain?',
        'Fishing and Mining',
        'Farming',
        'Manufacturing',
        'Hospitality',
        [0, 0, 1, 0],
        'During the 18th century, manufacturing jobs became the main source of employment in Britain.'
    ),
    //Question 21
    new Quiz(
        'What is the name of the most famous cricket competition played between England and Australia?',
        'The Six Nations Championship',
        'The Grand National',
        'Wimbledon',
        'The Ashes',
        [0, 0, 0, 1],
        'The most famous cricket competition is the Ashes, which is a series of Test matches played between England and Australia.'
    ),
    //Question 22
    new Quiz(
        'Which document from 1689 confirm the rights of parliament and the limits of the king\'s power?',
        'Beveridge report',
        'Rights of Man',
        'Representation of the People Act',
        'Bill of Rights',
        [0, 0, 0, 1],
        'The Bill of Rights, 1689, confirmed the rights of Parliament and the limits of the king’s power'
    ),
    //Question 23
    new Quiz(
        'When is Halloween celebrated?',
        '31st of October',
        '5th of November',
        '25th of December',
        '31st of December',
        [1, 0, 0, 0],
        'Halloween, 31 October, is an ancient festival and has roots in the pagan festival to mark the beginning of winter. Young people will often dress up in frightening costumes to play \'trick or treat\''
    ),
    //Question 24
    new Quiz(
        'As a British citizen, you should:',
        'Report on your neighbour',
        'Respect and obey the law',
        'Look after the area in which you live and the environment',
        'Do not walk your dog without a leash in public areas',
        [0, 1, 1, 0],
        'As a British citizen you should respect and obey the law and look after the area in which you live and the environment'
    )
];

var quiz11 = [
    //Question 1
    new Quiz(
        'What is the Turner Prize?',
        'Contemporary art award',
        'Literary award',
        'Music award',
        'Theater award',
        [1, 0, 0, 0],
        'The Turner Prize was established in 1984 and celebrates contemporary art. It was named after Joseph Turner. Four works are shortlisted every year and shown at Tate Britain before the winner is announced. The Turner Prize is recognised as one of the most prestigious visual art awards in Europe'
    ),
    //Question 2
    new Quiz(
        'What type of election is held if a member of the Parliament dies or resigns?',
        'General election',
        'European Election',
        'By-election',
        'There is no election, the Prime Minister appoints a replacement',
        [0, 0, 1, 0],
        'A UK Parliamentary by-election takes place when a seat in the House of Commons becomes vacant between general elections'
    ),
    //Question 3
    new Quiz(
        'What is the Man Booker Prize?',
        'Music award',
        'Visual art award',
        'Literary award',
        'Digital painting award',
        [0, 0, 1, 0],
        'The Man Booker Prize for Fiction is a literary prize awarded each year for the best original novel written in the English language and published in the UK'
    ),
    //Question 4
    new Quiz(
        'When did the Beatles become popular and social laws got liberalised?',
        'During the 1960s',
        'Between the 1940s and 1950s',
        'During the 1970s',
        'Early 1980s',
        [1, 0, 0, 0],
        'he decade of the 1960s was a period of significant social change. It was known as the ‘swinging sixties’. There was growth in British fashion, cinema and popular music. Two well-known pop music groups at the time were The Beatles and The Rolling Stones. It was also a time when social laws were liberalised, for example in relation to divorce and to abortion in England, Wales and Scotland. The position of women in the workplace also improved.'
    ),
    //Question 5
    new Quiz(
        'How often are the members of the Welsh Assembly (AMs) elected?',
        'Every 2 years',
        'Every 3 years',
        'Every 6 years',
        'Every 4 years',
        [0, 0, 0, 1],
        'The National Assembly for Wales is a devolved parliament with power to make legislation and vary taxes in Wales. The Assembly comprises 60 members, who are known as Assembly Members, or AMs. Elections are held every four years using a form of proportional representation'
    ),
    //Question 6
    new Quiz(
        'Who is the designer of the Cenotaph',
        'Richard Rogers',
        'Sir Edwin Lutyens',
        'Will Alsop',
        'Zaha Hadid',
        [0, 1, 0, 0],
        'The Cenotaph positioned on Whitehall in London has become the central focus for the remembrance and commemoration events in Britain since the First World War. Sir Edwin Lutyens was an English architect known for imaginatively adapting traditional architectural styles to the requirements of his era. He designed many English country houses, public buildings and war memorials around the world including the Cenotaph in Whitehall'
    ),
    //Question 7
    new Quiz(
        'In 1588 the British were victorious against:',
        'The Jacobite risings',
        'The Vikings',
        'The Spanish Armada',
        'The French Army',
        [0, 0, 1, 0],
        'The defeat of the Spanish Armada in 1588 has long been held as one of England\'s greatest military achievements, and a sign of the strength and spirit imparted to the country by the reign of Queen Elizabeth I'
    ),
    //Question 8
    new Quiz(
        'Which two of the following are British overseas territories?',
        'Guam',
        'St Helena',
        'The Falkland Islands',
        'Northern Mariana Islands',
        [0, 1, 1, 0],
        'St Helena and the Falkland Islands are British overseas territories, they are linked to the UK but are not part of it'
    ),
    //Question 9
    new Quiz(
        'When did women get the right to vote?',
        '1918',
        '1916',
        '1921',
        '1938',
        [1, 0, 0, 0],
        'The Representation of the People Act of February 1918 was an important milestone in the women’s suffrage campaign. The Act granted some women the right to vote in parliamentary elections for the first time, but not on an equal basis to men, who gained universal suffrage. This was partly in recognition of the contribution women made to the war effort during the First World War'
    ),
    //Question 10
    new Quiz(
        'Which two of the following are TRUE regarding Female genital mutilation(FGM)?',
        'It is illegal and a criminal offence in the UK to perform female genital mutilation on a girl or a woman',
        'It is illegal and a criminal offence to take a girl or a woman abroad to have female genital mutilation performed on them',
        'It is illegal but NOT a criminal offence in the UK to perform female genital mutilation on a girl or a woman',
        'It is NOT illegal to take a girl or a woman abroad for having female genital mutilation performed on them',
        [1, 1, 0, 0],
        'Female genital mutilation(FGM), also known as cutting or female circumcision, is illegal in the U.K.. Practising FGM or taking a girl or woman abroad for FGM is a criminal offence'
    ),
    //Question 11
    new Quiz(
        'What is one of the main accomplishments of the Magna Carta',
        'It restricted the power of the nobility',
        'It restricted the King\'s power',
        'It guaranteed the right for wealthy women to vote',
        'It restricted slave trade',
        [0, 1, 0, 0],
        'Magna Carta, which means \'The Great Charter\', is one of the most important documents in history as it established the principle that everyone is subject to the law, even the king, and guarantees the rights of individuals, the right to justice and the right to a fair tria'
    ),
    //Question 12
    new Quiz(
        'Who is the heir to the throne of England?',
        'The Prince of Wales',
        'The Duke of York',
        'Earl of Wessex',
        'Duchess of Cambridge',
        [1, 0, 0, 0],
        'Prince Charles is presently heir (next in line) to the British throne. He will not become king until his mother, Queen Elizabeth, abdicates (gives up the throne), retires or dies'
    ),
    //Question 13
    new Quiz(
        'Which of the following days marks the death of Jesus Christ?',
        'Palm Sunday',
        'Pentecost',
        'Good Friday',
        'Easter day',
        [0, 0, 1, 0],
        'Good Friday is a very important day for many Christians. On Good Friday, Christians remember that Jesus Christ died for everyone. He was crucified by the Romans on a hill outside Jerusalem although he had not done anything wrong.'
    ),
    //Question 14
    new Quiz(
        'What information has to be present on a dogs collar when taken out for a walk',
        'The owner\'s telephone number',
        'The dog\'s name',
        'The owner\'s address',
        'The owner\'s name',
        [0, 0, 1, 1],
        'All dogs in public places must wear a collar showing the name and address of the owner. The owner is responsible for keeping the dog under control and for cleaning up after the animal in a public place'
    ),
    //Question 15
    new Quiz(
        'Great Britain refers only to: ',
        'England and Scotland',
        'England, Wales and Scotland',
        'England and Wales',
        'England, Wales, Scotland and Northern Ireland',
        [0, 1, 0, 0],
        'Great Britain refers only to England, Wales and Scotland'
    ),
    //Question 16
    new Quiz(
        'How many national parks are there in England, Wales and Scotland?',
        '15',
        '18',
        '13',
        '21',
        [1, 0, 0, 0],
        'There are 10 National Parks in England, 3 in Wales and 2 in Scotland, a total of 15'
    ),
    //Question 17
    new Quiz(
        'Northern Ireland and Scotland have their own banknotes, where are they valid?',
        'Everywhere in the UK and all British overseas territories',
        'Only in Northern Ireland and England',
        'Only in Northern Ireland and Scotland',
        'Everywhere in the UK',
        [0, 0, 0, 1],
        'Northern Ireland and Scotland have their own banknotes, which are valid everywhere in the UK'
    ),
    //Question 18
    new Quiz(
        'Which two of he following are part of the National Anthem lyrics?',
        'God save our gracious Queen!',
        'What so proudly we hailed at the twilight\'s last gleaming',
        'Oh, thus be it ever, when freemen shall stand',
        'Send her victorious',
        [1, 0, 0, 1],
        'The first verse of the British National Anthem is: ' +
        'God save our gracious Queen!\n' +
        'Long live our noble Queen!\n' +
        'God save the Queen!\n' +
        'Send her victorious,\n' +
        'Happy and glorious,\n' +
        'Long to reign over us,\n' +
        'God save the Queen'
    ),
    //Question 19
    new Quiz(
        'What happened to ‘Mary, Queen of Scots’ after she spent 20 years in prison?',
        'She became Queen of Great Britain',
        'She was executed',
        'She lived in exile for the rest of her life',
        'She was set free but could not become Queen of Britain',
        [0, 1, 0, 0],
        'Mary was Elizabeth I\'s cousin and hoped that Elizabeth might help her, but Elizabeth suspected Mary of wanting to take over the English throne, and kept her a prisoner for 20 years. Mary was eventually executed, accused of plotting against ELizabeth I'
    ),
    //Question 20
    new Quiz(
        'On what day is St David’s day celebrated?',
        '1st March',
        '5th March',
        '23rd April',
        '17th April',
        [1, 0, 0, 0],
        'Saint David\'s Day is the feast day of Saint David, the patron saint of Wales, and falls on 1 March, the date of Saint David\'s death in 589 AD'
    ),
    //Question 21
    new Quiz(
        'What is the Home Secretary responsible for?',
        'Education',
        'Immigration',
        'Crime',
        'Foreign affairs',
        [0, 1, 1, 0],
        'The Home Secretary is responsible for crime, policing and immigration'
    ),
    //Question 22
    new Quiz(
        'By which methods can complaints be made against the police?',
        'Going to the police station',
        'Writing to your MP',
        'Writing to the Chief Constable',
        'Post on social media about your incident',
        [1, 0, 1, 0],
        'Anyone can make a complaint about the police by going to a police station or by writing to the Chief Constable of the police force involved. Complaints can also be made to an independent body: the Independent Police Complaints Commission in England and Wales, the Police Complaints Commissioner for Scotland or the Police Ombudsman for Northern Ireland'
    ),
    //Question 23
    new Quiz(
        'Which flower is associated with Scotland?',
        'The Shamrock',
        'The Daffodil',
        'The Poppy',
        'The Thistle',
        [0, 0, 0, 1],
        'Scotland\'s national emblem is called the thistle. Originally seen as a symbol of defence in the 15th century, the thistle, this prickly-leaved purple flower, is and will always be known as the symbol of Scotland'
    ),
    //Question 24
    new Quiz(
        'Which country was invaded by Germany in 1939 and resulted in starting the Second World War?',
        'Poland',
        'Denmark',
        'Netherlands',
        'Britain',
        [1, 0, 0, 0],
        'In August of 1939, Nazi Germany and the Soviet Union signed a non-aggression treaty. One week later, Germany invaded Poland and World War II began'
    ),
];

var quiz12 = [
    //Question 1
    new Quiz(
        'Who was Florence Nightingale?',
        'A nurse',
        'An academic',
        'An actress',
        'A doctor',
        [1, 0, 0, 0],
        'Florence Nightingale is famous for her nursing work during the Crimean War (1854 - 56). She changed the face of nursing from a mostly untrained profession to a highly skilled and well-respected medical profession with very important responsibilities'
    ),
    //Question 2
    new Quiz(
        'Which building was constructed in Hyde Park to house the Great Exhibition of 1851?',
        'Eltham Palace',
        'Palladium House',
        'Hoover Building',
        'The Crystal Palace',
        [0, 0, 0, 1],
        'The Crystal Palace was a cast-iron and plate-glass structure originally built in Hyde Park, London, to house the Great Exhibition of 1851'
    ),
    //Question 3
    new Quiz(
        'What is the small claims procedure?',
        'It deals only with appeals from other courts or tribunals',
        'An informal way of helping people to settle minor disputes without spending a lot of time and money using a lawyer',
        'Is the body of law that sets out the rules and standards that courts follow when adjudicating civil lawsuits',
        'An informal way of helping people getting Working Tax Credit and Child Tax Credit',
        [0, 1, 0, 0],
        'The small claims procedure is an informal way of helping people to settle minor disputes without spending a lot of time and money using a lawyer'
    ),
    //Question 4
    new Quiz(
        'Select one of the major changes the Butler Act introduced in 1944',
        'Free primary education in England and Wales',
        'Free university education in England and Wales',
        'Free secondary education in England and Wales',
        'Free secondary education in the U.K.',
        [0, 0, 1, 0],
        'Richard Austen Butler became a Conservative MP in 1923 and held several positions before becoming responsible for education in 1941. In this role, he oversaw the introduction of the Education Act 1944 (often called ‘The Butler Act’), which introduced free secondary education in England and Wales'
    ),
    //Question 5
    new Quiz(
        'The Domesday Book was introduced by which British King',
        'William the Conqueror',
        'Harold Godwinson(Harold II)',
        'Henry VIII',
        'Edward the Confessor',
        [1, 0, 0, 0],
        'Domesday Book is a manuscript record of the "Great Survey" of much of England and parts of Wales completed in 1086 by order of King William the Conqueror'
    ),
    //Question 6
    new Quiz(
        'What is the name of the movement that challenged the authority of the Pope?',
        'The Chartists',
        'The Peasant\'s revolt',
        'Tea Party movement',
        'The Reformation',
        [0, 0, 0, 1],
        'The Reformation was a movement against the authority of the Pope and the ideas and practices of the Roman Catholic Church'
    ),
    //Question 7
    new Quiz(
        'Which of the following are ways to contact your MP',
        'Letter',
        'Social media',
        'Telephone',
        'MPs cannot be contacted for safety reasons',
        [1, 0, 1, 0],
        'You can contact MPs by letter or telephone at their constituency office, or at their office in the House of Commons. In addition, many MPs, Assembly members, MSPs and MEPs hold regular local ‘surgeries’, where constituents can go in person to talk about issues that are of concern to them'
    ),
    //Question 8
    new Quiz(
        'Which invention lead to the rapid development of the industry in Britain during the 18th and 19th centuries?',
        'Plastic',
        'Rubber',
        'Refrigeration',
        'The Steam Power',
        [0, 0, 0, 1],
        'The Industrial Revolution was the transition to new manufacturing processes in the period from about 1760 to sometime between 1820 and 1840. This transition included going from hand production methods to machines, new chemical manufacturing and iron production processes, the increasing use of steam power, the development of machine tools and the rise of the factory system'
    ),
    //Question 9
    new Quiz(
        'Who were the serfs during the Middle Ages?',
        'A group of skilled people from France who came to England',
        'Knights that gained good reputation for being loyal to the Crown',
        'Peasants who had a small area of their lord’s agricultural land',
        'Also known as \'Servants of God\' that reported directly to the Archbishop of Canterbury',
        [0, 0, 1, 0],
        'The lowest social rank in the Middle Ages were the peasants.  The peasant class included Freemen, who had some rights and land, serfs, who had no rights, and slaves, who were bought and sold. Serfs had no political power and were not allowed having control of property.  They lived on the property of a noble vassal, and, in order to repay the vassal for letting the serf live on his property, the serf worked the land and was at the disposal of the vassal'
    ),
    //Question 10
    new Quiz(
        'Who was Admiral Nelson?',
        'An English officer in charge of the English fleet at the Battle of Sluys fighting against the French fleet',
        'An English officer on charge of the English fleet fighting against the Spanish Armada in 1588',
        'A British officer in charge of the British fleet at the Battle of Trafalgar fighting against the Spanish and French fleet',
        'A British officer in charge of the British fleet at the Battle of Jutland fighting against the German Navy during World War I',
        [0, 0, 1, 0],
        'Admiral Nelson (29 September 1758 – 21 October 1805) was a British flag officer in the Royal Navy. He was noted for his inspirational leadership, grasp of strategy, and unconventional tactics, which together resulted in a number of decisive British naval victories, particularly during the Napoleonic Wars. He was shot and killed during his final victory at the Battle of Trafalgar near the port city of Cádiz in 1805'
    ),
    //Question 11
    new Quiz(
        'How did the Government promote policies of free trade during the Victorian Age?',
        'By investing in trade and manufacturing',
        'By the expansion of the money supply',
        'Rising taxes on imported goods and abolishing taxes on goods that were destined for export',
        'Abolishing a number of taxes on imported goods',
        [0, 0, 0, 1],
        'During Victorian times, the government began to promote policies of free trade, abolishing a number of taxes on imported goods. One example of this was the repealing of the Corn Laws in 1846 that prevented the import of cheap grain. The reforms helped the development of the British industry, because raw materials could now be imported cheaply'
    ),
    //Question 12
    new Quiz(
        'What is the minimum age requirement for citizens to stand for public office in the UK, the Irish Republic or the Commonwealth?',
        '21',
        '18',
        '16',
        '19',
        [0, 1, 0, 0],
        'Most citizens of the UK, the Irish republic or the Commonwealth aged 18 or over can stand for public office. There are some exceptions, including: members of the armed forces, civil servants and people found guilty of certain criminal offences.'
    ),
    //Question 13
    new Quiz(
        'Which two of the following are not controlled by the devolved administrations?',
        'Economic development',
        'Defence',
        'Immigration',
        'Housing',
        [0, 1, 1, 0],
        'Policy and laws governing defence, foreign affairs, immigration, taxation and social security all remain under central UK government control. However, many other public services, such as education and training, health and social services, economic development and housing, are controlled by the devolved administrations.'
    ),
    //Question 14
    new Quiz(
        'How can an eligible voter register on the Electoral Register in Northern Ireland?',
        'By contacting the local council',
        'By completing the \'individual registration\' form',
        'By sending a letter to the local MP',
        'By putting their name on the electoral register',
        [0, 1, 0, 0],
        'Northern Ireland uses a system called ‘individual registration’ and all those entitled to vote must complete their own registration form'
    ),
    //Question 15
    new Quiz(
        'The war in South Africa between the year 1899 and 1902 is called:',
        'The Crimean War',
        'Falklands War',
        'The Boer War',
        'Anglo-Zulu War',
        [0, 0, 1, 0],
        'The Boer War was fought between the British Empire and two Boer states, the South African Republic and the Orange Free State, over the Empire\'s influence in South Africa'
    ),
    //Question 16
    new Quiz(
        'What is the capital city of Northern Ireland?',
        'Belfast',
        'Edinburgh',
        'Derry',
        'Bangor',
        [1, 0, 0, 0],
        'The capital of Northern Ireland is Belfast. The largest city in Northern Ireland Belfast has a population of 270000 with 600000 in the inner city'
    ),
    //Question 17
    new Quiz(
        'What is Hogmanay?',
        'New Year\'s Eve in Scotland',
        'New Year\'s Eve in Wales',
        'Celebration of the Birth of Jesus Christ',
        'The celebration of the winter solstice',
        [1, 0, 0, 0],
        'Hogmanay is the Scots word for the last day of the year and is synonymous with the celebration of the New Year in the Scottish manner'
    ),
    //Question 18
    new Quiz(
        'What happened in 1928 that was important for women and their voting rights?',
        'Women were given the right to vote at the age of 21, the same as men',
        'Women were given the right to vote at the age of 18, the same as men',
        'Women were given the right to vote at the age of 21 and men could vote at the age of 18',
        'Women from the upper social class were given the right to vote at the age of 30',
        [1, 0, 0, 0],
        'The 1928 \'Representation of the People\' Act widened suffrage by giving women electoral equality with men. It gave the vote to all women over 21 years old, regardless of property ownership'
    ),
    //Question 19
    new Quiz(
        'Who was born in Stratford-upon-Avon?',
        'J.B. Priestley',
        'George Bernard Shaw',
        'William Shakespeare',
        'Oscar Wilde',
        [0, 0, 1, 0],
        'William Shakespeare was born in Stratford-upon-Avon, England, in April 1564'
    ),
    //Question 20
    new Quiz(
        'Which two responsibilities will you have as a British citizen?',
        'To look after yourself and your family',
        'To serve as a volunteer for at least 1 year',
        'Make sure you do not move abroad',
        'To respect the rights of others, including their right to their own opinions',
        [1, 0, 0, 1],
        'If you wish to be a permanent resident or citizen of the UK, you should: respect and obey the law, look after yourself and your family, respect the rights of others, including their right to their own opinions, treat others with fairness and look after the area in which you live and the environment'
    ),
    //Question 21
    new Quiz(
        'Where is the Lake District National Park located?',
        'England',
        'Scotland',
        'Cornwall',
        'West Yorkshire',
        [1, 0, 0, 0],
        'The Lake District, also known as the Lakes or Lakeland, is a mountainous region in North West England'
    ),
    //Question 22
    new Quiz(
        'Which is the highest value note in circulation in the U.K.?',
        '£20',
        '£50',
        '£100',
        '£500',
        [0, 1, 0, 0],
        'The currency in the UK is the pound sterling(£). There are 100 pence in a pound. The denominations(values) of currency are: COINS 1p, 2p, 5p, 10p, 20p, 50p, £1, £2; NOTES £5, £10, £20, £50'
    ),
    //Question 23
    new Quiz(
        'Which was the last battle between Britain and France?',
        'The battle of Trafalgar',
        'The battle of Hastings',
        'The battle of Waterloo',
        'The 100 Years war',
        [0, 0, 1, 0],
        'The Battle of Waterloo was fought on Sunday, 18 June 1815, near Waterloo in present-day Belgium, then part of the United Kingdom of the Netherlands. A French army under the command of Emperor Napoleon Bonaparte was defeated by two of the armies of the Seventh Coalition: a British-led Allied army under the command of the Duke of Wellington, and a Prussian army under the command of Gebhard Leberecht von Blücher, Prince of Wahlstatt. The battle marked the end of the Napoleonic Wars and the last battle between Britain and France'
    ),
    //Question 24
    new Quiz(
        'Which flower is associated with Northern Ireland?',
        'The rose',
        'The thistle',
        'The daffodil',
        'The shamrock',
        [0, 0, 0, 1],
        'A shamrock is a young sprig, used as a symbol of Ireland and Northern Ireland. Saint Patrick, Ireland\'s and Northern Ireland\'s patron saint, is said to have used it as a metaphor for the Christian Holy Trinity'
    )
];

var quiz13 = [
    //Question 1
    new Quiz(
        'Which of the following statements is true:',
        'Women in Britain today make up about one third of the workforce.',
        'Women in Britain today make up about half of the workforce.',
        'Women in Britain today make up about a quarter of the workforce.',
        'Women in Britain today make up the majority of the workforce.',
        [0, 1, 0, 0],
        'Women in Britain today make up about half of the workforce. On average, girls leave school with better qualifications than boys. More women than men study at university'
    ),
    //Question 2
    new Quiz(
        'Who was voted the greatest Briton of all time in 2002?',
        'Winston Churchill',
        'Isambard Kingdom Brunel',
        'Diana, Princess of Wales',
        'Charles Darwin',
        [1, 0, 0, 0],
        'A poll conducted by BBC in 2002 resulted in Winston Churchill being voted as the Greatest Briton'
    ),
    //Question 3
    new Quiz(
        'What is the Union Jack?',
        'The Flag of England',
        'The symbol of the working class',
        'The crusaders flag',
        'The Flag of the United Kingdom',
        [0, 0, 0, 1],
        'In 1801, Ireland became unified with England, Scotland and Wales after the Act of Union of 1800. This created the United Kingdom of Great Britain and Ireland. One symbol of this union between England, Scotland, Wales and Ireland was a new version of the official flag, the Union Flag. This is often called The Union Jack'
    ),
    //Question 4
    new Quiz(
        'What did Charles I try to do based on his belief of the \'Divine Right of Kings\'',
        'He gave more powers to the Parliament',
        'To rule without the Parliament',
        'He raised an army',
        'He tried to weaken the Church of England',
        [0, 1, 0, 0],
        'Charles I believed in the ‘Divine Right of Kings’: the idea that the king was directly appointed by God to rule. He thought that the king should be able to act without having to seek approval from Parliament and he tried to rule without the Parliament at all'
    ),
    //Question 5
    new Quiz(
        'Which of the following major sports event took place in the UK in 2012?',
        'UEFA World cup',
        'Rugby league',
        '2012 Davis Cup World Group',
        'The Olympic games',
        [0, 0, 0, 1],
        'The U.K. has hosted the Olympic Games on three occasions: 1908, 1948 and 2012. The main Olympic site for the 2012 Games was in Stratford, East London'
    ),
    //Question 6
    new Quiz(
        'If you wish to be a permanent resident or citizen of the UK, you should:',
        'Respect the rights of others, including their right to their own opinions',
        'Look after yourself and your family',
        'Be a good neighbour',
        'Vote in all elections',
        [1, 1, 0, 0],
        'If you wish to be a permanent resident or citizen of the UK, you should: respect the rights of others, including their right to their own opinions, look after yourself and your family, respect and obey the law, treat others with fairness and look after the area in which you live and the environment'
    ),
    //Question 7
    new Quiz(
        'What is the minimum age required to serve on a jury?',
        '16',
        '18',
        '21',
        '25',
        [0, 1, 0, 0],
        'Anyone who is on the electoral register and is aged 18 to 70 can be asked to serve on a jury'
    ),
    //Question 8
    new Quiz(
        'What is known as the “Dunkirk spirit”?',
        'The evacuation of Allied soldiers from France during World War II',
        'The feeling of optimism during the industrial revolution',
        'The social progress made during the 20th century',
        'The financial prosperity during the Roaring Twenties',
        [1, 0, 0, 0],
        'During WWII as France fell, the British decided to evacuate British and French soldiers from France in a huge naval operation. Many civilian volunteers in small pleasure and fishing boats from Britain helped the Navy to rescue more than 300,000 men from the beaches around Dunkirk'
    ),
    //Question 9
    new Quiz(
        'How are civil servants appointed and what political party do they belong to?',
        'They are appointed by the party that holds the majority of votes and are chosen based on political loyalty',
        'They are chosen on merit and are serving in the interests of the leading political party',
        'They are chosen on merit and are politically neutral',
        'They are politically neutral and are chosen by random from a candidate pool',
        [0, 0, 1, 0],
        'Civil servants support the government in developing and implementing its policies. They also deliver public services. Civil servants are accountable to ministers. They are chosen on merit and are politically neutral - they are not political appointees. Their core values are integrity, honesty, objectivity and impartiality(including being politically neutral)'
    ),
    //Question 10
    new Quiz(
        'Who is the inventor of the World Wide Web?',
        'Sir Tim Berners-Lee',
        'Alan Turing',
        'Ada Lovelace',
        'Tony Hoare',
        [1, 0, 0, 0],
        'Sir Timothy John Berners-Lee (born 8 June 1955), is an English engineer and computer scientist, best known as the inventor of the World Wide Web'
    ),
    //Question 11
    new Quiz(
        'Which Scottish king defeated the English at the Battle of Bannockburn?',
        'Duncan I of Scotland',
        'Robert the Bruce',
        'James VI and I',
        'James IV of Scotland',
        [0, 1, 0, 0],
        'In 1314 the Scottish, led by Robert the Bruce, defeated the English at the Battle of Bannockburn, and Scotland remained unconquered by the English'
    ),
    //Question 12
    new Quiz(
        'What is the day when jokes are published in newspapers and telecast on TV?',
        'Valentine\'s day',
        'April Fool’s Day',
        'Spring Bank Holiday',
        'Bonfire night',
        [0, 1, 0, 0],
        'April Fool’s Day, 1 April, is a day when people play jokes on each other until midday. The television and newspapers often have stories that are April Fool jokes'
    ),
    //Question 13
    new Quiz(
        'Which of the following are ways to contact your MP',
        'Whatsapp',
        'Social media',
        'Telephone',
        'Letter',
        [0, 0, 1, 1],
        'You can contact MPs by letter or telephone at their constituency office, or at their office in the House of Commons. In addition, many MPs, Assembly members, MSPs and MEPs hold regular local ‘surgeries’, where constituents can go in person to talk about issues that are of concern to them'
    ),
    //Question 14
    new Quiz(
        'What is the most famous tennis tournament played in the UK?',
        'Wembley Championships',
        'Aegon Trophy‎ ',
        'Wimbledon',
        'Queen\'s Club Championships',
        [0, 0, 1, 0],
        'The Championships, Wimbledon, commonly known simply as Wimbledon, is the oldest tennis tournament in the world and most famous in the U.K.. It is held at the All England Lawn Tennis and Croquet Club, London, since 1877 and is played on outdoor grass courts'
    ),
    //Question 15
    new Quiz(
        'Where did the Huguenots come from originally and moved to England between 1680 and 1720?',
        'Romania',
        'India',
        'Netherlands',
        'France',
        [0, 0, 0, 1],
        'Stigmatized by oppressive laws and facing severe persecution, many Huguenots (Protestants) fled France. In 1681, Charles II of England offered sanctuary to the Huguenots, and from 1670 to 1720, between 40,000 and 50,000 Huguenots from all walks of life sought refuge in England'
    ),
    //Question 16
    new Quiz(
        'What is the period of the 1960s in Britain best known for?',
        'A growth in British fashion and pop music',
        'Huge scientific progress',
        'Progressive social policies',
        'British Somaliland protectorate briefly gained independence',
        [1, 0, 0, 0],
        'Britain in the 1960s. 1960s. The 1960s decade refers to the years from the beginning of 1960 to the end of 1969. It is known as the Swinging Sixties and is associated with the birth of British pop music and fashion'
    ),
    //Question 17
    new Quiz(
        'The King James I Bible version is known as the:',
        'Authorised version',
        'Berkeley Version',
        'Christian Standard Bible',
        'Common English Bible',
        [1, 0, 0, 0],
        'The King James Version, also known as the King James Bible or simply the Authorized Version, is an English translation of the Christian Bible for the Church of England, begun in 1604 and completed in 1611'
    ),
    //Question 18
    new Quiz(
        'Where is the Tate Art Gallery located?',
        'London',
        'Manchester',
        'Bristol',
        'Cardiff',
        [1, 0, 0, 0],
        'The Tate Britain and Tate Modern are in London'
    ),
    //Question 19
    new Quiz(
        'Towns, cities and rural areas in the UK are governed by:',
        'Democratically elected councils',
        'Government appointed councils',
        'Central government',
        'Royal deputies',
        [1, 0, 0, 0],
        'Towns, cities and rural areas in the UK are governed by democratically elected councils, often called ‘local authorities’'
    ),
    //Question 20
    new Quiz(
        'What was inscribed in the first coins to be minted in Britain during the Iron Age?',
        'Images resembling sacred plants',
        'The names of Iron Age kings',
        'Images of sacred animals',
        'Images of astronomical objects',
        [0, 1, 0, 0],
        'The people of the Iron Age made the first coins to be minted in Britain, some inscribed with the names of Iron Age kings'
    ),
    //Question 21
    new Quiz(
        'Who was in charge of the British Fleet at the Battle of Trafalgar?',
        'Admiral Nelson',
        'George Rodney',
        'Robert Blake',
        'John Jervis',
        [1, 0, 0, 0],
        'On 21 October 1805, the Franco-Spanish fleet came out of port, and Nelson\'s fleet engaged them at the Battle of Trafalgar. The battle was Britain\'s greatest naval victory, but during the action, Nelson, aboard HMS Victory, was fatally wounded by a French sharpshooter'
    ),
    //Question 22
    new Quiz(
        'How many members does the Northern Ireland Assembly have?',
        '108',
        '60',
        '90',
        '99',
        [1, 0, 0, 0],
        'The Northern Ireland Assembly has 108 elected members, known as MLAs (members of the Legislative Assembly)'
    ),
    //Question 23
    new Quiz(
        'Who controls the BBC',
        'Rupert Murdoch',
        'By the government',
        'It is an independent media organisation',
        'Larry Page and Mark Zuckerberg',
        [0, 0, 1, 0],
        'The BBC is a statutory corporation, independent from direct government intervention, with its activities being overseen from April 2017 by the BBC Board and regulated by Ofcom. It is the largest broadcaster in the world and is the only wholly state-funded media organisation that is independent of government'
    ),
    //Question 24
    new Quiz(
        'Which of the following is a Crown Dependency but not part of the UK?',
        'Isle of Sheppey',
        'Isle of Skye',
        'Isle of Wight',
        'Isle of Man',
        [0, 0, 0, 1],
        'The Channel Islands and the Isle of Man are closely linked with the UK but are not part of it. They have their own governments and are called ‘Crown dependencies’'
    )
];

var quiz14 = [
    //Question 1
    new Quiz(
        'Which of the following is TRUE regarding St Helena:',
        'is an independent state',
        'is part of the EU',
        'is part of the UK',
        'is a British overseas territory',
        [0, 0, 0, 1],
        'St Helena and the Falkland Islands are British overseas territories, they are linked to the UK but are not part of it'
    ),
    //Question 2
    new Quiz(
        'What is the minimum age requirement to buy alcohol in the U.K.?',
        '25',
        '21',
        '16',
        '18',
        [0, 0, 0, 1],
        'It is a criminal offence to sell alcohol to anyone who is under 18 or to buy alcohol for people who are under the age of 18. (There is one exception: people aged 16 or over can drink alcohol with a meal in a hotel or restaurant)'
    ),
    //Question 3
    new Quiz(
        'The Crimean War was fought between Britain and:',
        'Turkey',
        'Russia',
        'Poland',
        'Georgia',
        [0, 1, 0, 0],
        'The Crimean War was a military conflict fought from October 1853 to February 1856 in which the Russian Empire lost to an alliance of the Ottoman Empire, France, Britain and Sardinia'
    ),
    //Question 4
    new Quiz(
        'Who was Emmeline Pankhurst?',
        'A nurse',
        'A suffragette',
        'Mathematician and writer',
        'A teacher',
        [0, 1, 0, 0],
        'Emmeline Pankhurst was born in Manchester in 1858. She set up the women’s Franchise League in 1889, which fought to get the vote in local elections for married women. In 1903 she helped found the Women’s Social and Political Union (WSPU). This was the first group whose members were called ‘suffragettes’'
    ),
    //Question 5
    new Quiz(
        'In Britain, during which period were the first coins minted?',
        'The Stone Age',
        'The Iron Age',
        'The Bronze Age',
        'The Golden Age',
        [0, 1, 0, 0],
        'The Iron Age people had a sophisticated culture and economy. They made the first coins to be minted in Britain, some inscribed with the names of Iron Age kings. This marked the beginnings of British history'
    ),
    //Question 6
    new Quiz(
        'Select one of the following statements that is true',
        'The National Anthem can be played if the Queen is not present',
        'The National Anthem can only be played if the the Queen is present',
        'The National Anthem can be played if at least one member of the Royal family is present ',
        'The National Anthem is only played in the presence of the Queen or the Prime Minister',
        [1, 0, 0, 0],
        'The National Anthem is played at important national occasions and at events attended by the Queen or the Royal Family'
    ),
    //Question 7
    new Quiz(
        'When is St Andrew’s day celebrated?',
        '17th April',
        '30th November',
        '1st March',
        '1st November',
        [0, 1, 0, 0],
        'Saint Andrew’s Day is celebrated every 30 November in Scotland. The day celebrates the Feast of Saint Andrew and is also considered Scotland’s National Day'
    ),
    //Question 8
    new Quiz(
        'What flower did William Wordsworth write about?',
        'Shamrock',
        'Thistle',
        'Rose',
        'Daffodil',
        [0, 0, 0, 1],
        'Inspired by nature, William Wordsworth wrote ‘The Daffodils’'
    ),
    //Question 9
    new Quiz(
        'Which two of the following are actions you could take to make a complaint against the police?',
        'Go to the Police station directly',
        'Write to the Chief Constable of the police force involved',
        'Contact your MP',
        'Post on Social Media',
        [1, 1, 0, 0],
        'Anyone can make a complaint about the police by going to a police station and writing to the Chief Constable of the police force involved. Complaints can also be made to an independent body: the Independent Police Complaints Commission in England and Wales, the Police Complaints Commissioner for Scotland or the Police Ombudsman for Northern Ireland'
    ),
    //Question 10
    new Quiz(
        'The Northern Ireland Assembly does not have power of decision on which two issues?',
        'Immigration',
        'Defence',
        'Environment',
        'Social Services',
        [1, 1, 0, 0],
        'The Northern Ireland Assembly can make decisions on issues such as: education, agriculture, the environment health and social services, but it cannot make decisions on immigration or defence issues'
    ),
    //Question 11
    new Quiz(
        'When was the Domesday Book written?',
        'After the Viking invasion',
        'During the reign of Henry VIII',
        'After the Norman conquest',
        'After the 100 years war',
        [0, 0, 1, 0],
        'William the conqueror sent people all over England to draw up lists of all the towns and villages. The people who lived there, who owned the land and what animals they owned were also listed. This was called the Domesday Book, which gives a picture of society in England just after the Norman Conquest'
    ),
    //Question 12
    new Quiz(
        'Who is responsible for the opening of the new parliamentary session each year?',
        'The Speaker',
        'The Queen',
        'The Prime Minister',
        'The Archbishop of Canterbury',
        [0, 1, 0, 0],
        'The Queen has important ceremonial roles, such as the opening of the new parliamentary session each year'
    ),
    //Question 13
    new Quiz(
        'Has the Northern Ireland Assembly ever been suspended by the U.K. government?',
        'Never',
        'It happened once',
        'The U.K. government does not have the power to suspend the Northern Ireland Assembly',
        'It happened on a few occasions',
        [0, 0, 0, 1],
        'The Northern Ireland Assembly has been suspended on a few occasions'
    ),
    //Question 14
    new Quiz(
        'What war memorial is located in Whitehall?',
        'Cenotaph',
        'Brill War Memorial',
        'Benfleet War Memorial',
        'Memorial Gardens',
        [1, 0, 0, 0],
        'The Cenotaph is a war memorial on Whitehall in London, England'
    ),
    //Question 15
    new Quiz(
        'Where did the Spanish Armada come from?',
        'France',
        'North Africa',
        'Italy',
        'Spain',
        [0, 0, 0, 1],
        'In 1588 the English defeated the Spanish Armada (a large fleet of ships), which had been sent by Spain to conquer England and restore Catholicism'
    ),
    //Question 16
    new Quiz(
        'By law, which TWO types of media have to give a balanced coverage of all political parties and equal time to rival viewpoints before an election?',
        'Television',
        'Post',
        'Newspapers',
        'Radio',
        [1, 0, 0, 1],
        'By law, radio and television coverage of the political parties must be balanced and so equal time has to be given to rival viewpoints'
    ),
    //Question 17
    new Quiz(
        'The combination of which two languages make up the English language?',
        'Anglo-Saxon',
        'Celtic',
        'Latin',
        'Norman French',
        [1, 0, 0, 1],
        'After the Norman Conquest, the king and his noblemen had spoken Norman French and the peasants had continued to speak Anglo-Saxon. Gradually these two languages combined to become one English language'
    ),
    //Question 18
    new Quiz(
        'Margaret Thatcher became famous for:',
        'Being a suffragette',
        'Becoming the first female member of the Royal Statistical Society',
        'Being the first woman Prime Minister of the U.K.',
        'For her contributions to the Analytical Engine, created by Charles Babbage',
        [0, 0, 1, 0],
        'Margaret Thatcher (also known as \'The Iron Lady\'), was a British stateswoman who served as Prime Minister of the United Kingdom from 1979 to 1990 and Leader of the Conservative Party from 1975 to 1990. She was the first woman Prime Minister of the U.K.'
    ),
    //Question 19
    new Quiz(
        'What is the name of the aerial battle between Britain and Germany during the Second World War?',
        'Battle of the Netherlands',
        'The Battle of Britain',
        'Battle of Belgium',
        'Battle of Dunkirk',
        [0, 1, 0, 0],
        'The Battle of Britain was a military campaign of the Second World War, in which the Royal Air Force (RAF) defended the United Kingdom against large-scale attacks by Nazi Germany\'s air force, the Luftwaffe. It has been described as the first major military campaign fought entirely by air forces'
    ),
    //Question 20
    new Quiz(
        'Which of the following charities helps the environment?',
        'Friends of the Earth',
        'The Royal British Legion',
        'Oxfam',
        'British Red Cross',
        [1, 0, 0, 0],
        'Friends of the Earth is an environmental campaigning community dedicated to the wellbeing and protection of the natural world and everyone in it'
    ),
    //Question 21
    new Quiz(
        'What is the Enlightenment?',
        'A period when education became national priority',
        'A period when new ideas about politics, philosophy and science were developed',
        'A period when schools and universities become free for everyone',
        'The activity, spirit, or time of the great revival of art, literature, and learning',
        [0, 1, 0, 0],
        'During the 18th century, new ideas about politics, philosophy and science were developed. This is often called \'The Enlightenment\'. Many of the great thinkers of the Enlightenment were Scottish. One of the most important principles of the Enlightenment was that everyone should have the right to their own political and religious beliefs and that the state should not try to dictate to them',
    ),
    //Question 22
    new Quiz(
        'Diwali is also known as:',
        'The Festival of Lights',
        'The Festival of Colors',
        'The Festival of Love',
        'The Festival of the Dead',
        [1, 0, 0, 0],
        'Diwali, the Hindu festival of lights, is the most popular of all the festivals'
    ),
    //Question 23
    new Quiz(
        'What is the U.K. currency called?',
        'Shillings',
        'Euro',
        'Dollar',
        'Pound Sterling',
        [0, 0, 0, 1],
        'The pound sterling (symbol: £), commonly known as the pound and less commonly referred to as Sterling, is the official currency of the United Kingdom, Jersey, Guernsey, the Isle of Man, South Georgia and the South Sandwich Islands, the British Antarctic Territory, and Tristan da Cunha. It is subdivided into 100 pence'
    ),
    //Question 24
    new Quiz(
        'Where in London is Theatreland located?',
        'Croydon',
        'London’s west end',
        'Stratford',
        'South Bank & Waterloo',
        [0, 1, 0, 0],
        'There are theatres in most towns and cities throughout the U.K., ranging from the large to the small. They are an important part of local communities and often show both professional and amateur productions. London\'s West End, also known as \'Theatreland\', is particularly well known'
    )
];

var quiz15 = [
    //Question 1
    new Quiz(
        'The British constitution is:',
        'A codified constitution',
        'Unwritten',
        'Is written down in a single document',
        'Unitary Constitution',
        [0, 1, 0, 0],
        'The constitution of the United Kingdom or British constitution is a sum of laws and principles that make up the country\'s body politic. By not being written down in any single document, it is sometimes referred to as an ‘unwritten’ or uncodified constitution'
    ),
    //Question 2
    new Quiz(
        'Which two universities participate in an annual rowing race that takes place on the River Thames?',
        'London School of Economics and Political Science',
        'Imperial College London',
        'The University of Cambridge',
        'The University of Oxford',
        [0, 0, 1, 1],
        'Rowing is also popular, both as a leisure activity and as a competitive sport. There is a popular yearly race on the Thames between Oxford and Cambridge Universities'
    ),
    //Question 3
    new Quiz(
        'Who ordered the building of a wall in North of England to separate from the Picts (Scottish ancestors)',
        'Emperor Hadrian',
        'Julius Caesar',
        'The Roman Emperor Claudius',
        'The admiral of the Roman Channel fleet, Carausius',
        [1, 0, 0, 0],
        'Hadrian’s Wall was the north-west frontier of the Roman empire for nearly 300 years. It was built by the Roman army on the orders of the emperor Hadrian following his visit to Britain in AD 122. At 73 miles (80 Roman miles) long, it crossed northern Britain from Wallsend on the River Tyne in the east to Bowness-on-Solway in the west. The most famous of all the frontiers of the Roman empire, Hadrian’s Wall was made a World Heritage Site in 1987'
    ),
    //Question 4
    new Quiz(
        'In what year did World War I end?',
        '1916',
        '1918',
        '1922',
        '1945',
        [0, 1, 0, 0],
        'World War I, also known as the First World War or the Great War, was a global war originating in Europe that lasted from 28 July 1914 to 11 November 1918'
    ),
    //Question 5
    new Quiz(
        'Isaac Newton was best known for:',
        'The discovery of gravity',
        'The discovery of oxygen',
        'The discovery of Australopithecus',
        'The discovery of penicillin',
        [1, 0, 0, 0],
        'Newton’s most famous published work was Philosophiae Naturalis Principia Mathematica (‘Mathematical Principle of Natural Philosophy’), which showed how gravity applied to the whole universe. He also discovered that white light is made up of the colours of the rainbow. Many of his discoveries are still important for modern science'
    ),
    //Question 6
    new Quiz(
        'What is \'the Proms\'?',
        'An six-week summer season of daily orchestral classical music concerts',
        'A two-week long summer festival for teenage kids',
        'A series of contemporary music concerts held in various places across Britain each year',
        'An eight-week summer season of daily orchestral classical music concerts',
        [0, 0, 0, 1],
        'The Proms is an eight-week summer season of orchestral classical music that takes place in various venues, including the Royal Albert Hall in London. It has been organised by the BBC since 1927'
    ),
    //Question 7
    new Quiz(
        'Emmeline Pankhurst fought for:',
        'The right for women to vote',
        'For equal job opportunities for both men and women',
        'Preventing forced marriage',
        'Social justice and people who are under-represented',
        [1, 0, 0, 0],
        'Emmeline Pankhurst was a British political activist and leader of the British suffragette movement who helped women win the right to vote. She created the Women\'s Franchise League together with her husband Richard and others in 1889, fourteen years before the creation of the Women\'s Social and Political Union in 1903. This was the first group whose members were called ‘suffragettes’. The group used civil disobedience as part of their protest to gain the vote for women. In 1918, women over the age of 30 were given voting rights and the right to stand for Parliament, partly in recognition of the contribution women made to the war effort during the First World War'
    ),
    //Question 8
    new Quiz(
        'The Habeas Corpus Act introduced the:',
        'Right for every prisoner to have a court hearing',
        'Right to a minimum wage',
        'Freedom of speech',
        'Freedom of the press',
        [1, 0, 0, 0],
        'The Habeas Corpus Act became law in 1679. This was a very important piece of legislation which remains relevant today. Habeas corpus is Latin for ‘you must present the person in court’. The Act guaranteed that no one could be held prisoner unlawfully. Every prisoner has a right to a court hearing'
    ),
    //Question 9
    new Quiz(
        'During the reign of Elizabeth I, a large fleet of ships was sent to England to conquer the country and to restore Catholicism, where did this fleet come from?',
        'Denmark',
        'Germany',
        'France',
        'Spain',
        [0, 0, 0, 1],
        'Elizabeth I became one of the most popular monarchs in English history, particularly after 1588, when the English defeated the Spanish Armada (a large fleet of ships), which had been sent by Spain to conquer England and restore Catholicism'
    ),
    //Question 10
    new Quiz(
        'In what year did the U.K. join the EU?',
        '1975',
        '1978',
        '1972',
        '1973',
        [0, 0, 0, 1],
        'The European Union (EU), originally called the European Economic Community(EEC), was set up by six western European countries who signed the Treaty of Rome in 25 March 1957. The UK originally decided not to join this group but it became a member in 1973.'
    ),
    //Question 11
    new Quiz(
        'The Scottish Grand National takes place in:',
        'Ayr',
        'Aberdeen',
        'Dundee',
        'Inverness',
        [1, 0, 0, 0],
        'The Scottish Grand National is a Grade 3 National Hunt steeplechase in Great Britain which is open to horses aged five years or older. It is run at Ayr, Scotland, over a distance of about 4 miles and during its running there are 27 fences to be jumped. It takes place each year in April and st is Scotland\'s equivalent of the Grand National'
    ),
    //Question 12
    new Quiz(
        'Which of the following is not a British banknote',
        '£5',
        '£10',
        '£25',
        '£20',
        [0, 0, 1, 0],
        'There are no £25 notes in the UK. The denominations(values) of currency are: COINS 1p, 2p, 5p, 10p, 20p, 50p, £1, £2; NOTES £5, £10, £20, £50'
    ),
    //Question 13
    new Quiz(
        'Edward Elgar was famous for:',
        'Being a musician',
        'Being a painter',
        'Being an actor',
        'Being a poet',
        [1, 0, 0, 0],
        'Sir Edward Elgar (1857-1934) was a musician. His best known work is probably the Pomp and Circumstance Marches. March No1 (Land of Hope and Glory) is usually played at the Last Night of the Proms at the Royal Albert Hall'
    ),
    //Question 14
    new Quiz(
        'The names or photographs of young people found guilty of a crime can be published: ',
        'By the media',
        'By the newspapers',
        'On the official government website',
        'None of the above',
        [0, 0, 0, 1],
        'The parents or carers of the young person are expected to attend the hearing. Members of the public are not allowed in Youth Courts, and the name or photographs of the accused young person cannot be published in newspapers or used by the media'
    ),
    //Question 15
    new Quiz(
        'How many members does the Welsh Assembly have?',
        '60',
        '90',
        '120',
        '110',
        [1, 0, 0, 0],
        'The National Assembly has 60 Assembly members (AMs) and elections are held every four years using a form of proportional representation'
    ),
    //Question 16
    new Quiz(
        '“the Fringe” festival take place in: ',
        'Glasgow',
        'Edinburgh',
        'Leeds',
        'Aberdeen',
        [0, 1, 0, 0],
        'The Edinburgh Festival takes place in Edinburgh, Scotland, every summer. It is a series of different arts and cultural festivals, with the biggest and most well-known being the Edinburgh Festival Fringe (‘the Fringe’)'
    ),
    //Question 17
    new Quiz(
        'What document is needed in order to be able to drive in the UK?',
        'A British passport',
        'Any passport',
        'A valid driving licence',
        'An ID card',
        [0, 0, 1, 0],
        'In the UK, you must have a driving licence to drive on public roads'
    ),
    //Question 18
    new Quiz(
        'Why were women given the right to vote?',
        'In recognition of the contribution women made to the war effort during the Second World War',
        'In recognition of the contribution women made to the war effort during the First World War',
        'In recognition of the contribution women made to the war effort during the Crimean War',
        'Because of social pressure mainly coming from men',
        [0, 1, 0, 0],
        'In 1918, women over the age of 30 were given voting rights and the right to stand for Parliament, partly in recognition of the contribution women made to the war effort during the First World War'
    ),
    //Question 19
    new Quiz(
        'What is the name of the holiday when banks and many other businesses are closed for the day?',
        'Workers Holiday',
        'Religious Holiday',
        'National Holiday',
        'Bank Holiday',
        [0, 0, 0, 1],
        'There are public holidays each year called bank holidays, when banks and many other businesses are closed for the day. These are of no religious significance. They are at the beginning of May, in late May or early June, and in August'
    ),
    //Question 20
    new Quiz(
        'When is Boxing Day celebrated?',
        '30th December',
        '27th December',
        '25th December',
        '26th December',
        [0, 0, 0, 1],
        'Boxing Day is the day after Christmas, Day 26th December, and is a public holiday'
    ),
    //Question 21
    new Quiz(
        'Which of the following is the work of Geoffrey Chaucer',
        'The Canterbury Tales',
        'Romeo and Juliet',
        'The Prelude',
        'Great Expectations',
        [1, 0, 0, 0],
        'Geoffrey Chaucer is considered by many to be the Father of English Literature and the greatest poet of the Middle Ages. Born around 1343, he’s most famous for The Canterbury Tales, a series of stories (mostly in verse) based around a group of pilgrims travelling to Canterbury. The pilgrims have a story-telling competition, resulting in each of the tales being called by the character telling them. Chaucer was instrumental in developing the use of the vernacular Middle English, during a period when most works of literature were being written in Latin or French'
    ),
    //Question 22
    new Quiz(
        'Select the statements that are true:',
        'Northern Ireland has its own established church',
        'Northern Ireland has no established church',
        'Wales has its own established church',
        'Wales has no established church',
        [0, 1, 0, 1],
        'There is no established Church in Wales or Northern Ireland.'
    ),
    //Question 23
    new Quiz(
        'Where is Loch Lomond and the Trossachs National Park located?',
        'England',
        'Wales',
        'Northern Ireland',
        'Scotland',
        [0, 0, 0, 1],
        'Loch Lomond and The Trossachs National Park is a national park in Scotland centred on Loch Lomond, and includes several ranges of hills and the Trossachs'
    ),
    //Question 24
    new Quiz(
        'The Patron Saint of England is:',
        'St George',
        'St Andrew',
        'St David',
        'St Patrick',
        [1, 0, 0, 0],
        'St George\'s Day in England remembers St George, England\'s patron saint. The anniversary of his death, which is on April 23, is seen as England\'s national day. According to legend, he was a soldier in the Roman army who killed a dragon and saved a princess'
    )
];

/***************************
 //Use this template to create new quizzes
var templateQuiz = [
    //Question 1
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 2
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 3
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 4
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 5
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 6
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 7
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 8
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 9
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 10
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 11
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 12
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 13
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 14
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 15
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 16
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 17
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 18
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 19
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 20
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 21
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 22
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 23
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    ),
    //Question 24
    new Quiz(
        '',
        '',
        '',
        '',
        '',
        [0, 0, 0, 0],
        ''
    )
];
***************************/


//quiz controller
var model = (function(){

    return {
        //storing the count of the quizzes
        counter: 0,

        //store score points
        score: 0,

        //set timer value
        timerCount: 0,
        timeRemaining: 2700,

        //storing the quiz array
        quizArray: [],

        //storing the validation pattern
        quizValidationArray: [],

        //storing all quiz instances
        quizCollection: [quiz1, quiz2, quiz3 ,quiz4 ,quiz5 ,quiz6 ,quiz7 ,quiz8 ,quiz9 ,quiz10 ,quiz11 ,quiz12 ,quiz13 ,quiz14 ,quiz15 ],

        //refresh page
        refresh: function() {
            location.reload();
        },

        //check if element has class function
        hasClass: function(element, className) {
        return element.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(element.className);
        },
        /*
       example:
       var elem = document.getElementById('elementID');
       hasClass(elem, 'active'); OUTPUT: true or false
       */

        //shortcut function for getting elements by id
        getID: function(id) {
            return document.getElementById(id);
        },

        //loop through the quiz array and push into a global array
        getArray: function(array) {
            for (var i = 0; i < array.length; i++) {
                this.quizArray.push(array[i]);
            }
        },

        scorePercentage: function() {
            var totalQuestions = this.quizArray.length;
            var totalScore = this.score;
            var percentageScore = Math.round((totalScore / totalQuestions) * 100);
            return percentageScore;
        },

        countDownTimer: function() {
            var renderElem = this.getID('count-down');
            renderElem.innerHTML = convert(model.timeRemaining - model.timerCount);

            //formats any single digit to double digits
            function format(n) {
                return (n < 10 ? '0' : '') + n;
            }

            //converts 60 seconds to 1 minute
            function convert(sec) {
                var minutes = Math.floor( sec / 60);
                var seconds = sec % 60;
                return `${format(minutes)} min : ${format(seconds)} sec`;
            }

            //set the interval for every 1 second
            var interval = setInterval(timing, 1000);

            //increment timer
            function timing() {
                model.timerCount++;
                renderElem.innerHTML = convert(model.timeRemaining - model.timerCount);
                if(model.timeRemaining === model.timerCount) {
                    model.getID('quiz-layout').style.display = 'none';
                    model.getID('finished').style.display = 'block';
                    model.getID('final-score').innerHTML =
                        `<h3 class="red bold">Failed! Time is up ...</h3> 
                         <p>The time limit is  <span class="bold green">45 minutes</span></p>
                         <p>So far you scored <span class="bold">${model.score}</span>  
                         out of <span class="bold">${model.quizArray.length}</span> 
                         (<span class="red bold">${model.scorePercentage()}%</span>)</p>`;
                    model.timerCount = 0;
                    clearInterval(interval);
                }
            }
        },
    }

})();

//user interface controller
var view = (function (){

    //access dom elements
    var elem = {
        answers: model.getID('answers'),
        answersInput: this.answers.getElementsByTagName('input'),
        answersLabel: this.answers.getElementsByTagName('label'),
        question: model.getID('question'),
        answer1: model.getID('answer1'),
        answer2: model.getID('answer2'),
        answer3: model.getID('answer3'),
        answer4: model.getID('answer4'),
        info: model.getID('info'),
        submit: model.getID('submit-btn'),
        next: model.getID('submit-btn-next'),
        finished: model.getID('finished'),
        quizLayout: model.getID('quiz-layout'),
        finishedBtn: model.getID('finished-btn'),
        finalScore: model.getID('final-score'),
        quizCount: model.getID('quiz-count'),
        correctCount: model.getID('correct-count')
    };


    var input = elem.answersInput;

    //counters to help validate user answers
    var selected = 0;
    var wrong = 0;
    var correctCount = 0;

    //function for resetting user validation counters
    var resetCounter = function() {
        selected = 0;
        wrong = 0;
        correctCount = 0;
    };

    //check if user selection is correct then increment correct answer count
    var checkSelected = function() {
        for(var i=0; i < input.length; i++){
            //assigning input elements parent to a variable
            var parentNode1 = input[i].parentNode;
            var parentNode2 = parentNode1.parentNode;
            var parentNode3 = parentNode2.parentNode;
            //style the choices according to validity
            input[i].value === '1' ? parentNode3.classList.add('valid') : parentNode3.classList.add('invalid');
            //quiz logic
            if(input[i].value === '0' && input[i].checked){
                wrong++;
            }
            if(input[i].value === '1' && input[i].checked) {
                selected++;
            }
            //disable check buttons once the validation process has gone through
            input[i].disabled = true;
        }
    };

    //check how many correct answers are supposed to be and increment the count
    var checkCorrectNo = function() {
        for(var i=0; i < model.quizArray[model.counter].correct.length; i++)  {
            if(model.quizArray[model.counter].correct[i] === 1) {
                correctCount++;
            }
        }
    };

    //make sure only the correct amount of answers are displayed
    var controlQuiz = function() {
        if(model.counter >= model.quizArray.length - 1) {
            elem.quizLayout.style.display = "none";
            elem.finished.style.display = "block";
        }
    };

    //toggle between submit and continue(next) button
    var toggleButtons = function() {
        if (model.hasClass(elem.submit, 'show')) {
            elem.submit.classList.toggle('show');
            elem.submit.classList.toggle('hide');
            elem.next.classList.toggle('show');
            elem.next.classList.toggle('hide');
        } else if (model.hasClass(elem.next, 'show')) {
            elem.submit.classList.toggle('show');
            elem.submit.classList.toggle('hide');
            elem.next.classList.toggle('show');
            elem.next.classList.toggle('hide');

        }
    };

    //when this function is called it will display final results tot he DOM
    var renderScore = function() {
        var percentageScore = model.scorePercentage();
        if( percentageScore >= 75) {
            return elem.finalScore.innerHTML =
                `<h3 class="green bold">Passed</h3>
                <p>Your scored <span class="bold">${model.score}</span> out of 
                <span class="bold">${model.quizArray.length}</span> 
                (<span class="green bold">${percentageScore}%</span>)</p>`;
        }  else {
            return elem.finalScore.innerHTML =
                `<h3 class="red bold">Failed!</h3> 
                <p>The pass rate is <span class="bold green">75%</span> or higher</p>
                <p>You scored <span class="bold">${model.score}</span>  
                out of <span class="bold">${model.quizArray.length}</span> 
                (<span class="red bold">${percentageScore}%</span>)</p>`;
        }
    };

    //remove control classes(valid and invalid)

    var removeControlClasses = function() {
        var e = elem.answers.childNodes;
        for(var i=0; i<e.length; i++) {
            if(model.hasClass(e[i], 'valid') || model.hasClass(e[i], 'invalid')) {
                e[i].classList.remove('valid');
                e[i].classList.remove('invalid');
            }
        }
    };

    return {

        //render the quiz to the dom with appropriate logic
        generateQuiz: function(chooseQuiz) {
            //initiate quiz array
            model.getArray(chooseQuiz);

            //render the questions and answers into the appropriate elements
            function render() {
                elem.quizCount.innerHTML = `Question ${model.counter + 1} of ${model.quizArray.length}`;

                elem.question.innerHTML = `${model.quizArray[model.counter].question}`;
                elem.answer1.innerHTML =
                    `<div>
                        <label>
                            <input type="checkbox" value="${model.quizArray[model.counter].correct[0]}">
                            ${model.quizArray[model.counter].answer1}
                        </label>
                    </div>`;
                elem.answer2.innerHTML =
                    `<div>
                        <label>
                            <input type="checkbox" value="${model.quizArray[model.counter].correct[1]}">
                            ${model.quizArray[model.counter].answer2} 
                        </label>
                    </di v>`;
                elem.answer3.innerHTML =
                    `<div>
                        <label>
                            <input type="checkbox" value="${model.quizArray[model.counter].correct[2]}">
                            ${model.quizArray[model.counter].answer3}
                        </label>
                    </div>`;
                elem.answer4.innerHTML =
                    ` <div>
                        <label>
                            <input type="checkbox" value="${model.quizArray[model.counter].correct[3]}">
                            ${model.quizArray[model.counter].answer4}
                        </label>
                    </div>`;
            };
            //render first question
            render();

            //move to next question while validating the answer
            elem.submit.addEventListener("click", function(){

                //initiate validation process
                checkSelected();
                checkCorrectNo();

                if(selected === correctCount && selected !== 0 && wrong === 0) {
                    resetCounter();
                    model.score++;

                    //render question related information
                    elem.info.innerHTML =
                        `<h2 class="green bold">Correct</h2>
                         <p class="success">${model.quizArray[model.counter].info}</p>`;

                    elem.correctCount.innerHTML =  model.score;

                    toggleButtons();
                    renderScore();
                } else {
                    //render question related information
                    elem.info.innerHTML =
                        `<h2 class="red bold">Incorrect</h2>
                         <p class="alert">${model.quizArray[model.counter].info}</p>`;
                    renderScore();
                    toggleButtons();
                    resetCounter();
                }
                //render only available amount of questions/quiz
                console.log(`counter is: ${model.counter}`);
                console.log(`score is: ${model.score}`);

            });

            //this button will go to the next question without incrementing the score
            elem.next.addEventListener("click", function() {
                removeControlClasses();
                elem.info.innerHTML = '';
                controlQuiz();
                resetCounter();
                model.counter++;
                toggleButtons();
                render();
            });
        },

        //refresh page added for finish button
        finished: function() {
            elem.finishedBtn.addEventListener('click', model.refresh);
        },

    }
})();

//global controller
var controller = (function(model, view){

    var initiateQuiz = function(quiz) {
        var quizModal = document.getElementById('quiz');
        var closeButton = document.getElementById('close');
        closeButton.onclick = function() {
            location.reload();
        };
        view.generateQuiz(quiz);
        quizModal.style.display = "block";
    };

    var renderQuizOnClick = function() {

        model.getID('btn-1').addEventListener('click', function() {
            initiateQuiz(quiz1);
            model.countDownTimer();
            model.getID('quiz-name').innerHTML += ' 1';
            model.getID('finished-btn').innerHTML += ' 1';
        });

        model.getID('btn-2').addEventListener('click', function() {
            initiateQuiz(quiz2);
            model.countDownTimer();
            model.getID('quiz-name').innerHTML += ' 2';
            model.getID('finished-btn').innerHTML += ' 2';
        });

        model.getID('btn-3').addEventListener('click', function() {
            initiateQuiz(quiz3);
            model.countDownTimer();
            model.getID('quiz-name').innerHTML += ' 3';
            model.getID('finished-btn').innerHTML += ' 3';
        });

        model.getID('btn-4').addEventListener('click', function() {
            initiateQuiz(quiz4);
            model.countDownTimer();
            model.getID('quiz-name').innerHTML += ' 4';
            model.getID('finished-btn').innerHTML += ' 4';
        });

        model.getID('btn-5').addEventListener('click', function() {
            initiateQuiz(quiz5);
            model.countDownTimer();
            model.getID('quiz-name').innerHTML += ' 5';
            model.getID('finished-btn').innerHTML += ' 5';
        });

        model.getID('btn-6').addEventListener('click', function() {
            initiateQuiz(quiz6);
            model.countDownTimer();
            model.getID('quiz-name').innerHTML += ' 6';
            model.getID('finished-btn').innerHTML += ' 6';
        });

        model.getID('btn-7').addEventListener('click', function() {
            initiateQuiz(quiz7);
            model.countDownTimer();
            model.getID('quiz-name').innerHTML += ' 7';
            model.getID('finished-btn').innerHTML += ' 7';
        });

        model.getID('btn-8').addEventListener('click', function() {
            initiateQuiz(quiz8);
            model.countDownTimer();
            model.getID('quiz-name').innerHTML += ' 8';
            model.getID('finished-btn').innerHTML += ' 8';
        });

        model.getID('btn-9').addEventListener('click', function() {
            initiateQuiz(quiz9);
            model.countDownTimer();
            model.getID('quiz-name').innerHTML += ' 9';
            model.getID('finished-btn').innerHTML += ' 9';
        });

        model.getID('btn-10').addEventListener('click', function() {
            initiateQuiz(quiz10);
            model.countDownTimer();
            model.getID('quiz-name').innerHTML += ' 10';
            model.getID('finished-btn').innerHTML += ' 10';
        });

        model.getID('btn-11').addEventListener('click', function() {
            initiateQuiz(quiz11);
            model.countDownTimer();
            model.getID('quiz-name').innerHTML += ' 11';
            model.getID('finished-btn').innerHTML += ' 11';
        });

        model.getID('btn-12').addEventListener('click', function() {
            initiateQuiz(quiz12);
            model.countDownTimer();
            model.getID('quiz-name').innerHTML += ' 12';
            model.getID('finished-btn').innerHTML += ' 12';
        });

        model.getID('btn-13').addEventListener('click', function() {
            initiateQuiz(quiz13);
            model.countDownTimer();
            model.getID('quiz-name').innerHTML += ' 13';
            model.getID('finished-btn').innerHTML += ' 13';
        });

        model.getID('btn-14').addEventListener('click', function() {
            initiateQuiz(quiz14);
            model.countDownTimer();
            model.getID('quiz-name').innerHTML += ' 14';
            model.getID('finished-btn').innerHTML += ' 14';
        });

        model.getID('btn-15').addEventListener('click', function() {
            initiateQuiz(quiz15);
            model.countDownTimer();
            model.getID('quiz-name').innerHTML += ' 15';
            model.getID('finished-btn').innerHTML += ' 15';
        });

    };


    return {
        init: function(){
            renderQuizOnClick();
            view.finished();
        }
    }

})(model,view);

controller.init();