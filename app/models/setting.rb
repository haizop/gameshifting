
class Setting < ActiveRecord::Base
  belongs_to :panel
  belongs_to :user
end
