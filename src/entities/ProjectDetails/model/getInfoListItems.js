import { format } from 'date-fns';

export const getInfoListItems = (project) => {
  return [
    {
      title: 'Link',
      text: 'Visit the website',
      link: project.link
    },
    {
      title: 'Client',
      text: project.client
    },
    {
      title: 'Scope of work',
      text: project.scope
    },
    {
      title: 'Date',
      text: format(project.date, 'yyyy')
    }
  ];
};
