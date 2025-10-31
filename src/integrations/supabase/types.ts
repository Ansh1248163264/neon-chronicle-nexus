export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      blog_posts: {
        Row: {
          author: string
          author_avatar: string | null
          category: string
          content: string
          created_at: string | null
          excerpt: string
          id: string
          image_url: string | null
          published_at: string | null
          read_time: number | null
          subtitle: string | null
          title: string
          updated_at: string | null
        }
        Insert: {
          author: string
          author_avatar?: string | null
          category: string
          content: string
          created_at?: string | null
          excerpt: string
          id?: string
          image_url?: string | null
          published_at?: string | null
          read_time?: number | null
          subtitle?: string | null
          title: string
          updated_at?: string | null
        }
        Update: {
          author?: string
          author_avatar?: string | null
          category?: string
          content?: string
          created_at?: string | null
          excerpt?: string
          id?: string
          image_url?: string | null
          published_at?: string | null
          read_time?: number | null
          subtitle?: string | null
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      contact_messages: {
        Row: {
          created_at: string | null
          email: string
          id: string
          message: string
          name: string
          status: string | null
          subject: string
        }
        Insert: {
          created_at?: string | null
          email: string
          id?: string
          message: string
          name: string
          status?: string | null
          subject: string
        }
        Update: {
          created_at?: string | null
          email?: string
          id?: string
          message?: string
          name?: string
          status?: string | null
          subject?: string
        }
        Relationships: []
      }
      giveaways: {
        Row: {
          created_at: string | null
          description: string
          ends_at: string
          entries_count: number | null
          entry_method: string
          id: string
          image_url: string | null
          reward: string
          status: string | null
          title: string
        }
        Insert: {
          created_at?: string | null
          description: string
          ends_at: string
          entries_count?: number | null
          entry_method: string
          id?: string
          image_url?: string | null
          reward: string
          status?: string | null
          title: string
        }
        Update: {
          created_at?: string | null
          description?: string
          ends_at?: string
          entries_count?: number | null
          entry_method?: string
          id?: string
          image_url?: string | null
          reward?: string
          status?: string | null
          title?: string
        }
        Relationships: []
      }
      job_applications: {
        Row: {
          created_at: string | null
          email: string
          id: string
          job_id: string | null
          message: string
          name: string
          portfolio_url: string | null
          status: string | null
        }
        Insert: {
          created_at?: string | null
          email: string
          id?: string
          job_id?: string | null
          message: string
          name: string
          portfolio_url?: string | null
          status?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string
          id?: string
          job_id?: string | null
          message?: string
          name?: string
          portfolio_url?: string | null
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "job_applications_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "job_postings"
            referencedColumns: ["id"]
          },
        ]
      }
      job_postings: {
        Row: {
          created_at: string | null
          department: string
          description: string
          id: string
          location: string
          requirements: string[]
          responsibilities: string[]
          status: string | null
          title: string
          type: string
        }
        Insert: {
          created_at?: string | null
          department: string
          description: string
          id?: string
          location: string
          requirements: string[]
          responsibilities: string[]
          status?: string | null
          title: string
          type: string
        }
        Update: {
          created_at?: string | null
          department?: string
          description?: string
          id?: string
          location?: string
          requirements?: string[]
          responsibilities?: string[]
          status?: string | null
          title?: string
          type?: string
        }
        Relationships: []
      }
      leaderboard_entries: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          id: string
          kills: number | null
          level: number | null
          player_name: string
          rank: number | null
          score: number
          updated_at: string | null
          wins: number | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          id?: string
          kills?: number | null
          level?: number | null
          player_name: string
          rank?: number | null
          score: number
          updated_at?: string | null
          wins?: number | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          id?: string
          kills?: number | null
          level?: number | null
          player_name?: string
          rank?: number | null
          score?: number
          updated_at?: string | null
          wins?: number | null
        }
        Relationships: []
      }
      news_articles: {
        Row: {
          category: string
          content: string
          created_at: string | null
          excerpt: string
          featured: boolean | null
          id: string
          image_url: string | null
          published_at: string | null
          subtitle: string | null
          title: string
          updated_at: string | null
        }
        Insert: {
          category: string
          content: string
          created_at?: string | null
          excerpt: string
          featured?: boolean | null
          id?: string
          image_url?: string | null
          published_at?: string | null
          subtitle?: string | null
          title: string
          updated_at?: string | null
        }
        Update: {
          category?: string
          content?: string
          created_at?: string | null
          excerpt?: string
          featured?: boolean | null
          id?: string
          image_url?: string | null
          published_at?: string | null
          subtitle?: string | null
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      partners: {
        Row: {
          created_at: string | null
          description: string
          featured: boolean | null
          id: string
          logo_url: string | null
          name: string
          partnership_type: string
          website_url: string | null
        }
        Insert: {
          created_at?: string | null
          description: string
          featured?: boolean | null
          id?: string
          logo_url?: string | null
          name: string
          partnership_type: string
          website_url?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string
          featured?: boolean | null
          id?: string
          logo_url?: string | null
          name?: string
          partnership_type?: string
          website_url?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
