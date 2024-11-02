export function controlSubscriptionOptions() {
  const subscriptionOptions = document.querySelectorAll('.js_subscrip-option');
  const continueButton = document.querySelector('.js_subscrip-continue');

  continueButton.addEventListener('click', () => {
    const selectedOption = [...subscriptionOptions].find(option => option.checked);

    if (selectedOption) {
      const url = selectedOption.value;
      window.location.href = url;
    } else {
      console.error('No subscription option selected.');
    }
  });
}
