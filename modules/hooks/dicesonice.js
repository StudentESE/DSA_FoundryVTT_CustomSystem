export default function() {

    Hooks.once('diceSoNiceReady', (dice3d) => {
        dice3d.addColorset({
            name: 'mu',
            description: 'cDSA.dies',
            category: 'cDSA.dies',
            foreground: '#FFFFFF',
            background: '#b3241a',
            edge: '#b3241a',
            outline: '#b3241a',
            texture: 'none'
        });
        dice3d.addColorset({
            name: 'kl',
            description: 'cDSA.dies',
            category: 'cDSA.dies',
            foreground: '#FFFFFF',
            background: '#8259a3',
            edge: '#8259a3',
            outline: '#FFFFFF',
            texture: 'none'
        });
        dice3d.addColorset({
            name: 'in',
            description: 'cDSA.dies',
            category: 'cDSA.dies',
            foreground: '#FFFFFF',
            background: '#388834',
            edge: '#388834',
            outline: '#FFFFFF',
            texture: 'none'
        });
        dice3d.addColorset({
            name: 'ch',
            description: 'cDSA.dies',
            category: 'cDSA.dies',
            foreground: '#FFFFFF',
            background: '#0d0d0d',
            edge: '#0d0d0d',
            outline: '#FFFFFF',
            texture: 'none'
        });
        dice3d.addColorset({
            name: 'ff',
            description: 'cDSA.dies',
            category: 'cDSA.dies',
            foreground: '#000000',
            background: '#d5b467',
            edge: '#d5b467',
            outline: '#FFFFFF',
            texture: 'none'
        });
        dice3d.addColorset({
            name: 'ge',
            description: 'cDSA.dies',
            category: 'cDSA.dies',
            foreground: '#000000',
            background: '#688ec4',
            edge: '#688ec4',
            outline: '#FFFFFF',
            texture: 'none'
        });
        dice3d.addColorset({
            name: 'ko',
            description: 'cDSA.dies',
            category: 'cDSA.dies',
            foreground: '#000000',
            background: '#a3a3a3',
            edge: '#a3a3a3',
            outline: '#FFFFFF',
            texture: 'none'
        });
        /*dice3d.addColorset({
            name: 'ko',
            description: 'cDSA.dies',
            category: 'cDSA.dies',
            foreground: '#000000',
            background: '#fbf5ea',
            edge: '#fbf5ea',
            outline: '#FFFFFF',
            texture: 'none'
        });*/
        dice3d.addColorset({
            name: 'kk',
            description: 'cDSA.dies',
            category: 'cDSA.dies',
            foreground: '#000000',
            background: '#d6a878',
            edge: '#d6a878',
            outline: '#FFFFFF',
            texture: 'none'
        });

        dice3d.addColorset({
            name: 'attack',
            description: 'cDSA.dies',
            category: 'cDSA.dies',
            foreground: '#FFFFFF',
            background: '#b3241a',
            edge: '#b3241a',
            outline: '#b3241a',
            texture: 'none'
        });

        dice3d.addColorset({
            name: 'dodge',
            description: 'cDSA.dies',
            category: 'cDSA.dies',
            foreground: '#FFFFFF',
            background: '#388834',
            edge: '#388834',
            outline: '#FFFFFF',
            texture: 'none'
        });
        dice3d.addColorset({
            name: 'parry',
            description: 'cDSA.dies',
            category: 'cDSA.dies',
            foreground: '#FFFFFF',
            background: '#388834',
            edge: '#388834',
            outline: '#FFFFFF',
            texture: 'none'
        });
    });



}