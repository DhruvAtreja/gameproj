let femDropBtn = document.querySelector(".dropbtn");
let herWants = document.querySelector(".herWants");
femDropBtn.addEventListener("click", () => {
    if (window.getComputedStyle(herWants, null).display == "none") herWants.style.display = "flex";
    else if (window.getComputedStyle(herWants, null).display == "flex") herWants.style.display = "none";
});

document.querySelector(".logo").addEventListener("click", () => {
    currActive = 1;
    currTurn = 1;
    update();
    window.location.reload();
})

let maleDropBtn = document.querySelector(".dropbtnM");
let hisWants = document.querySelector(".hisWants");
maleDropBtn.addEventListener("click", () => {
    if (window.getComputedStyle(hisWants, null).display == "none") hisWants.style.display = "flex";
    else if (window.getComputedStyle(hisWants, null).display == "flex") hisWants.style.display = "none";
});

let objDropBtn = document.querySelector(".dropbtnO");
let objWants = document.querySelector(".herWantsO");
objDropBtn.addEventListener("click", () => {
    if (window.getComputedStyle(objWants, null).display == "none") objWants.style.display = "flex";
    else if (window.getComputedStyle(objWants, null).display == "flex") objWants.style.display = "none";
});

let herWantData = {
    "Be Submissive": [[],
    ["male, gently pinch fem's nipples and slowly increase the pressure until fem asks for mercy", "fem, you are a naughty girl! Lie down on male's legs with your panties down. You will receive 12 spankings"],
    ["male, hold fem by the hair while she gives head to you. This way, tell her what pace she has to keep"],
    ["male, it's time to punish the naughty fem! To do so, decide the position in which you will penetrate her. During the act, hold her by the throat, and maybe give her a tight slap", "fem, you're on all fours or on your stomach. As male penetrates you, thank daddy for the pleasure he gives you"],
    ["fem, lie down on your back with your head hanging off the edge of the bed. male, face-fuck her and cum on her face"]],
    "Give Head": [[], [], ["fem, lick male's cock as many times as his age", "fem, put male's cock into your mouth and swirl your tongue around it", "fem, lick male's penis 6 times, from testicles to the head"],
    ["fem, suck the head of male's cock vigorously while using your hands to give him a handjob at the same time"],
    []],
    "Have Backdoor Fun": [[], ["male can take care of your ass as he pleases. He can caress, grope and kiss it. He may also use his fingers and tongue for your anus"], ["male, place yourself in spooning position. With your index finger moistened with saliva, caress fem's anus"], ["fem and male, this dare will be decide on a single game of rock-paper-scissors. The  winner will slip two fingers into the anus of the loser"], ["fem, choose your favourite position for male to sodomize you. Take the opportunity to masturbate the way you want and come in this position"]],
    "Have Rough Sex": [[], [], ["male, lay down on your back. fem, smother his face and lips with your pussy. Cover his face with pussy juice if you can"], ["fem, time to take matters into your hands. Fuck male in the amazon position. Be as rough as possible", "fem, wrap your legs around male's hips and choke male with one hand while putting a finger in his mouth while he fucks you in missionary. Male, thrust as hard and deep as you can"], []],
    "Practice intimacy": [['As you feel the love that is welling up in your heart for your partner, reach across and place your right hand on the heart of your partner(with consent), and they can place their right hand on your heart.Each persons left hand then covers the hand on their own heart. Synchronize your breathing, with slow, deep, nourishing breaths. On the inhale, receive breath and love into your own heart, and on the exhale, send that love from your heart down your right arm and into your partners heart, making a circuit of love and energy flowing between you', 'Sit up straight on a pillow or chair facing your partner. You can look left eye to left eye or just gaze softly at both eyes, and you can also hold hands if you like. Let the love that is in your heart shine out through your eyes.', 'fem, Set intentions for this session of intimacy, such as, "My intention is to show you with my body how much I love you" or "I am curious to explore deeply receiving."', 'Gazing at your beloved, see the divine spark in their eyes, marveling at the pure life force that is animating them. Feel the sacredness of this simple moment together.'],
    ["One partner gets to just lie back and receive, getting the chance to tune into their pleasure and sexual energy and see how it wants to open up through their body, while the other partner moves their hands slowly and meditatively along their body to let them feel every single new sensation"], [], [], []]
}

let hisWantData = {
    "Be Submissive": [["male, kiss and lick fem's feet 6 times each. You can also go through her ankles with sweet kissing and taste the soft skin of her calves", "fem, sit down and order male to kneel down to kiss your pretty feet 4 times"],
    [],
    ["male, lay down on your back. Fem, smother his face and lips with your pussy. Cover his face with pussy juice if you can"],
    ["fem, time to take matters into your hands. Fuck male in the amazon position. Be as rough as possible", "fem, wrap your legs around male's hips and choke male with one hand while putting a finger in his mouth while he fucks you in missionary. Male, thrust as hard and deep as you can", "fem, grab male by the testicles and gently squeeze them. Reinforce your grip gradually, until he begs you to stop"],
    []],
    "Give Head": [[], [], ["male, kneel facing fem, who is standing, and kiss her vagina", "fem and male, go head to toe to share a delicious 69. While you take good care of your partner with your mouth, you can take the opportunity to play with his/her anus if you want",]
        , ["fem, get on all fours. male, you start by kissing her thighs, then her buttocks and you end up licking her vagina. You must not use your fingers"],
    ["fem, put yourself in the position of your choice and let male go down on you. He will kiss your vagina, lick it, and finger it until you come"]],
    "Have Backdoor fun": [[], [], ["In the position of your choice, fem insert your finger into male's anus and slide it in and out 7 times"], ["male, sodomize fem in the position of your choice and take the opportunity to masturbate her", "fem, lie down on your back, legs bent over breasts. male will stick one finger in anus and one in vagina and give you pleasure", "fem is lying on her side. male, lie down next to her and insert your penis into her anus after lubrication"], ["male, pound fem's anus in a position of your choice and cum deep inside her ass"]],
    "Have rough sex": [[], [], [], [], ["fem, lie down on your back with your head hanging off the edge of the bed. male, face-fuck her and cum on her face"]],
    "Practice intimacy": [[],
    ["One partner gets to just lie back and receive, getting the chance to tune into their pleasure and sexual energy and see how it wants to open up through their body, while the other partner moves their hands slowly and meditatively along their body to let them feel every single new sensation"], [],
    ["The base partner (representing Shiva, who is energetically or physically penetrative) sits cross-legged on a pillow in the 'holding' position while the other partner (representing Shakti, who is energetically or physically receptive) can sit in the lap of their partner. The base partner's arms should go around the waist of the other partner, whose arms go around the shoulders of the base partner. Your heads can be cheek to cheek, or you can touch foreheads. Start by taking a few deep, slow breaths together, synchronizing your breathing. Then begin to move together in slow undulations, arching, swirling in circles, finding a flow and a rhythm that feels delicious, activating your sexual energy together. The base partner 'gives' to the partner on top who is 'receiving' that energy up into their body."], []]
}
let herPanel = document.querySelector(".herWants");

let herWantKeys = Object.keys(herWantData);
let herWantBool = new Map();

herWantKeys.forEach((x) => {
    let tempNode = document.createElement("div");
    tempNode.setAttribute("class", "unselected");
    tempNode.append(x);
    herPanel.append(tempNode);
    herWantBool.set(x, false);
    tempNode.addEventListener("click", () => {
        tempNode.classList.toggle("selectedf");
        herWantBool.set(x, !herWantBool.get(x));
    })
});

let hisPanel = document.querySelector(".hisWants");

let hisWantKeys = Object.keys(hisWantData);
let hisWantBool = new Map();

hisWantKeys.forEach((x) => {
    let tempNode = document.createElement("div");
    tempNode.setAttribute("class", "unselected");
    tempNode.append(x);
    hisPanel.append(tempNode);
    hisWantBool.set(x, false);
    tempNode.addEventListener("click", () => {
        tempNode.classList.toggle("selectedm");
        hisWantBool.set(x, !hisWantBool.get(x));
    })
});

let objWantData = {
    "Camera": [[], ["fem, you will pose in front of camera for male to take 3 very hot pictures!"], [], [], []],
    "Ice Cube": [[], ["fem, take an ice cube in your mouth and kiss male's nipples until they are hard. male, return the favor"], ["male, keep an ice cube in your mouth and give head to fem until it melts", "male, melt an ice cube while playing with fem's vagina. Warm it up with your gentle kisses and breath"], [], []],
    "Dildo": [[], [], [], ["fem is lying on her stomach, buttocks raised. male, penetrate her with the dildo at consistent pace", "fem, let male penetrate you with the dildo 10 times"], []],
    "Alcohol": [["male, you have to make fem drink a sip of alcohol but she can't use her hands. You will then kiss her on the lips", "fem will take a sip of alcohol and that will be shared with male by kissing him"],
    [], [], [], []]
}

let objPanel = document.querySelector(".herWantsO");

let objWantKeys = Object.keys(objWantData);
let objBool = new Map();
objWantKeys.forEach((x) => {
    let tempNode = document.createElement("div");
    tempNode.setAttribute("class", "unselected");
    tempNode.append(x);
    objPanel.append(tempNode);
    objBool.set(x, false);
    tempNode.addEventListener("click", () => {
        tempNode.classList.toggle("selectedo");
        objBool.set(x, !objBool.get(x));
    });
});

