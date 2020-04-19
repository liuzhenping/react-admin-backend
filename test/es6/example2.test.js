// sound-player-consumer.test.js
import SoundPlayerConsumer from './sound-player-consumer.';
import SoundPlayer from './sound-player';

const mockPlaySoundFile = jest.fn();
jest.mock('./sound-player', () => {
    return jest.fn().mockImplementation(() => {
        return {playSoundFile: mockPlaySoundFile};
    });
});

describe('test for es6 class mock ', () => {

    beforeEach(() => {
        SoundPlayer.mockClear();
        mockPlaySoundFile.mockClear();
    });


    it('We can check if the consumer called a method on the class instance', () => {
        const soundPlayerConsumer = new SoundPlayerConsumer();
        const coolSoundFileName = 'song.mp3';
        soundPlayerConsumer.playSomethingCool();
        expect(mockPlaySoundFile.mock.calls[0][0]).toEqual(coolSoundFileName);
    });

});