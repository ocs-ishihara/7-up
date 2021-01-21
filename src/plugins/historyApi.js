import {firebaseDb} from './firebase';

// インターンシップ
export const internApi = (id) => {
    const ref = firebaseDb.ref('report/intern/' + id);
    return new Promise((resolve) => {
      ref.orderByChild('today').once('value', (snapshot) => {
        const m = snapshot.val();
        if(m !== null) {
          let data = [];
          snapshot.forEach((childSnapshot) => {
            const m2 = childSnapshot.val();
            data.push({
                'company' : m2.company,
                'address' : m2.address,
                'practice_start' : m2.practice_start,
                'practice_end' : m2.practice_end,
                'practice' : m2.practice,
                'impressions' : m2.impressions,
                'day' : m2.day,
                'name' : m2.name,
                'key': childSnapshot.key,
            });
          });
          resolve(data);
        }
        else {
          resolve(null);
        };        
      });
  });
};

// 各書類申請書
export const applicationApi = (id) => {
    const ref = firebaseDb.ref('report/application/' + id);
    return new Promise((resolve) => {
      ref.orderByChild('today').once('value', (snapshot) => {
        const m = snapshot.val();
        if(m !== null) {
          let data = [];
          snapshot.forEach((childSnapshot) => {
            const m2 = childSnapshot.val();
            data.push({
                'company' : m2.company,
                'address' : m2.address,
                'practice_start' : m2.practice_start,
                'practice_end' : m2.practice_end,
                'activity' : m2.activity,
                'contents' : m2.contents,
                'submissions' : m2.submissions,
                'deadline' : m2.deadline,
                'day' : m2.day,
                'name' : m2.name,
                'key': childSnapshot.key,
            });
          });
          resolve(data);
        }
        else {
          resolve(null);
        };        
      });
  });
};

// 参加報告書
export const participationApi = (id) => {
    const ref = firebaseDb.ref('report/participation/' + id);
    return new Promise((resolve) => {
      ref.orderByChild('today').once('value', (snapshot) => {
        const m = snapshot.val();
        if(m !== null) {
          let data = [];
          snapshot.forEach((childSnapshot) => {
            const m2 = childSnapshot.val();
            data.push({
                'company' : m2.company,
                'address' : m2.address,
                'visit' : m2.visit,
                'detail' : m2.detail,
                'question' : m2.question,
                'will' : m2.will,
                'reason' : m2.reason,
                'impressions' : m2.impressions,
                'day' : m2.day,
                'name' : m2.name,
                'key': childSnapshot.key,
            });
          });
          resolve(data);
        }
        else {
          resolve(null);
        };        
      });
  });
};

// 受験報告書
export const examinationApi = (id) => {
    const ref = firebaseDb.ref('report/examination/' + id);
    return new Promise((resolve) => {
      ref.orderByChild('today').once('value', (snapshot) => {
        const m = snapshot.val();
        if(m !== null) {
          let data = [];
          snapshot.forEach((childSnapshot) => {
            const m2 = childSnapshot.val();
            data.push({
                'company' : m2.company,
                'address' : m2.address,
                'contents' : m2.contents,
                'examination_day' : m2.examination_day,
                'result_day' : m2.result_day,
                'written' : m2.written,
                'written_time' : m2.written_time,
                'subject' : m2.subject,
                'other' : m2.other,
                'other_time' : m2.other_time,
                'other_test' : m2.other_test,
                'theme' : m2.theme,
                'composition_time' : m2.composition_time,
                'word' : m2.word,
                'completeness' : m2.completeness,
                'company_people' : m2.company_people,
                'examination_people' : m2.examination_people,
                'interview_form' : m2.interview_form,
                'interview_time' : m2.interview_time,
                'question' : m2.question,
                'reflections' : m2.reflections,
                'impressions' : m2.impressions,
                "select": m2.select,
                'day' : m2.day,
                'name' : m2.name,
                'key': childSnapshot.key,
            });
          });
          resolve(data);
        }
        else {
          resolve(null);
        };        
      });
  });
};

// 自己評価シート
export const assessmentApi = (id) => {
    const ref = firebaseDb.ref('report/assessment/' + id);
    return new Promise((resolve) => {
      ref.orderByChild('today').once('value', (snapshot) => {
        const m = snapshot.val();
        if(m !== null) {
          let data = [];
          snapshot.forEach((childSnapshot) => {
            const m2 = childSnapshot.val();
            data.push({
                'company' : m2.company,
                'occupation' : m2.occupation,
                'activity' : m2.activity,
                'failure_day' : m2.failure_day,
                'item' : m2.item,
                'assessment' : m2.assessment,
                'remedy' : m2.remedy,
                'day' : m2.day,
                'name' : m2.name,
                'key': childSnapshot.key,
            });
          });
          resolve(data);
        }
        else {
          resolve(null);
        };        
      });
  });
};

// 内定報告書
export const offerApi = (id) => {
    const ref = firebaseDb.ref('report/offer/' + id);
    return new Promise((resolve) => {
      ref.orderByChild('today').once('value', (snapshot) => {
        const m = snapshot.val();
        if(m !== null) {
          let data = [];
          snapshot.forEach((childSnapshot) => {
            const m2 = childSnapshot.val();
            data.push({
                'company' : m2.company,
                'president' : m2.president,
                'position' : m2.position,
                'postal_code' : m2.postal_code,
                'address' : m2.address,
                'phone_number' : m2.phone_number,
                'fax_number' : m2.fax_number,
                'business' : m2.business,
                'section' : m2.section,
                'capital' : m2.capital,
                'sales' : m2.sales,
                'employees' : m2.employees,
                'industry' : m2.industry,
                'activity' : m2.activity,
                'details' : m2.details,
                'location' : m2.location,
                'branch_name' : m2.branch_name,
                'work_place' : m2.work_place,
                'educational' : m2.educational,
                'occupation' : m2.occupation,
                'job_description' : m2.job_description,
                'day' : m2.day,
                'name' : m2.name,
                'key': childSnapshot.key,
            });
          });
          resolve(data);
        }
        else {
          resolve(null);
        };        
      });
  });
};

// 内定者研修参加報告書
export const trainingApi = (id) => {
    const ref = firebaseDb.ref('report/training/' + id);
    return new Promise((resolve) => {
      ref.orderByChild('today').once('value', (snapshot) => {
        const m = snapshot.val();
        if(m !== null) {
          let data = [];
          snapshot.forEach((childSnapshot) => {
            const m2 = childSnapshot.val();
            data.push({
                'company' : m2.company,
                'location' : m2.location,
                'facility' : m2.facility,
                'address' : m2.address,
                'training_start' : m2.training_start,
                'training_end' : m2.training_end,
                'time_start' : m2.time_start,
                'time_end' : m2.time_end,
                'detail' : m2.detail,
                'impressions' : m2.impressions,
                'day' : m2.day,
                'name' : m2.name,
                'key': childSnapshot.key,
            });
          });
          resolve(data);
        }
        else {
          resolve(null);
        };        
      });
  });
};
