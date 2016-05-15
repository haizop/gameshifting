class Toggle < ActiveRecord::Base
  belongs_to :panel
  belongs_to :user
end
