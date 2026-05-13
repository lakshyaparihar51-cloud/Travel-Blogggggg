const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

const quotes = [
  {
    text: '"Our Himachal trip was perfectly planned with scenic stops and hidden cafes."',
    author: '- Priya, Delhi'
  },
  {
    text: '"The Goa itinerary balanced beach time, local food, and culture brilliantly."',
    author: '- Aditya, Mumbai'
  },
  {
    text: '"Jaipur felt easy and luxurious thanks to the travel flow and recommendations."',
    author: '- Rhea, Bengaluru'
  }
];

let current = 0;
const quoteEl = document.getElementById('quote');
const authorEl = document.getElementById('author');

function renderQuote() {
  quoteEl.textContent = quotes[current].text;
  authorEl.textContent = quotes[current].author;
}

document.getElementById('prevBtn').addEventListener('click', () => {
  current = (current - 1 + quotes.length) % quotes.length;
  renderQuote();
});

document.getElementById('nextBtn').addEventListener('click', () => {
  current = (current + 1) % quotes.length;
  renderQuote();
});

setInterval(() => {
  current = (current + 1) % quotes.length;
  renderQuote();
}, 5000);

const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  },
  { threshold: 0.2 }
);

revealEls.forEach((el) => revealObserver.observe(el));

const searchForm = document.getElementById('searchForm');
const planResult = document.getElementById('planResult');

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const type = document.getElementById('tripType').value;
  const month = document.getElementById('tripMonth').value;
  const budget = document.getElementById('tripBudget').value;

  if (!type || !month || !budget) {
    planResult.textContent = 'Please complete all fields to get your travel plan.';
    return;
  }

  const monthText = new Date(`${month}-01`).toLocaleString('en-IN', {
    month: 'long',
    year: 'numeric'
  });

  planResult.textContent = `Suggested: A ${budget.toLowerCase()} ${type.toLowerCase()} trip in ${monthText}, with curated stays, food spots, and local experiences.`;
});