let commonM = [["male, hug fem from the side as tightly as you can! Kiss her cheeks and fondle her body", "male, kiss fem's hands slowly as you wrap her around your arms", "male, make fem sit on your lap and makeout for 2 minutes", "male is lying on his back. fem, slide your hands across his chest and brush it with your lips", "male, sit down cross-legged. fem is lying on your legs, face to you. Gently massage her face, her temples and her scalp", "While you two are kissing, male, you run your hand along the legs of fem, you end up caressing her buttocks", "male, kiss fem languidly. Take the opportunity to exchange some caresses", "male, kiss fem's neck a few times then finish by sensually nibbling the lobe of her ear"],
["male, lightly kiss and suck fem's pussy just like you would kiss her lips. You can lick the clit too", "male, hug fem from behind. Slowly caress her breasts and stomach while you kiss her back, neck and ears", "male, put fem in a position you'd like to fuck her in, and dry hump her slowly while kissing and caressing her", "male, hug fem from behind. Cover her breasts with your hands and kiss her neck slowly", "male, massage fem's breasts", "male, kiss and lick fem's nipples for 1 minute", "male, show how much you want fem by licking/kissing her over her pantes 5 times", "male, kiss fem's breasts 6 times"],
["male, make fem sit on your lap with one leg on each side, facing you. She has to grind her pussy or clitoris against it while holding on to you", "male, rub fem's clitoris with your cock, but don't penetrate her yet!", "male, use fem's hand to masturbate. Only her hand is in contact with your penis", "male, let fem suck one of your fingers and then stick it slowly in her vagina. Take it back out just as gently", "male, stand in front of fem. You look each other in the eyes. Masturbate her while she does the same for you", "fem, lie on your stomach, arms and legs apart. Give yourself to him and let him kiss you wherever he wants", "male, how many fingers can you put into fem's vagina? Test this out, gradually, and stop when fem asks", "male, gently rub fem's clitoris with the tip of your cock"],
["male, put one or two fingers inside fem's mouth and thrust into her a time equal to her age. She has to count each thrust out loud", "fem sits on a table, a washing machine or a piece of furniture of your choice... male, make love to her in this position", "fem, lie down on your back. male lies down on you and penetrates you like this", "male, penetrate fem as deeply as possible, in the position of your choice, Once deep inside, you only have the right to make small movements", "male, penetrate fem and thrust into her a number of times equal to her age", "male, thrust into fem as hard as possible for 10 thrusts. If fem is too loud, cover her mouth with your hand to shut her up", "fem, lie down near the edge of the bed with your feet wide apart. male, put one hand on her neck and make love to her passionately", "fem, lie down on your stomach. male, put a pillow under her thrust deeply while on top"],
["fem is lying down on her stomach. male, put a pillow under her and pound her prone-bone until you cum", "male, take fem in the position of your choice until you come inside her", "male is lying on his back. fem, ride him until he comes in you", "male, penetrate fem doggy style until you come"]];
let commonF = [["fem, start kissing male at the lips, make your way slowly down his neck, chest, stomach and so on until you reach his thighs", "fem, try your best to do a striptease/lapdance for male", "fem, face male and kiss him. Run your hands under his clothes, and up and down his body: caress his chest and back, grab his buttocks..  take possession of him!", "fem, sit behind male and tenderly kiss his neck 10 times", "fem, with one finger, write on male's back the part of his body you want the most. If he can guess what you wrote, you will kiss him there", "fem, give male a little back and neck massage for 1 minute", "fem, using only the tip of your tongue, gently lick male's lips until they become very bright", "fem, kiss male's neck a few times then finish by sensually nibbling the lobe of his ear"],
["fem, kiss male's balls 10 times each. Do it slowly, and you may lick them too", "fem, sit down. male sits between your legs turning his back to you. Stroke his penis, pretending to masturbate like a man", "fem, for one minute, you'll caress male's face with your breasts", "fem, slip your hand into your panties and caress yourself for a few seconds. Then remove your hand and put your fingers on male's lips", "fem, kiss male's cock through his underpants", "fem, ask male to get up, then you'll rub your buttocks against his cock", "fem, using male's fingers, show him how you perform fellatio for 30 seconds", "fem, take male's penis in your hands. Look him in the eyes while you masturbate him for 30 seconds. Let him know how bad you want him", "fem, kiss male's pecs 8 times", "fem, close your eyes and play with your breasts for 1 minute. male, savor the moment and touch penis slowly"],
["fem, give male a sloppy blowjob. Spit on his cock and try to go as deep as you can! Move your head as fast as possible, but stop before he cums", "fem, masturbate male while kissing his testicles", "male, kneel facing fem, who is standing, and kiss her vagina", "fem, caress yourself in front of male. Your mission: to excite him as much as possible by showing him how much pleasure you can take", "fem, you're on all fours and your back is arched. You show off your vagina to male who can lick it as her pleases", "male is lying on his back. fem, take the opportunity to fondle his cock with your breasts. As you wish, you can slide it between your breasts, rub the tip of it with your nipples... But you cannot use your hands!", "fem, wrap male's penis in your panties and masturbate him for a minute"],
["male sits cross legged, and leans back slightly, leaning on his hands. fem, come and sit on his penis, face him", "male, sit comfortably on the couch, the bed or a chair... and fem, get on and ride him, face to face. Let him grab your buttocks and take care of your breasts while you set the pace", "male, put fem against a wall and penetrate her savagely", "male, you're lying on your back, fem is riding your penis turning her back to you. Let her set the pace and enjoy the view of her back and buttocks in motion", "fem, put your hands on male's chest and ride him. Spell his name with your hips while his cock is inside you"],
["fem is lying on her side. male, lie down next to her. While you penetrate her, rub her clitoris until she cums", "fem, you're lying on your back. male has his penis in you and he rubs your clit. Move at him at your own pace, let the pleasure build to orgasm", "fem is lying on her back, her ankles on your shoulders. male, make love to her this way until you come"]];

