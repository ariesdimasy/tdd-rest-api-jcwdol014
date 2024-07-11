import { prismaMock } from "../setup_test/singelton";
import { getUser } from "../setup_test/function"

test('should return an array of users', async () => {
    prismaMock.user.findMany.mockResolvedValue([
        { id: 1, firstName: "John", lastName: "Doe", email: "john@example.com", createdAt: new Date(), updatedAt: new Date() },
        { id: 2, firstName: "Jane", lastName: "Smith", email: "jane@example.com", createdAt: new Date(), updatedAt: new Date() }
    ])

    await expect(getUser()).resolves.toMatchObject([
        { id: 1, firstName: "John", lastName: "Doe", email: "john@example.com" },
        { id: 2, firstName: "Jane", lastName: "Smith", email: "jane@example.com" }
    ])
})