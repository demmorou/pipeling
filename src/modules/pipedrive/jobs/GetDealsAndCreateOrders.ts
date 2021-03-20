import { ScheduledTask, schedule } from 'node-cron';
import { container } from 'tsyringe';

import { CreateOrderService } from '~modules/bling/services/CreateOrderService';

import { SearchDealsService } from '../services/SearchDealsService';

class GetDealsAndCreateOrders {
  public async run(): Promise<void> {
    await this.job();
  }

  private async job(): Promise<ScheduledTask> {
    return schedule('35 34 11 * * *', async () => {
      const getDeals = container.resolve(SearchDealsService);
      const deals = await getDeals.execute({ start: 0, status: 'won' });

      console.log(deals);

      const createOrder = container.resolve(CreateOrderService);
      await createOrder.execute();
    });
  }
}

export default new GetDealsAndCreateOrders().run();
