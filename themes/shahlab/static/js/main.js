// O'Reilly-Shah Lab - Main JavaScript
// Mobile menu toggle, publication filters, scroll effects

(function () {
  'use strict';

  // Mobile menu toggle
  var menuToggle = document.querySelector('.menu-toggle');
  var siteNav = document.querySelector('.site-nav');

  if (menuToggle && siteNav) {
    menuToggle.addEventListener('click', function () {
      var isOpen = siteNav.classList.toggle('open');
      menuToggle.classList.toggle('open', isOpen);
      menuToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when clicking a nav link
    var navLinks = siteNav.querySelectorAll('a');
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        siteNav.classList.remove('open');
        menuToggle.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close menu on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && siteNav.classList.contains('open')) {
        siteNav.classList.remove('open');
        menuToggle.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.focus();
      }
    });
  }

  // Publication filters: topic + year, combinable, URL-shareable.
  var pubSection = document.querySelector('.publications');
  if (pubSection && pubSection.querySelector('.pub-card')) {
    var topicGroup = pubSection.querySelector('[data-filter-group="topic"]');
    var yearGroup = pubSection.querySelector('[data-filter-group="year"]');
    var clearBtn = pubSection.querySelector('.filter-clear');
    var emptyMsg = pubSection.querySelector('.pub-empty');
    var cards = pubSection.querySelectorAll('.pub-card');
    var yearGroups = pubSection.querySelectorAll('.pub-year-group');

    var state = { topic: 'all', year: 'all' };

    function setActive(group, attr, value) {
      if (!group) return;
      group.querySelectorAll('.filter-btn').forEach(function (b) {
        b.classList.toggle('active', b.getAttribute(attr) === value);
      });
    }

    function syncURL() {
      var params = new URLSearchParams(window.location.search);
      if (state.topic && state.topic !== 'all') { params.set('topic', state.topic); } else { params.delete('topic'); }
      if (state.year && state.year !== 'all') { params.set('year', state.year); } else { params.delete('year'); }
      var qs = params.toString();
      var url = window.location.pathname + (qs ? '?' + qs : '') + window.location.hash;
      window.history.replaceState(null, '', url);
    }

    function apply() {
      setActive(topicGroup, 'data-topic', state.topic);
      setActive(yearGroup, 'data-year-filter', state.year);

      var anyVisible = false;
      cards.forEach(function (card) {
        var topics = (card.getAttribute('data-topics') || '').split(/\s+/);
        var topicMatch = state.topic === 'all' || topics.indexOf(state.topic) !== -1;
        var yearMatch = state.year === 'all' || card.getAttribute('data-year') === state.year;
        var show = topicMatch && yearMatch;
        card.hidden = !show;
        if (show) { anyVisible = true; }
      });

      // Hide year-group headers that have no visible cards.
      yearGroups.forEach(function (group) {
        var visible = group.querySelectorAll('.pub-card:not([hidden])').length;
        group.hidden = visible === 0;
      });

      if (emptyMsg) { emptyMsg.hidden = anyVisible; }
      if (clearBtn) { clearBtn.hidden = (state.topic === 'all' && state.year === 'all'); }
      syncURL();
    }

    function readURL() {
      var params = new URLSearchParams(window.location.search);
      var topic = params.get('topic');
      var year = params.get('year');
      if (topic && topicGroup && topicGroup.querySelector('[data-topic="' + CSS.escape(topic) + '"]')) {
        state.topic = topic;
      }
      if (year && yearGroup && yearGroup.querySelector('[data-year-filter="' + CSS.escape(year) + '"]')) {
        state.year = year;
      }
    }

    // Delegate clicks: filter buttons and in-card tag chips both carry data-topic / data-year-filter.
    pubSection.addEventListener('click', function (e) {
      var topicEl = e.target.closest('[data-topic]');
      if (topicEl && pubSection.contains(topicEl)) {
        state.topic = topicEl.getAttribute('data-topic');
        apply();
        return;
      }
      var yearEl = e.target.closest('[data-year-filter]');
      if (yearEl && pubSection.contains(yearEl)) {
        state.year = yearEl.getAttribute('data-year-filter');
        apply();
        return;
      }
      if (e.target.closest('.filter-clear')) {
        state.topic = 'all';
        state.year = 'all';
        apply();
      }
    });

    readURL();
    apply();
  }
})();
