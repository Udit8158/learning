/* Reusable quiz + recall behaviour for lessons.
   Markup contract:
   <div class="quiz" data-answer="1">
     <p class="q">Question?</p>
     <button class="opt">Option A</button>
     <button class="opt">Option B</button>   <!-- index 1 = correct -->
     <p class="feedback" data-correct="why right" data-wrong="nudge"></p>
   </div>
   Answers should be equal length so formatting gives nothing away. */
document.addEventListener('click', (e) => {
  const opt = e.target.closest('.quiz .opt');
  if (!opt) return;
  const quiz = opt.closest('.quiz');
  if (quiz.dataset.done) return;                 // one attempt locks feedback
  const opts = [...quiz.querySelectorAll('.opt')];
  const idx = opts.indexOf(opt);
  const answer = Number(quiz.dataset.answer);
  const fb = quiz.querySelector('.feedback');
  quiz.dataset.done = '1';
  opts[answer].classList.add('correct');
  if (idx === answer) {
    fb.textContent = '✓ ' + (fb.dataset.correct || 'Correct.');
  } else {
    opt.classList.add('wrong');
    fb.textContent = '✕ ' + (fb.dataset.wrong || 'Not quite — see the highlighted answer.');
  }
});
