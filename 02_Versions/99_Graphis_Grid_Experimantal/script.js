/*-----COUNTER


----*/



$(document).ready(function () {
    // Aktiviert das Ziehen für alle Elemente mit der Klasse 'draggable'
    $(".draggable").draggable({
        containment: ".postergraphis99" // Beschränkt das Ziehen auf den Container
    });

    // Zähl-Animation für die Zahl "99"
    $('.count').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now)); // Aktualisiert den Text während der Animation
            }
        });
    });

    // Initialisiere die Zahl "99" außerhalb des Bildschirms
    const number99 = $('.number99');
    const currentPosition = number99.position(); // Aktuelle Position erhalten

    // Setze die Startposition außerhalb des Bildschirms
    number99.css('bottom', '-100px');

    // Animation von unten nach oben für die Zahl "99"
    setTimeout(function() {
        // Füge die Klasse 'move' hinzu, um die CSS-Animation zu starten
        number99.addClass('move'); // Diese Klasse sollte in CSS definiert sein

        // Kurze Verzögerung, um den Übergang zu triggern
        setTimeout(function() {
            number99.css('bottom', currentPosition + 'px'); // Bewege zur aktuellen Position
        }, 10); // Trigger-Delay
    }, 500); // Startverzögerung von 500ms
});
