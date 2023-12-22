export const environment = {
    api: {
        url: "https://food-delivery-53se.onrender.com/v1/api/admin/",
        role: {
            root: "role",
            new: 'role/new',
            update: 'role/update',
            delete: "role/delete",
            all: "role/all",
            amount: "role/amount"
        },
        user: {
            root: "user",
            new: "user/new",
            update: 'user/update',
            delete: "user/delete",
            amount: "user/amount",
        },
        access: {
            signin: "common/access/admin/signin",
            signout: "common/access/admin/signout",
        },
        category: {
            root: "category",
            new: "category/new",
            update: "category/update",
            delete: "category/delete",
            amount: "category/amount",
        }
    }
};
