import '@testing-library/jest-dom/extend-expect'
import { JSDOM } from 'jsdom'
import fs from 'fs'
import path from 'path'
import { TESTING_MATCHES } from './turns.constants';

const html = fs.readFileSync(path.resolve(__dirname, '../src/index.html'), 'utf8');
const jsScript = fs.readFileSync(path.resolve(__dirname, '../src/index.js'), 'utf8');

let dom
let container

describe('index.html', () => {
    beforeEach(() => {
        dom = new JSDOM(html, { runScripts: 'dangerously'})
        container = dom.window.document.body
        const scriptEl = dom.window.document.createElement("script");
        scriptEl.textContent = jsScript;
        dom.window.document.body.appendChild(scriptEl);
    });

    it('board is visible on load', function() {
        const tiles = container.getElementsByClassName('tile');

        expect(container.querySelector('#table-section')).toBeTruthy();
        expect(tiles.length).toEqual(16);
        for(let element of tiles) {
            expect(element.innerHTML).toEqual("");
        }
    });

    it('welcome message visible on load', function() {
        expect(container.querySelector('#status').innerHTML).toEqual('Game in progress...');
    });

    it('restart button section hidden on load', function() {
        expect(container.querySelector('#restart-btn').style.display).toEqual('none');
    });

    it('player 1 is active on load', function() {
        expect(container.querySelector('#player1').classList).toContain('active');
    });

    it('player 2 is inactive on load', function() {
        expect(container.querySelector('#player2').classList).not.toContain('active');
    });

    it('using correct symbol for player 1', function() {
        const firstTile = container.getElementsByClassName("tile")[0];
        firstTile.click()
        expect(firstTile.innerHTML.toLowerCase()).toEqual('x');
    });

    it('using correct symbol for player 2', function() {
        const firstTile = container.getElementsByClassName("tile")[0];
        const secondTile = container.getElementsByClassName("tile")[1];
        firstTile.click()
        secondTile.click()
        expect(secondTile.innerHTML.toLowerCase()).toEqual('o');

    });

    it('alternating player active label indicator', function() {
        const firstTile = container.getElementsByClassName("tile")[0];
        const secondTile = container.getElementsByClassName("tile")[1];

        // on load player 1 should be active
        expect(container.querySelector('#player1').classList).toContain('active');
        expect(container.querySelector('#player2').classList).not.toContain('active');

        firstTile.click()

        // changed to player 2 active
        expect(container.querySelector('#player1').classList).not.toContain('active');
        expect(container.querySelector('#player2').classList).toContain('active');

        secondTile.click()

        // changed to player 1 active
        expect(container.querySelector('#player1').classList).toContain('active');
        expect(container.querySelector('#player2').classList).not.toContain('active');
    });

    it('check correct status bar message - Game in progress', function() {
        const match = TESTING_MATCHES[0];

        match['turns'].forEach(turn => {
            const playerXTile = container.getElementsByClassName("tile")[turn[0].tile];
            const playerOTile = container.getElementsByClassName("tile")[turn[1].tile];
            playerXTile.click();
            expect(playerXTile.innerHTML.toLowerCase()).toEqual(turn[0].value);
            playerOTile.click();
            expect(playerOTile.innerHTML.toLowerCase()).toEqual(turn[1].value);
        })
        expect(container.querySelector('#status').innerHTML).toEqual('Game in progress...');

    })

    it('check correct status bar message - Player 1 won', function() {
        const match = TESTING_MATCHES[1];

        match['turns'].forEach(turn => {
            const playerXTile = container.getElementsByClassName("tile")[turn[0].tile];
            const playerOTile = container.getElementsByClassName("tile")[turn[1].tile];
            playerXTile.click();
            expect(playerXTile.innerHTML.toLowerCase()).toEqual(turn[0].value);
            playerOTile.click();
            expect(playerOTile.innerHTML.toLowerCase()).toEqual(turn[1].value);
        })
        expect(container.querySelector('#status').innerHTML).toEqual('Player 1 won!');

    })

    it('check correct status bar message - Player 2 won', function() {
        const match = TESTING_MATCHES[2];

        match['turns'].forEach(turn => {
            const playerXTile = container.getElementsByClassName("tile")[turn[0].tile];
            const playerOTile = container.getElementsByClassName("tile")[turn[1].tile];
            playerXTile.click();
            expect(playerXTile.innerHTML.toLowerCase()).toEqual(turn[0].value);
            playerOTile.click();
            expect(playerOTile.innerHTML.toLowerCase()).toEqual(turn[1].value);
        })
        expect(container.querySelector('#status').innerHTML).toEqual('Player 2 won!');

    })

    it('check correct status bar message - Draw', function() {
        const match = TESTING_MATCHES[3];

        match['turns'].forEach(turn => {
            const playerXTile = container.getElementsByClassName("tile")[turn[0].tile];
            const playerOTile = container.getElementsByClassName("tile")[turn[1].tile];
            playerXTile.click();
            expect(playerXTile.innerHTML.toLowerCase()).toEqual(turn[0].value);
            playerOTile.click();
            expect(playerOTile.innerHTML.toLowerCase()).toEqual(turn[1].value);
        })
        expect(container.querySelector('#status').innerHTML).toEqual('Draw!');

    })

    it('check restart game button not displayed', function() {
        const match = TESTING_MATCHES[0];

        match['turns'].forEach(turn => {
            const playerXTile = container.getElementsByClassName("tile")[turn[0].tile];
            const playerOTile = container.getElementsByClassName("tile")[turn[1].tile];
            playerXTile.click();
            expect(playerXTile.innerHTML.toLowerCase()).toEqual(turn[0].value);
            playerOTile.click();
            expect(playerOTile.innerHTML.toLowerCase()).toEqual(turn[1].value);
        })
        expect(container.querySelector('#restart-btn').style.display).toEqual('none');

    })

    it('check restart game button displayed', function() {
        const match = TESTING_MATCHES[2];

        match['turns'].forEach(turn => {
            const playerXTile = container.getElementsByClassName("tile")[turn[0].tile];
            const playerOTile = container.getElementsByClassName("tile")[turn[1].tile];
            playerXTile.click();
            expect(playerXTile.innerHTML.toLowerCase()).toEqual(turn[0].value);
            playerOTile.click();
            expect(playerOTile.innerHTML.toLowerCase()).toEqual(turn[1].value);
        })
        expect(container.querySelector('#restart-btn').style.display).toBeTruthy();

    })

    it('check restart game button logic starts game over', function() {
        const match = TESTING_MATCHES[2];

        match['turns'].forEach(turn => {
            const playerXTile = container.getElementsByClassName("tile")[turn[0].tile];
            const playerOTile = container.getElementsByClassName("tile")[turn[1].tile];
            playerXTile.click();
            expect(playerXTile.innerHTML.toLowerCase()).toEqual(turn[0].value);
            playerOTile.click();
            expect(playerOTile.innerHTML.toLowerCase()).toEqual(turn[1].value);
        })
        container.querySelector('#restart-btn').click();
        const tiles = container.getElementsByClassName("tile");
        expect(tiles.length).toEqual(16);
        for(let element of tiles) {
            expect(element.innerHTML).toEqual("");
        }
        expect(container.querySelector('#status').innerHTML).toEqual('Game in progress...');
    })
})
