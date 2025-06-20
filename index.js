 const counters = document.getElementsByClassName('counter');

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-bs-target');
      const count = +counter.innerText;
      const increment = target / 200; // speed of counting

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 10); // control speed
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });
