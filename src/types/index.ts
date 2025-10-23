// User types
export interface User {
    id: string;
    name: string;
    email: string;
    role: 'admin' | 'agent' | 'user';
    createdAt: Date;
    updatedAt: Date;
}

// Ticket types
export interface Ticket {
    id: string;
    title: string;
    description: string;
    status: 'open' | 'in_progress' | 'resolved' | 'closed';
    priority: 'low' | 'medium' | 'high' | 'urgent';
    category: string;
    assignedTo?: string;
    createdBy: string;
    createdAt: Date;
    updatedAt: Date;
    dueDate?: Date;
}

// Comment types
export interface Comment {
    id: string;
    ticketId: string;
    content: string;
    authorId: string;
    createdAt: Date;
    updatedAt: Date;
}

// API Response types
export interface ApiResponse<T> {
    data: T;
    message: string;
    success: boolean;
}

export interface PaginatedResponse<T> {
    data: T[];
    pagination: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    };
}

// Form types
export interface CreateTicketForm {
    title: string;
    description: string;
    priority: Ticket['priority'];
    category: string;
    dueDate?: Date;
}

export interface UpdateTicketForm {
    title?: string;
    description?: string;
    status?: Ticket['status'];
    priority?: Ticket['priority'];
    category?: string;
    assignedTo?: string;
    dueDate?: Date;
}
