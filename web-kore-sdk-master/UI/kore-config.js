(function(KoreSDK){

    var KoreSDK=KoreSDK||{};

    var botOptions = {};
    botOptions.logLevel = 'debug';
    botOptions.koreAPIUrl = "https://bots.kore.ai/api/";
    botOptions.koreSpeechAPIUrl = "";//deprecated
    //botOptions.bearer = "bearer xyz-------------------";
    //botOptions.ttsSocketUrl = '';//deprecated
    botOptions.koreAnonymousFn = koreAnonymousFn;
    botOptions.recorderWorkerPath = '../libs/recorderWorker.js';

    botOptions.JWTUrl = "https://github.com/SharanArvind/NESTOR.git";
    botOptions.userIdentity = 'vigneshkrishna1607@gmail.com';// Provide users email id here
    botOptions.botInfo = { name: "Nestor", "_id": "st-9f5d9830-543e-5e49-849f-62edafc03e46" }; // bot name is case sensitive

    /* 
    Important Note: These keys are provided here for quick demos to generate JWT token at client side but not for Production environment.
    Refer below document for JWT token generation at server side. Client Id and Client secret should maintained at server end.
    https://developer.kore.ai/docs/bots/sdks/user-authorization-and-assertion/
    **/
    botOptions.clientId = "cs-f8e68290-495c-5116-8cc6-7743179c7c84";
    botOptions.clientSecret = "NagSTFtpgLd8w2qGhjwBMPqdN+WDT+uBmBdQVuUPRqI=";
    botOptions.brandingAPIUrl = botOptions.koreAPIUrl +'websdkthemes/'+  botOptions.botInfo._id+'/activetheme';
    botOptions.enableThemes = true;
    
    “clientSecret”: “NagSTFtpgLd8w2qGhjwBMPqdN+WDT+uBmBdQVuUPRqI=”
$.ajax({
   url: “https://github.com/SharanArvind/NESTOR.git”,
     //this is sample url of a localhost. 
     //This should include the url where you are hosting the bot.
   botOptions.userIdentity = ‘vigneshkrishna1607@gmail.com‘;
     // Provide users email id here
   botOptions.clientId= "cs-f8e68290-495c-5116-8cc6-7743179c7c84";
     // secure client-id
   _botOptions.botInfo= {name:"Nestor","id":"st-9f5d9830-543e-5e49-849f-62edafc03e46"};
     // Kore bot name is case sensitive
 })

// for webhook based communication use following option 
// botOptions.webhookConfig={
//     enable:true,
//     webhookURL:'PLEASE_PROVIDE_WEBHOOK_URL',
//     useSDKChannelResponses: false, //Set it to true if you would like to use the responses defined for Web/Mobile SDK Channel
//     apiVersion:2 //webhookURL will be converted to v2 by default. To use v1(not recommended) webhookURL change it to 1
// }
   
// To modify the web socket url use the following option
// botOptions.reWriteSocketURL = {
//     protocol: 'PROTOCOL_TO_BE_REWRITTEN',
//     hostname: 'HOSTNAME_TO_BE_REWRITTEN',
//     port: 'PORT_TO_BE_REWRITTEN'
// };
    
    var chatConfig={
        botOptions:botOptions,
        allowIframe: false, 			// set true, opens authentication links in popup window, default value is "false"
        isSendButton: false, 			// set true, to show send button below the compose bar
        isTTSEnabled: true,			// set true, to hide speaker icon
        ttsInterface:'webapi',          // webapi or awspolly , where default is webapi
        isSpeechEnabled: true,			// set true, to hide mic icon
        stt:{
            vendor: 'webapi',           //'webapi'|'azure'|'google' //uses respective settings from the following keys and uncomments respective files in index.html
            azure:{
                subscriptionKey: '',
                recognitionLanguage: 'en-US',
                recognitionMode: 'Interactive' //Interactive/Dictation/Conversation/Interactive
            },
           google:{
            apiKey:"",
            recognitionLanguage:"en-US"
           },
           webapi:{
            recognitionLanguage: 'en-US'
           }
        },
        allowLocation: true,			// set false, to deny sending location to server
        loadHistory: true,				// set true to load recent chat history
        messageHistoryLimit: 10,		// set limit to load recent chat history
        autoEnableSpeechAndTTS: false, 	// set true, to use talkType voice keyboard.
        graphLib: "d3" ,				// set google, to render google charts.This feature requires loader.js file which is available in google charts documentation.
        googleMapsAPIKey:"",
        minimizeMode: true,             // set true, to show chatwindow in minimized mode, If false is set remove #chatContainer style in chatwindow.css  
        multiPageApp: {
            enable: false,              //set true for non SPA(Single page applications)
            userIdentityStore: 'localStorage',//'localStorage || sessionStorage'
            chatWindowStateStore: 'localStorage'//'localStorage || sessionStorage'
        },              
        supportDelayedMessages:true,    // enable to add support for renderDelay in message nodes which will help to render messages with delay from UI       
        maxTypingIndicatorTime:10000,   //time in milliseconds,typing indicator will be stopped after this time limit,even bot doesn't respond 
        pickersConfig:{
            showDatePickerIcon:false,           //set true to show datePicker icon
            showDateRangePickerIcon:false,      //set true to show dateRangePicker icon
            showClockPickerIcon:false,          //set true to show clockPicker icon
            showTaskMenuPickerIcon:false,       //set true to show TaskMenu Template icon
            showradioOptionMenuPickerIcon:false //set true to show Radio Option Template icon
        },
        sendFailedMessage:{
            MAX_RETRIES:3
        }
    };
     /* 
        allowGoogleSpeech will use Google cloud service api.
        Google speech key is required for all browsers except chrome.
        On Windows 10, Microsoft Edge will support speech recognization.
     */

    KoreSDK.chatConfig=chatConfig
})(window.KoreSDK);
