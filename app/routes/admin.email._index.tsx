import { Link } from "@remix-run/react";
import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

interface TemplateOptionProperties {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

const EmailManagementDashboard: React.FC = () => {
  return (
    <div className="flex">
      <div className="w-64"></div> {/* Replace with Sidebar Nav */}
      <div className="h-screen flex-1 bg-white p-8">
        <Tabs defaultValue="new-template" className="w-full">
          <TabsList className="grid h-[2.8125rem] max-w-72 grid-cols-2 divide-x-2 border bg-white p-0 text-sm text-[#8e8e83]">
            <TabsTrigger
              className="data-[state=active]:h-full data-[state=active]:rounded-none data-[state=active]:bg-[#F6F7F9] data-[state=active]:font-bold data-[state=active]:text-[#F97316]"
              value="new-template"
            >
              New Template
            </TabsTrigger>
            <TabsTrigger
              className="data-[state=active]:h-full data-[state=active]:rounded-none data-[state=active]:bg-[#F6F7F9] data-[state=active]:font-bold data-[state=active]:text-[#F97316]"
              value="manage-templates"
            >
              Manage Templates
            </TabsTrigger>
          </TabsList>
          <TabsContent value="new-template">
            <Card className="max-w-3xl border-none">
              <CardHeader className="px-0">
                <CardTitle className="text-2xl text-[#0A0A0A]">
                  Create a New Template
                </CardTitle>
                <CardDescription className="text-base text-[#0a0a0a] text-opacity-60">
                  Choose an option below to begin crafting your email design.
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-3 grid max-w-[39.25rem] gap-4 px-0 md:grid-cols-2">
                <TemplateOption
                  title="Generate with HTML"
                  description="Create an email template by pasting your custom-coded template"
                  icon={<CodeIcon />}
                  href="/admin/email/generate-html"
                />
                <TemplateOption
                  title="Edit In-built Template"
                  description="Create an email template by choosing from our custom template library"
                  icon={<FileIcon />}
                  href="/admin/email/edit-template"
                />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="manage-templates">
            {/* Content for managing templates */}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

const TemplateOption: React.FC<TemplateOptionProperties> = ({
  title,
  description,
  icon,
  href,
}) => {
  return (
    <Link to={href} className="block focus:outline-none">
      <Card className="transition-all hover:border hover:border-[#F97316] hover:bg-[#f6f7f988] focus:border focus:border-[#F97316]">
        <CardContent className="flex items-center gap-5 px-5 py-4">
          {icon}
          <div>
            <p className="flex flex-col gap-2 text-sm text-[#0A0A0A]">
              <span className="font-semibold">{title}</span>
              <span> {description}</span>
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

const CodeIcon: React.FC = () => {
  return <img src="/code-icon.svg" alt="code icon" className="h-6 w-6" />;
};

const FileIcon: React.FC = () => {
  return <img src="/edit-icon.svg" alt="edit icon" className="h-6 w-6" />;
};

export default EmailManagementDashboard;
