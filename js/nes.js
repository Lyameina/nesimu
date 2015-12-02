var nes;
$(function() {
    nes = new JSNES({
        'ui': $('#emulator').JSNESUI({
            "Working": [
                ['Super Mario Bros. 1', 'roms/smb1.nes'],
                ['Super Mario Bros. 3', 'roms/smb3.nes'],
                ['Megaman 1', 'roms/megaman1.nes'],
                ['Megaman 2', 'roms/megaman2.nes'],
                ['Megaman 6', 'roms/Mega Man 6 (USA).nes'],
                ['owlia','roms/owlia_demo.nes']
            ]
        })
    });
});