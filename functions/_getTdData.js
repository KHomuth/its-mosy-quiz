import * as RootNavigation from '../components/RootNavigation';

export default async function getTdData() {
    try {
      const response = await fetch('http://192.168.2.103:9980/api/v1.0/question_and_phase'); //IP needs to be replaced with own local Server-URl!
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      
      const data = await response.json();

      if (data.phase == 1) {
        RootNavigation.navigate('Quiz', {
          index: data.question-1,
          timerCreation: data.creation_timestamp,
          timerCount: data.ms_to_phase_end
        });
      } else if (data.phase == 2) {
        RootNavigation.navigate('Infos', {
          index: data.question-1,
          timerCreation: data.creation_timestamp,
          timerCount: data.ms_to_phase_end
        });
      }
    }
    catch(error) {
      console.error(`Could not get Data: ${error}`);
    }
};    