let hisTasks = [[], [], [], [], []];
let herTasks = [[], [], [], [], []];

let maleName = "GUY";
let femName = "GIRL";

document.querySelector(".playBtn").addEventListener("click", () => {
    for (let i = 0; i < 5; i++) {
        commonM[i].forEach((x) => {
            hisTasks[i].push(x);
        })
        hisWantKeys.forEach((want) => {
            if (hisWantBool.get(want)) {
                hisWantData[want][i].forEach((x) => { hisTasks[i].push(x) });
            }
        });

        commonF[i].forEach((x) => {
            herTasks[i].push(x);
        })
        herWantKeys.forEach((want) => {
            if (herWantBool.get(want)) {
                herWantData[want][i].forEach((x) => { herTasks[i].push(x) });
            }
        });
        objWantKeys.forEach((want) => {
            if (objBool.get(want)) {
                objWantData[want][i].forEach((x) => {
                    if (Math.random() % 2) hisTasks[i].push(x);
                    else herTasks[i].push(x);
                });
            }
        })
    }
    femName = document.querySelector(".herName").value;
    maleName = document.querySelector(".hisName").value;
    if (femName == "") femName = "GIRL";
    if (maleName == "") maleName = "GUY";
    document.querySelector(".background").style.display = "none";
    document.querySelector(".placardc").style.display = "flex";
    let appendText = document.createElement("span");
    appendText.innerText = herTasks[0][Math.floor(Math.random() * herTasks[0].length)];
    document.querySelector(".dareAreac").append(appendText);
    let temptext = document.querySelector(".dareAreac span").innerText;
    temptext = temptext.replaceAll("fem", '<b class="f">' + femName + '</b>');
    temptext = temptext.replaceAll("male", '<b class="m">' + maleName + '</b>');
    document.querySelector(".dareAreac span").innerHTML = temptext + "!";
})

const progress = document.querySelector("#progressc");
const prev = document.querySelector("#prevc");
const next = document.querySelector("#nextc");
const circles = document.querySelectorAll(".circlec");

const update = () => {
    circles.forEach((circle, i) => {
        i < currActive
            ? circle.classList.add("activec")
            : circle.classList.remove("activec");
    });

    const actives = document.querySelectorAll(".activec");
    const width = ((actives.length - 1) / (circles.length - 1)) * 100;
    progress.style.width = `${width}%`;

    if (currActive === 1) {
        prev.disabled = true;
    } else if (currActive > circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
};

let currActive = 1;
let currTurn = 1;
next.addEventListener("click", () => {
    currTurn++;
    if ((currTurn - 1) % 3 == 0) currActive++;
    if (currActive > circles.length) {
        currActive = circles.length;
    }
    if (currTurn % 2) {
        document.querySelector(".dareAreac span").innerText = herTasks[currActive - 1][Math.floor(Math.random() * herTasks[currActive - 1].length)];
    } else {
        document.querySelector(".dareAreac span").innerText = hisTasks[currActive - 1][Math.floor(Math.random() * hisTasks[currActive - 1].length)];
    }
    let temptext = document.querySelector(".dareAreac span").innerText;
    temptext = temptext.replaceAll("fem", '<b class="f">' + femName + '</b>');
    temptext = temptext.replaceAll("male", '<b class="m">' + maleName + '</b>');
    document.querySelector(".dareAreac span").innerHTML = temptext + "!";
    update();
});
prev.addEventListener("click", () => {
    currActive--;

    if (currActive < 1) {
        currActive = 1;
    }
    update();
    currTurn -= 4;
    next.click();
});

setInterval(() => {
    document.querySelector("#donatemodalbtn").click();
}, 150000);


