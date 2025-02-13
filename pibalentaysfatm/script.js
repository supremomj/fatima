document.getElementById('toggleButton').addEventListener('click', function() {
    var envelope = document.getElementById('envelope');
    if (envelope.classList.contains('closed')) {
        envelope.classList.remove('closed');
        envelope.classList.add('open');
    } else {
        envelope.classList.remove('open');
        envelope.classList.add('closed');
    }
});