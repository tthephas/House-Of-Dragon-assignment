console.log('do something')

// Need to create a few things
// A pop up message for each Bio for each player
// A pop up message for each status of each player (alive or dead)

// The pop ups will use JS for document listeners. When clicked, the pop up will display. Need to put a CLOSE button on each too, or try to just close on clicking on something else. Or a timer.
// Each one will probably need their own ID.

// Could possibly use ONE pop up window for EVERYONE. Whoever's button get clicked, that is the info that populates/shows on the display window.
// Need a close form function if i go that route to close the window.



// Make a variable for one of the cards and their buttons
//const bioRhaenyra = document.getElementById('bioRhaenyra')
//const statusRhaenyra = document.getElementById('statusRhaenyra')

// Make a variable for the pop up screen to get into the text
const statusOrBio = document.getElementById('bioOrStatus')
const popupText = document.getElementById('popupText')

/// try to build out only for Rhaenyra
// this worked. so i need variables for everyone. copy over bio or status. then the text for each
// Rhaenyra BIO
const bioRhaenyra = document.getElementById('bioRhaenyra') 
bioRhaenyra.addEventListener("click", addBioRhaenyra)

function addBioRhaenyra() {
    document.getElementById('popup').style.display = 'block'
    statusOrBio.innerHTML = "BIO"
    popupText.innerHTML= "     Rhaenyra Targaryen, cheered as the Realm's Delight when she was young, and later called the Half-Year Queen, was the first-born child of King Viserys I Targaryen. Rhaenyra was King Viserys I's only living child by his first wife, Queen Aemma of House Arryn. At the age of eight, she was made her father's heir, and grew up expecting to become the first ruling Queen of Westeros. Rhaenyra was a dragonrider whose mount was Syrax. Her claim to the Iron Throne was challenged by her younger half-brother, Aegon II Targaryen, sparking the civil war known as the Dance of the Dragons. She was the mother of two kings,[11] Aegon III and Viserys II. Rhaenyra's personal sigil was the standard Targaryen heraldry (a three-headed red dragon on a black field), quartered with the moon-and-falcon sigil of House Arryn (for her mother Aemma Arryn), and the silver seahorse on sea green of House Velaryon (for her first husband Laenor Velaryon, as well as for the Velaryons in general, who were among her major supporters). During the Dance, her faction used her personal heraldry as their battle-flag."
}

// Rhaenyra STATUS
const statusRhaenyra = document.getElementById('statusRhaenyra')
statusRhaenyra.addEventListener("click", addStatusRhaenyra)

function addStatusRhaenyra() {
    document.getElementById('popup').style.display = 'block'
    statusOrBio.innerHTML = "STATUS" + "<br />" + "<br />" + "<br />" +  "DECEASED"
    popupText.innerHTML= ""
}
//////////// ALICENT HIGHTOWER ///////////////
// Alicent BIO
const bioAlicent = document.getElementById('bioAlicent') 
bioAlicent.addEventListener("click", addBioAlicent)

function addBioAlicent() {
    document.getElementById('popup').style.display = 'block'
    statusOrBio.innerHTML = "BIO"
    popupText.innerHTML= "     Queen Alicent Hightower is the second wife of King Viserys I Targaryen. The daughter of Ser Otto Hightower, who was Hand to the previous king. She is the mother of King Aegon II Targaryen, Queen Helaena Targaryen, Prince Aemond Targaryen and Prince Daeron Targaryen. She is also the archenemy of Queen Rhaenyra Targaryen, and one of the masterminds of the Targaryen civil war known as the Dance of the Dragons. Alicent was described as clever and lovely at the age of 18. After having given birth four times, Alicent remained as slender and graceful as before the first pregnancy. Alicent was highly intelligent, literate and willful, but also scheming and firmly ambitious. Throughout her time as queen, despite her popularity and the love Viserys I Targaryen bore her, Alicent constantly tried to put her bloodline ahead of her nemesis Rhaenyra's, and the hatred between the two women was a ferocious factor in the Dance of the Dragons. "
}

