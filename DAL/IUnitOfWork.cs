// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================

using DAL.Repositories.Interfaces;

namespace DAL
{
    public interface IUnitOfWork
    {
        ICustomerRepository Customers { get; }
        IProductRepository Products { get; }
        IOrdersRepository Orders { get; }


        int SaveChanges();
    }
}
