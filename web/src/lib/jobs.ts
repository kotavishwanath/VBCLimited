export type Job = {
  slug: string;
  title: string;
  location: string;
  type: string;
  salary: string;
  vacancies: number;
  datePosted: string;
  closingDate: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
};

// Add roles here to list them on /careers. Example:
// {
//   slug: "senior-qa-engineer",
//   title: "Senior QA Engineer",
//   location: "Bedford, Bedfordshire",
//   type: "Permanent",
//   salary: "£40,000 – £50,000 per annum",
//   vacancies: 1,
//   datePosted: "2026-10-01",
//   closingDate: "2026-12-31",
//   summary: "One or two sentences about the role.",
//   responsibilities: ["…"],
//   requirements: ["…"],
// },
export const jobs: Job[] = [];

export function getJob(slug: string) {
  return jobs.find((job) => job.slug === slug);
}

export function isOpen(job: Job) {
  return new Date(`${job.closingDate}T23:59:59Z`).getTime() >= Date.now();
}

export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}