// Alicent STATUS
const statusAlicent = document.getElementById('statusAlicent')
statusAlicent.addEventListener("click", addStatusAlicent)

function addStatusAlicent() {
    document.getElementById('popup').style.display = 'block'
    statusOrBio.innerHTML = "STATUS" + "<br />" + "<br />" + "<br />" +  "ALIVE"
    popupText.innerHTML= ""
}


//////////// KING VISERYS ///////////////
// King BIO
const bioKing = document.getElementById('bioKing') 
bioKing.addEventListener("click", addBioKing)

function addBioKing() {
    document.getElementById('popup').style.display = 'block'
    statusOrBio.innerHTML = "BIO"
    popupText.innerHTML= "     Viserys I is the grandson of King Jaehaerys I Targaryen. He immediately succeeded his grandfather as king because Jaehaerys I ruled for so long that his children, Prince Baelon and Princess Alyssa (Viserys's parents), predeceased him. Jaehaerys I was himself the grandson of Aegon the Conqueror, who invaded and united Westeros and forged the Iron Throne. Viserys inherited the realm after an unprecedented fifty years of peace and prosperity under his grandfather, a golden age that Viserys strives not to disrupt. Moreover, if Rhaenys was to be passed over due to being a woman, others (including House Stark) argued that rule should pass to her son Laenor Velaryon. To address the issue, all the lords of Westeros gathered in the Great Council of 101 AC: Viserys won the final vote by a wide margin, and Rhaenys grudgingly accepted the result. King Jaehaerys died and was succeeded by Viserys in 103 AC. The question of Viserys's succession leads to factions forming in the realm as ambitious lords compete for his favor, particularly the Velaryons trying to regain the throne they see as rightfully theirs, and House Hightower - the powerful family of Viserys's Hand of the King, Otto Hightower, the rulers of Oldtown who maintain deep ties with the leadership of the Faith of the Seven."
}

// King STATUS
const statusKing = document.getElementById('statusKing')
statusKing.addEventListener("click", addStatusKing)

function addStatusKing() {
    document.getElementById('popup').style.display = 'block'
    statusOrBio.innerHTML = "STATUS" + "<br />" + "<br />" + "<br />" +  "DECEASED"
    popupText.innerHTML= ""
}

//////////// DAEMON TARGARYEN ///////////////
// Daemon BIO
const bioDaemon = document.getElementById('bioDaemon') 
bioDaemon.addEventListener("click", addBioDaemon)

function addBioDaemon() {
    document.getElementById('popup').style.display = 'block'
    statusOrBio.innerHTML = "BIO"
    popupText.innerHTML= "     Daemon was born as the second son of Prince Baelon Targaryen and his sister-wife, Princess Alyssa Targaryen, in 81 AC, during the reign of his grandfather, King Jaehaerys I Targaryen. He had one older brother, Viserys, as well as one younger brother, Aegon, who died in infancy.Within a fortnight of Daemon's birth, Alyssa took the child flying on Meleys. Daemon was free spirited and adventurous in his youth. Daemon was knighted at sixteen, and King Jaehaerys I Targaryen gave him Dark Sister. In 97 AC, Daemon married Lady Rhea Royce, the heir to Runestone, but he disliked both her and the Vale of Arryn; Daemon referred to his wife as his bronze bi***. During the Great Council of 101 AC, Daemon supported the claim of Prince Viserys, as it would make Daemon the heir after his brother. Daemon gathered a small army of sworn swords and men-at-arms when it was rumored that Lord Corlys Velaryon was readying a fleet to defend the rights of his son, Laenor Velaryon."
}

// Daemon STATUS
const statusDaemon = document.getElementById('statusDaemon')
statusDaemon.addEventListener("click", addStatusDaemon)

function addStatusDaemon() {
    document.getElementById('popup').style.display = 'block'
    statusOrBio.innerHTML = "STATUS" + "<br />" + "<br />" + "<br />" +  "DECEASED"
    popupText.innerHTML= ""
}
//////////// LAENA VELARYON ///////////////
// Laena BIO
const bioLaena = document.getElementById('bioLaena') 
bioLaena.addEventListener("click", addBioLaena)

