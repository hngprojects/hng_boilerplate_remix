import GoogleDrive from "/images/317713_drive_google_google drive_icon 1.svg";
import Box from "/images/2993696_brand_brands_dropbox_logo_logos_icon 1.svg";
import Jira from "/images/4373216_jira_logo_logos_icon 1.svg";
import Atlassian from "/images/4373272_atlassian_logo_logos_icon 1.svg";
import Slack from "/images/5296507_chat_slack_slack logo_icon 1.svg";
import Teams from "/images/6296667_microsoft_office_office 365_teams_icon 1.svg";
import OneDrive from "/images/6296668_microsoft_office_office365_onedrive_icon 1.svg";
import Notion from "/images/9034580_notion_logo_icon 1.svg";
import Trello from "/images/Vector.svg";

import { IntegrationsPlatforms } from "~/types";

const mockPlatforms: IntegrationsPlatforms[] = [
  {
    id: 1,
    heading: "Drive",
    logo: GoogleDrive,
    description:
      "Store, share, and collaborate on documents and files securely",
    isActive: false,
  },
  {
    id: 2,
    heading: "Dropbox",
    logo: Box,
    description: "Securely store, sync, and share all your files and documents",
    isActive: true,
  },
  {
    id: 3,
    heading: "Notion",
    logo: Notion,
    description:
      "Organize information, collaborate on projects, and create flexible workflows",
    isActive: false,
  },
  {
    id: 4,
    heading: "OneDrive",
    logo: OneDrive,
    description:
      "Access, share, and manage your files seamlessly across devices",
    isActive: true,
  },
  {
    id: 5,
    heading: "Atlassian",
    logo: Atlassian,
    description: "Streamline project planning and manage workflows effectively",
    isActive: true,
  },
  {
    id: 6,
    heading: "MicrosoftTeams",
    logo: Teams,
    description:
      "Enhance team communication and project management with Microsoft Teams",
    isActive: true,
  },
  {
    id: 7,
    heading: "Trello",
    logo: Trello,
    description:
      "Organize your projects, track tasks, and collaborate in a visual way",
    isActive: true,
  },
  {
    id: 8,
    heading: "Jira",
    logo: Jira,
    description:
      "Track tasks, manage projects, and streamline team collaboration",
    isActive: true,
  },
  {
    id: 9,
    heading: "Slack",
    logo: Slack,
    description:
      "Transform team communication, enhance collaboration, and streamline workflow efficiency",
    isActive: true,
  },
];

export { mockPlatforms };
