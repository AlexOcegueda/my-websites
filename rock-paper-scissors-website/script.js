const choiceButtons = document.querySelectorAll("[data-selection]")
const CHOICES = [
    {
        name: "rock",
        display: "rock",
        beats: "scissors"
    },
    {
        name: "paper",
        display: "paper",
        beats: "rock"
    },
    {
        name: "scissors",
        display: "scissors",
        beats: "paper"
    }
]

choiceButtons.forEach(choiceButton => {
    choiceButton.addEventListener('click', e => {
        const choiceName = choiceButton.dataset.selection
        makeChoice(choiceName)
    })
});

function makeChoice(choice){
    console.log(choice)
}