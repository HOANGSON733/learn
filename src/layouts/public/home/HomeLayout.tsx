import {
    Users,
    FileText,
    DollarSign,
    TrendingUp,
  } from "lucide-react";
  
  export default function HomeLayout() {
    return (
      <div className="space-y-6 w-full">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold">
            Dashboard
          </h1>
  
          <p className="text-muted-foreground">
            Welcome back! Here's an overview of your system.
          </p>
        </div>
  
        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl border bg-card p-6">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                Total Users
              </span>
  
              <Users className="size-5" />
            </div>
  
            <h2 className="mt-4 text-3xl font-bold">
              1,245
            </h2>
          </div>
  
          <div className="rounded-xl border bg-card p-6">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                Documents
              </span>
  
              <FileText className="size-5" />
            </div>
  
            <h2 className="mt-4 text-3xl font-bold">
              342
            </h2>
          </div>
  
          <div className="rounded-xl border bg-card p-6">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                Revenue
              </span>
  
              <DollarSign className="size-5" />
            </div>
  
            <h2 className="mt-4 text-3xl font-bold">
              $24,560
            </h2>
          </div>
  
          <div className="rounded-xl border bg-card p-6">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                Growth
              </span>
  
              <TrendingUp className="size-5" />
            </div>
  
            <h2 className="mt-4 text-3xl font-bold">
              +18%
            </h2>
          </div>
        </div>
  
        {/* Content */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Activity */}
          <div className="lg:col-span-2 rounded-xl border bg-card p-6">
            <h3 className="mb-4 text-lg font-semibold">
              Recent Activities
            </h3>
  
            <div className="space-y-4">
              <div className="rounded-lg border p-4">
                User John created a new document
              </div>
  
              <div className="rounded-lg border p-4">
                Admin updated system settings
              </div>
  
              <div className="rounded-lg border p-4">
                New account registered
              </div>
            </div>
          </div>
  
          {/* Quick Actions */}
          <div className="rounded-xl border bg-card p-6">
            <h3 className="mb-4 text-lg font-semibold">
              Quick Actions
            </h3>
  
            <div className="space-y-3">
              <button className="w-full rounded-lg bg-primary px-4 py-2 text-primary-foreground">
                Create User
              </button>
  
              <button className="w-full rounded-lg border px-4 py-2">
                Upload File
              </button>
  
              <button className="w-full rounded-lg border px-4 py-2">
                View Reports
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }