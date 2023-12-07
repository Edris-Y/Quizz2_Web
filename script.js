document.addEventListener("DOMContentLoaded", async () => {
    const mainContainer = document.querySelector('main');

    const questions = [
        { question: "Quelle le vainqueur de la coupe du monde 2018 ?", reponse: "La FRANCE !!!", type: "🥉" },
        { question: "Qui est le meilleurs buteur de l'equipe de France ?", reponse: "Olivier Giroud", type: "🥈" },
        { question: "Qui a marquer un triplé lors de la finale de coupe du monde 2022 ?", reponse: "Kylian Mbappé", type: "🥇" },
        { question: "Quelle est le vainqueur de la coupe du monde 2023 ?", reponse: "Argentine 😢", type: "🥉" },
        { question: "Quelle est le langage informatique le plus utiliser en 2023 ?", reponse: "Pyhton (selon BDM) ", type: "🥈" },
        { question: "Quelles sont les trois langages de base pour coder en Web ?", reponse: "HTML CSS JS ", type: "🥈" },
        { question: "Quelles sont les six langages back end en Web ?", reponse: "C#, Java, Python, PHP, Ruby, JS (Node. js)", type: "🥇" },
        { question: "Quelle est la date de creation et le createur du langage JS ?", reponse: "Brendan Eich en 1995", type: "🥇" },
    ];

    document.getElementById('searchInput').addEventListener('input', searchFunction);

    function searchFunction() {
        var input = document.getElementById('searchInput');
        var filter = input.value.toUpperCase();
    
        var quizzBlocks = document.querySelectorAll('.quizz_bloc .Question');
    
        var visibleBlocks = Array.from(quizzBlocks).filter((questionBlock) => {
            var textValue = questionBlock.textContent || questionBlock.innerText;
            return textValue.toUpperCase().includes(filter);
        });
    
        quizzBlocks.forEach((questionBlock) => {
            questionBlock.style.display = 'none';
        });
    
        visibleBlocks.forEach((questionBlock) => {
            questionBlock.style.display = '';
        });
    }
    
    function RandomQuestions(questions, count) {
        const tirage = questions.sort(() => 0.5 - Math.random());
        return tirage.slice(0, count);
    }
    
    function AfficheQuestions(questions) {
        const quizzBloc = document.createElement('div');
        quizzBloc.className = 'quizz_bloc';

        questions.forEach((question) => {
            const questionBlock = document.createElement("div");
            questionBlock.className = "Question";
            questionBlock.innerHTML = `<div class="level">${question.type}</div><p>${question.question}</p>`;
            
            const levelBlock = questionBlock.querySelector('.level');
            levelBlock.addEventListener('click', () => toggleAnswer(questionBlock, question.reponse));

            quizzBloc.appendChild(questionBlock);
        });

        mainContainer.appendChild(quizzBloc);
    }
    
    const getRandomQuestions = RandomQuestions(questions, 4);
    AfficheQuestions(getRandomQuestions);

    function toggleAnswer(questionBlock, answer) {
        if (!questionBlock.classList.contains('expanded')) {
            questionBlock.classList.add('expanded');
            const responseContainer = document.createElement('div');
            responseContainer.className = 'response-container';
            responseContainer.innerHTML = `<p>Réponse : ${answer}</p>`;
            questionBlock.appendChild(responseContainer);
        } else {
            questionBlock.classList.remove('expanded');
            const responseContainer = questionBlock.querySelector('.response-container');
            responseContainer.style.height = '0';
            responseContainer.style.opacity = '0';

        }
    }   

    
});