function addBioLaena() {
    document.getElementById('popup').style.display = 'block'
    statusOrBio.innerHTML = "BIO"
    popupText.innerHTML= "     Laena was born in late 92 AC. She was the daughter of Lord Corlys Velaryon and Princess Rhaenys Targaryen, and the great-granddaughter of King Jaehaerys I Targaryen. Princess Rhaenys's father, Prince Aemon Targaryen, the eldest son and heir of King Jaehaerys I, died shortly after Rhaenys learned she was pregnant. Although Rhaenys was Aemon's heir, Jaehaerys I named his second son, Prince Baelon, as his new heir, passing over Rhaenys and her potential unborn son. The unborn Laena, also referred to as the boy in the belly, was subject of much debate on the succession until her birth. In 101 AC, Laena's claim to the Iron Throne was put forward once more during the Great Council, but she was passed over, together with her mother, on account of her sex. By 105 AC, Laena had become a dragonrider by claiming the largest Targaryen dragon left alive, Vhagar. Following the death of Queen Aemma Arryn in late 105 AC, Grand Maester Runciter urged King Viserys I Targaryen to remarry and suggested the twelve-year-old Laena as a bride, so Viserys could heal the rift between House Targaryen and House Velaryon. Viserys married another noblewoman, however, and although this angered Laena's father, Laena herself was untroubled."
}

// Laena STATUS
const statusLaena = document.getElementById('statusLaena')
statusLaena.addEventListener("click", addStatusLaena)

function addStatusLaena() {
    document.getElementById('popup').style.display = 'block'
    statusOrBio.innerHTML = "STATUS" + "<br />" + "<br />" + "<br />" +  "DECEASED"
    popupText.innerHTML= ""
}
//////////// LAENOR VELARYON ///////////////
// Laenor BIO
const bioLaenor = document.getElementById('bioLaenor') 
bioLaenor.addEventListener("click", addBioLaenor)

function addBioLaenor() {
    document.getElementById('popup').style.display = 'block'
    statusOrBio.innerHTML = "BIO"
    popupText.innerHTML= "     Laena was born in late 92 AC. She was the daughter of Lord Corlys Velaryon and Princess Rhaenys Targaryen, and the great-granddaughter of King Jaehaerys I Targaryen. Princess Rhaenys's father, Prince Aemon Targaryen, the eldest son and heir of King Jaehaerys I, died shortly after Rhaenys learned she was pregnant. Although Rhaenys was Aemon's heir, Jaehaerys I named his second son, Prince Baelon, as his new heir, passing over Rhaenys and her potential unborn son. The unborn Laena, also referred to as the boy in the belly, was subject of much debate on the succession until her birth. In 101 AC, Laena's claim to the Iron Throne was put forward once more during the Great Council, but she was passed over, together with her mother, on account of her sex. By 105 AC, Laena had become a dragonrider by claiming the largest Targaryen dragon left alive, Vhagar. Following the death of Queen Aemma Arryn in late 105 AC, Grand Maester Runciter urged King Viserys I Targaryen to remarry and suggested the twelve-year-old Laena as a bride, so Viserys could heal the rift between House Targaryen and House Velaryon. Viserys married another noblewoman, however, and although this angered Laena's father, Laena herself was untroubled."
}

// Laenor STATUS
const statusLaenor = document.getElementById('statusLaenor')
statusLaenor.addEventListener("click", addStatusLaenor)

function addStatusLaenor() {
    document.getElementById('popup').style.display = 'block'
    statusOrBio.innerHTML = "STATUS" + "<br />" + "<br />" + "<br />" +  "ALIVE"
    popupText.innerHTML= ""
}





// Add an event listener, when DOM loads, run the game on an interval
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("popup").style.display = "none"
})

// function to open up the bio/status page
function openForm() {
    document.getElementById('popup').style.display = 'block'

}

// Function to attach to the close button on the pop up for bio/status
function closeForm() {
    document.getElementById("popup").style.display = "none"
}