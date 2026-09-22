"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Search,
  Filter,
  ArrowUpDown,
  CheckCircle2,
  Clock,
  XCircle,
  MoreHorizontal,
  ChevronDown,
} from "lucide-react";

interface Deal {
  id: string;
  company: string;
  contact: string;
  email: string;
  value: number;
  stage: string;
  status: "won" | "pending" | "lost";
  closeDate: string;
  rep: string;
}

const deals: Deal[] = [
  { id: "1", company: "Orbital Dynamics", contact: "Contact 1", email: "contact1@example.com", value: 125000, stage: "Negotiation", status: "won", closeDate: "2024-01-15", rep: "Rashmitha J" },
  { id: "2", company: "Nimbus Startups", contact: "Contact 12", email: "member2@example.com", value: 89500, stage: "Proposal", status: "pending", closeDate: "2024-01-22", rep: "Team Member 2" },
  { id: "3", company: "Meridian Capital Partners", contact: "Contact 11", email: "member3@example.com", value: 245000, stage: "Qualified", status: "pending", closeDate: "2024-02-01", rep: "Team Member 3" },
  { id: "4", company: "Pulsegrid Solutions", contact: "Contact 10", email: "member4@example.com", value: 67800, stage: "Lead", status: "lost", closeDate: "2024-01-10", rep: "Team Member 4" },
  { id: "5", company: "Cirrus Cloud Ltd", contact: "Contact 2", email: "contact2@example.com", value: 178000, stage: "Negotiation", status: "won", closeDate: "2024-01-18", rep: "Rashmitha J" },
  { id: "6", company: "Vertex Labs", contact: "Contact 6", email: "member5@example.com", value: 156000, stage: "Proposal", status: "pending", closeDate: "2024-01-28", rep: "Team Member 5" },
  { id: "7", company: "Catalyst Systems", contact: "Contact 4", email: "member2@example.com", value: 203000, stage: "Qualified", status: "pending", closeDate: "2024-02-05", rep: "Team Member 2" },
  { id: "8", company: "Zenith Analytics", contact: "Contact 3", email: "member3@example.com", value: 94500, stage: "Lead", status: "pending", closeDate: "2024-02-10", rep: "Team Member 3" },
];

const statusConfig = {
  won: { icon: CheckCircle2, color: "text-success", bg: "bg-success/10", label: "Won" },
  pending: { icon: Clock, color: "text-warning", bg: "bg-warning/10", label: "Pending" },
  lost: { icon: XCircle, color: "text-destructive", bg: "bg-destructive/10", label: "Lost" },
};

export function DealsSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const filteredDeals = deals.filter((deal) => {
    const matchesSearch =
      deal.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      deal.contact.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilter === "all" || deal.status === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <p className="text-sm text-muted-foreground">View and manage all your deals in one place</p>
      </div>

      {/* Filters and search */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search deals..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-64 h-9 pl-9 pr-4 rounded-lg bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-accent transition-all duration-200"
            />
          </div>
          <div className="flex items-center gap-2">
            {["all", "won", "pending", "lost"].map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={cn(
                  "px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200",
                  selectedFilter === filter
                    ? "bg-accent text-accent-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                )}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>
        <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
          <Filter className="w-4 h-4" />
          More filters
          <ChevronDown className="w-3 h-3" />
        </button>
      </div>

      {/* Table */}
      <div className="bg-card border border-border rounded-xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-secondary/50">
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  <button className="flex items-center gap-1 hover:text-foreground transition-colors">
                    Company
                    <ArrowUpDown className="w-3 h-3" />
                  </button>
                </th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Contact</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  <button className="flex items-center gap-1 hover:text-foreground transition-colors">
                    Value
                    <ArrowUpDown className="w-3 h-3" />
                  </button>
                </th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Stage</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Status</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Rep</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Close Date</th>
                <th className="w-12"></th>
              </tr>
            </thead>
            <tbody>
              {filteredDeals.map((deal, index) => {
                const status = statusConfig[deal.status];
                const StatusIcon = status.icon;

                return (
                  <tr
                    key={deal.id}
                    className="border-b border-border last:border-0 hover:bg-secondary/30 transition-colors duration-150 cursor-pointer animate-in fade-in slide-in-from-left-2"
                    style={{ animationDelay: `${index * 50}ms`, animationFillMode: "both" }}
                  >
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-md bg-secondary flex items-center justify-center text-xs font-semibold text-muted-foreground">
                          {deal.company.charAt(0)}
                        </div>
                        <span className="text-sm font-medium text-foreground">{deal.company}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div>
                        <p className="text-sm text-foreground">{deal.contact}</p>
                        <p className="text-xs text-muted-foreground">{deal.email}</p>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-sm font-semibold text-foreground">
                        ${deal.value.toLocaleString()}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="px-2 py-1 rounded-md bg-secondary text-xs font-medium text-foreground">
                        {deal.stage}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div className={cn("inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium", status.bg, status.color)}>
                        <StatusIcon className="w-3 h-3" />
                        {status.label}
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-sm text-muted-foreground">{deal.rep}</span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-sm text-muted-foreground">{deal.closeDate}</span>
                    </td>
                    <td className="py-4 px-4">
                      <button className="w-8 h-8 flex items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-200">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between px-4 py-3 border-t border-border bg-secondary/30">
          <span className="text-sm text-muted-foreground">
            Showing {filteredDeals.length} of {deals.length} deals
          </span>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors duration-200">
              Previous
            </button>
            <button className="px-3 py-1.5 rounded-lg text-sm bg-accent text-accent-foreground font-medium">
              1
            </button>
            <button className="px-3 py-1.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors duration-200">
              2
            </button>
            <button className="px-3 py-1.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors duration-200">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
