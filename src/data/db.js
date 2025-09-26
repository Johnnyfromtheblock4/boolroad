const trips = [
  {
    id: 1,
    name: "Gita al lago",
    city: "Como",
    initialDate: "2025-11-14",
    endDate: "2025-11-17",
    participants: [
      {
        name: "Amleto",
        surname: "Mure",
        fiscalCode: "VHSDVD10F15G400Z",
        email: "amletomure@proton.ch",
        phone: 3338585072,
      },
      {
        name: "Gianmarco",
        surname: "Visconti",
        fiscalCode: "PS2PSP44V24L777W",
        email: "gianvisco@gmail.it",
        phone: 34518635741,
      },
    ],
  },
];

const tripsss =
[
  {
    "id": 1,
    "name": "Weekend a Venezia",
    "city": "Venezia",
    "initialDate": "2025-10-10",
    "endDate": "2025-10-12",
    "participants": [
      { "nome": "Luca", "cognome": "Rossi", "fiscalCode": "RSSLCU85M01H501Z", "email": "luca.rossi@example.com" },
      { "nome": "Giulia", "cognome": "Bianchi", "fiscalCode": "BNCGLI90F45H501Y", "email": "giulia.bianchi@example.com" },
      { "nome": "Alberto", "cognome": "Ferrari", "fiscalCode": "FRRALB88M22H501X", "email": "alberto.ferrari@example.com" },
      { "nome": "Chiara", "cognome": "Moretti", "fiscalCode": "MRTCHR91A11H501W", "email": "chiara.moretti@example.com" },
      { "nome": "Davide", "cognome": "Conti", "fiscalCode": "CNTDVD87D22H501V", "email": "davide.conti@example.com" }
    ]
  },
  {
    "id": 2,
    "name": "Tour enogastronomico",
    "city": "Firenze",
    "initialDate": "2025-11-01",
    "endDate": "2025-11-05",
    "participants": [
      { "nome": "Marco", "cognome": "Verdi", "fiscalCode": "VRDMRC88A22H501X", "email": "marco.verdi@example.com" },
      { "nome": "Elisa", "cognome": "Romano", "fiscalCode": "RMLSLE92B31H501U", "email": "elisa.romano@example.com" },
      { "nome": "Fabio", "cognome": "Galli", "fiscalCode": "GLLFBO89C21H501T", "email": "fabio.galli@example.com" },
      { "nome": "Martina", "cognome": "Leoni", "fiscalCode": "LEOMRT93G21H501S", "email": "martina.leoni@example.com" },
      { "nome": "Simone", "cognome": "Costa", "fiscalCode": "CSTSMN90D11H501R", "email": "simone.costa@example.com" }
    ]
  },
  {
    "id": 3,
    "name": "Escursione alpina",
    "city": "Courmayeur",
    "initialDate": "2025-08-15",
    "endDate": "2025-08-20",
    "participants": [
      { "nome": "Sara", "cognome": "Neri", "fiscalCode": "NERSRA92C12H501W", "email": "sara.neri@example.com" },
      { "nome": "Davide", "cognome": "Fontana", "fiscalCode": "FNTDVD87D22H501V", "email": "davide.fontana@example.com" },
      { "nome": "Laura", "cognome": "Greco", "fiscalCode": "GRCLRA95E31H501Q", "email": "laura.greco@example.com" },
      { "nome": "Andrea", "cognome": "Riva", "fiscalCode": "RVAAND90F21H501P", "email": "andrea.riva@example.com" },
      { "nome": "Federico", "cognome": "De Luca", "fiscalCode": "DLCFDR88N01H501N", "email": "federico.deluca@example.com" }
    ]
  },
  {
    "id": 4,
    "name": "Relax alle terme",
    "city": "Saturnia",
    "initialDate": "2025-09-05",
    "endDate": "2025-09-07",
    "participants": [
      { "nome": "Elena", "cognome": "Russo", "fiscalCode": "RSSELN91E11H501U", "email": "elena.russo@example.com" },
      { "nome": "Tommaso", "cognome": "Ferrari", "fiscalCode": "FRRTMS90L11H501P", "email": "tommaso.ferrari@example.com" },
      { "nome": "Chiara", "cognome": "Greco", "fiscalCode": "GRCCHR95I31H501Q", "email": "chiara.greco@example.com" },
      { "nome": "Alessandro", "cognome": "Gallo", "fiscalCode": "GLLALS89H01H501R", "email": "alessandro.gallo@example.com" },
      { "nome": "Francesco", "cognome": "Conti", "fiscalCode": "CNTFRC86F31H501T", "email": "francesco.conti@example.com" }
    ]
  },
  {
    "id": 5,
    "name": "Giro culturale",
    "city": "Roma",
    "initialDate": "2025-12-01",
    "endDate": "2025-12-04",
    "participants": [
      { "nome": "Valentina", "cognome": "Marini", "fiscalCode": "MRNVLT94M21H501O", "email": "valentina.marini@example.com" },
      { "nome": "Giovanni", "cognome": "Barbieri", "fiscalCode": "BRBGVN87A01H501N", "email": "giovanni.barbieri@example.com" },
      { "nome": "Serena", "cognome": "Fabbri", "fiscalCode": "FBBSRN93B11H501M", "email": "serena.fabbri@example.com" },
      { "nome": "Matteo", "cognome": "Rossi", "fiscalCode": "RSSMTT88C21H501L", "email": "matteo.rossi@example.com" },
      { "nome": "Ilaria", "cognome": "De Santis", "fiscalCode": "DSNILR90D31H501K", "email": "ilaria.desantis@example.com" }
    ]
  },
  {
    "id": 6,
    "name": "Weekend romantico",
    "city": "Verona",
    "initialDate": "2025-10-20",
    "endDate": "2025-10-22",
    "participants": [
      { "nome": "Alessandro", "cognome": "Gallo", "fiscalCode": "GLLALS89H01H501R", "email": "alessandro.gallo@example.com" },
      { "nome": "Francesca", "cognome": "Rizzi", "fiscalCode": "RZZFRC91E21H501J", "email": "francesca.rizzi@example.com" },
      { "nome": "Nicola", "cognome": "Sartori", "fiscalCode": "SRTNCL88F11H501I", "email": "nicola.sartori@example.com" },
      { "nome": "Beatrice", "cognome": "Villa", "fiscalCode": "VLLBTR92G01H501H", "email": "beatrice.villa@example.com" },
      { "nome": "Lorenzo", "cognome": "Monti", "fiscalCode": "MNTLRZ90H21H501G", "email": "lorenzo.monti@example.com" }
    ]
  },
  {
    "id": 7,
    "name": "Avventura in Sicilia",
    "city": "Palermo",
    "initialDate": "2025-07-10",
    "endDate": "2025-07-15",
    "participants": [
      { "nome": "Chiara", "cognome": "Greco", "fiscalCode": "GRCCHR95I31H501Q", "email": "chiara.greco@example.com" },
      { "nome": "Antonio", "cognome": "Lombardi", "fiscalCode": "LMBANT88J11H501F", "email": "antonio.lombardi@example.com" },
      { "nome": "Marta", "cognome": "Colombo", "fiscalCode": "CLBMRT93K21H501E", "email": "marta.colombo@example.com"