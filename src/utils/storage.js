export const saveSubmission = (submission) => {
    const submissions = JSON.parse(localStorage.getItem('submissions')) || [];
    submissions.push(submission);
    localStorage.setItem('submissions', JSON.stringify(submissions));
  };
  
  export const getSubmissions = () => {
    return JSON.parse(localStorage.getItem('submissions')) || [];
  };
  